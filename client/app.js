const ipfs = window.IpfsHttpClient.create('http://127.0.0.1:5003'); // Point directly to your IPFS node


const contractABI = [  {
  "inputs": [],
  "stateMutability": "nonpayable",
  "type": "constructor"
},
{
  "anonymous": false,
  "inputs": [
    {
      "indexed": true,
      "internalType": "address",
      "name": "employee",
      "type": "address"
    },
    {
      "indexed": false,
      "internalType": "string",
      "name": "certificationHash",
      "type": "string"
    },
    {
      "indexed": true,
      "internalType": "address",
      "name": "requester",
      "type": "address"
    }
  ],
  "name": "VerificationRequested",
  "type": "event"
},
{
  "inputs": [],
  "name": "admin",
  "outputs": [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ],
  "stateMutability": "view",
  "type": "function",
  "constant": true
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ],
  "name": "employeeRequests",
  "outputs": [
    {
      "internalType": "string",
      "name": "name",
      "type": "string"
    },
    {
      "internalType": "uint256",
      "name": "overallRating",
      "type": "uint256"
    },
    {
      "internalType": "bool",
      "name": "isPending",
      "type": "bool"
    }
  ],
  "stateMutability": "view",
  "type": "function",
  "constant": true
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "",
      "type": "address"
    }
  ],
  "name": "employees",
  "outputs": [
    {
      "internalType": "string",
      "name": "name",
      "type": "string"
    },
    {
      "internalType": "uint256",
      "name": "overallRating",
      "type": "uint256"
    }
  ],
  "stateMutability": "view",
  "type": "function",
  "constant": true
},
{
  "inputs": [
    {
      "internalType": "string",
      "name": "_name",
      "type": "string"
    },
    {
      "internalType": "uint256",
      "name": "_overallRating",
      "type": "uint256"
    }
  ],
  "name": "requestAddEmployee",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "_employeeAddress",
      "type": "address"
    }
  ],
  "name": "confirmAddEmployee",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "string",
      "name": "_certificationName",
      "type": "string"
    },
    {
      "internalType": "string",
      "name": "_ipfsHash",
      "type": "string"
    }
  ],
  "name": "addCertification",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "employeeAddress",
      "type": "address"
    },
    {
      "internalType": "string",
      "name": "certificationHash",
      "type": "string"
    }
  ],
  "name": "requestVerification",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "requester",
      "type": "address"
    },
    {
      "internalType": "string",
      "name": "certificationHash",
      "type": "string"
    }
  ],
  "name": "confirmVerification",
  "outputs": [],
  "stateMutability": "nonpayable",
  "type": "function"
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "employeeAddress",
      "type": "address"
    },
    {
      "internalType": "string",
      "name": "certificationHash",
      "type": "string"
    }
  ],
  "name": "verifyCertificationByHash",
  "outputs": [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ],
  "stateMutability": "view",
  "type": "function",
  "constant": true
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "_employeeAddress",
      "type": "address"
    }
  ],
  "name": "getCertifications",
  "outputs": [
    {
      "components": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "bool",
          "name": "isVerified",
          "type": "bool"
        },
        {
          "internalType": "string",
          "name": "ipfsHash",
          "type": "string"
        }
      ],
      "internalType": "struct SkillVerification.Certification[]",
      "name": "",
      "type": "tuple[]"
    }
  ],
  "stateMutability": "view",
  "type": "function",
  "constant": true
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "_employeeAddress",
      "type": "address"
    }
  ],
  "name": "getEmployeeRequest",
  "outputs": [
    {
      "components": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "overallRating",
          "type": "uint256"
        },
        {
          "internalType": "bool",
          "name": "isPending",
          "type": "bool"
        }
      ],
      "internalType": "struct SkillVerification.EmployeeRequest",
      "name": "",
      "type": "tuple"
    }
  ],
  "stateMutability": "view",
  "type": "function",
  "constant": true
},
{
  "inputs": [
    {
      "internalType": "address",
      "name": "employeeAddress",
      "type": "address"
    },
    {
      "internalType": "string",
      "name": "certificationHash",
      "type": "string"
    }
  ],
  "name": "getVerificationStatus",
  "outputs": [
    {
      "internalType": "bool",
      "name": "",
      "type": "bool"
    }
  ],
  "stateMutability": "view",
  "type": "function",
  "constant": true
}
];
const contractAddress = '0x7d4100E456c6f84ad766660cBB1BF23D08e0011C';

