// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SkillVerification {
    struct Certification {
        string name;
        bool isVerified;
        string ipfsHash; // Store the IPFS file hash
    }

    struct Employee {
        string name;
        uint overallRating;
        Certification[] certifications;
        mapping(address => bool) verificationRequests; // Track verification requests
    }

    struct EmployeeRequest {
        string name;
        uint overallRating;
        bool isPending;
    }

    mapping(address => Employee) public employees;
    mapping(address => EmployeeRequest) public employeeRequests;
    address public admin;

    constructor() {
        admin = msg.sender; // The deployer is the admin
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    // Allow any user to request adding an employee
    function requestAddEmployee(string memory _name, uint _overallRating) public {
        require(bytes(_name).length > 0, "Name cannot be empty");
        require(_overallRating > 0, "Rating must be positive");

        // Record the request with pending status
        employeeRequests[msg.sender] = EmployeeRequest({
            name: _name,
            overallRating: _overallRating,
            isPending: true
        });
    }

    // Admin confirms the employee request
    function confirmAddEmployee(address _employeeAddress) public onlyAdmin {
        EmployeeRequest memory request = employeeRequests[_employeeAddress];
        require(request.isPending, "No pending employee request");

        // Add employee details to the contract
        employees[_employeeAddress].name = request.name;
        employees[_employeeAddress].overallRating = request.overallRating;

        // Mark the request as confirmed (no longer pending)
        employeeRequests[_employeeAddress].isPending = false;
    }

    function addCertification(string memory _certificationName, string memory _ipfsHash) public {
        require(bytes(employees[msg.sender].name).length > 0, "Employee not registered.");
        employees[msg.sender].certifications.push(Certification(_certificationName, false, _ipfsHash));
    }

    function requestVerification(address employeeAddress, string memory certificationHash) public {
        // Track the verification request by the user
        employees[employeeAddress].verificationRequests[msg.sender] = true;

        // Optionally, you can emit an event here for off-chain listeners
        emit VerificationRequested(employeeAddress, certificationHash, msg.sender);
    }

    function confirmVerification(address requester, string memory certificationHash) public {
        require(employees[msg.sender].verificationRequests[requester], "No verification request found from this address");

        // Mark the certification as verified
        Certification[] storage certifications = employees[msg.sender].certifications;
        for (uint256 i = 0; i < certifications.length; i++) {
            if (keccak256(abi.encodePacked(certifications[i].ipfsHash)) == keccak256(abi.encodePacked(certificationHash))) {
                certifications[i].isVerified = true; // Set the certification as verified
                break;
            }
        }
        // Remove the verification request
        delete employees[msg.sender].verificationRequests[requester];
    }

    function verifyCertificationByHash(address employeeAddress, string memory certificationHash) public view returns (bool) {
        Certification[] memory certifications = employees[employeeAddress].certifications;

        for (uint256 i = 0; i < certifications.length; i++) {
            // Check if the hash of the certification matches the provided hash
            if (keccak256(abi.encodePacked(certifications[i].ipfsHash)) == keccak256(abi.encodePacked(certificationHash))) {
                return certifications[i].isVerified; // Return verification status
            }
        }
        return false; // Certification not found
    }

    function getCertifications(address _employeeAddress) public view returns (Certification[] memory) {
        return employees[_employeeAddress].certifications;
    }

    // Get the pending employee request details
    function getEmployeeRequest(address _employeeAddress) public view returns (EmployeeRequest memory) {
        return employeeRequests[_employeeAddress];
    }
    function getVerificationStatus(address employeeAddress, string memory certificationHash) public view returns (bool) {
    // Assuming you have some logic to track the verification status
    Certification[] memory certifications = employees[employeeAddress].certifications;

    for (uint256 i = 0; i < certifications.length; i++) {
        // Check if the hash of the certification matches the provided hash
        if (keccak256(abi.encodePacked(certifications[i].ipfsHash)) == keccak256(abi.encodePacked(certificationHash))) {
            return certifications[i].isVerified; // Return the verification status
        }
    }
    return false; // Certification not found
}

    // Event to signal that a verification request has been made
    event VerificationRequested(address indexed employee, string certificationHash, address indexed requester);
}