const ADMIN_ADDRESS = '0x7d4100E456c6f84ad766660cBB1BF23D08e0011C'; // Replace with actual admin address
const USER_ADDRESSES = [
    '0xF0e5a5Ba49b0D277D93D6dcDe2fB8A3166b5bA44', // Replace with actual user address 1
    
];

// Variables for Web3 and contract instance
let web3;
let skillVerificationContract;
let userAccount;

async function connectToMetamask() {
  try {
    // Check if MetaMask is installed
    if (window.ethereum) {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      userAccount = accounts[0];
      document.getElementById('userAccountDisplay').innerText = `Logged in as: ${userAccount}`;
      // Initialize Web3 and the contract instance
      web3 = new Web3(window.ethereum);
      skillVerificationContract = new web3.eth.Contract(contractABI, contractAddress);
    } else {
      alert('Please install MetaMask to interact with this feature.');
    }
  } catch (error) {
    console.error('Error connecting to MetaMask:', error);
    alert('Failed to connect to MetaMask. Check console for details.');
  }
}
async function requestAddEmployee() {
  try {
    if (!userAccount) {
      alert('Please log in to add an employee.');
      return;
    }

    const employeeName = document.getElementById('employeeName').value.trim();
    const overallRating = document.getElementById('overallRating').value.trim();

    if (!employeeName || !overallRating) {
      alert('Please enter all required fields.');
      return;
    }

    // Call the smart contract function to request adding an employee
    await skillVerificationContract.methods
      .requestAddEmployee(employeeName, overallRating)
      .send({ from: userAccount });

    alert('Added successfully!');
  } catch (error) {
    console.error('Error adding employee:', error);
    alert('Failed to submit employee request. Check the console for details.');
  }
}

async function addCertification() {
  try {
    if (!userAccount) {
      alert('Please log in to add a certification.');
      return;
    }

    const certificationName = document.getElementById('certificationName').value.trim();
    const fileInput = document.getElementById('certificationFile').files[0];

    if (!certificationName || !fileInput) {
      alert('Please enter all required fields.');
      return;
    }

    const fileContent = await readFileAsync(fileInput);

    // Upload file to IPFS
    const ipfsResult = await ipfs.add(fileContent);
    const ipfsHash = ipfsResult.path;
    console.log("IPFS Hash:", ipfsHash); 

    // Add certification using the logged-in user's address (userAccount)
    await skillVerificationContract.methods
      .addCertification(certificationName, ipfsHash)
      .send({ from: userAccount });

    alert('Certification added successfully!');
  } catch (error) {
    console.error('Error adding certification:', error);
    alert('Failed to add certification. Check the console for details.');
  }
}


async function verifyCertification() {
  try {
      if (!userAccount) {
          alert('Please log in to verify a certification.');
          return;
      }

      const employeeAddress = document.getElementById('certificationEmployeeAddress').value.trim();
      const certificationHash = document.getElementById('certificationHash').value.trim();

      if (!certificationHash) {
          alert('Please enter the certification hash.');
          return;
      }

      // Log the values being sent to the smart contract
      console.log("Requesting verification for:", employeeAddress, "with hash:", certificationHash);

      // Call the smart contract method to request verification
      await skillVerificationContract.methods
          .requestVerification(employeeAddress, certificationHash) // Make sure to pass both parameters
          .send({ from: userAccount }); // Use .send for state-changing functions

      alert('Verified successfully.');
  } catch (error) {
      console.error('Error requesting verification:', error);
      alert('Failed to request verification. Check the console for details.');
  }
}




function readFileAsync(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}