# Skill Verification System

## Overview
The Skill Verification System is a blockchain-based application that enables individuals to upload skill documents for verification. This project empowers users to manage their skills transparently while allowing administrators to review and authenticate submissions. By leveraging blockchain technology, the system ensures data integrity and enhances trust in the verification process.

## Features
- **User Registration**: Users can create an account to upload skill-related documents.
- **Document Upload**: Users can submit their skill documents for verification.
- **Admin Dashboard**: Administrators can review submitted documents and authenticate skills.
- **Blockchain Verification**: Skill verifications are recorded on the blockchain for transparency and immutability.
- **Decentralized Storage**: Documents are stored securely using IPFS (InterPlanetary File System).

## Technologies Used
- **Frontend**: HTML, CSS, JavaScript, Web3.js
- **Backend**: Flask
- **Smart Contracts**: Solidity
- **Blockchain**: Ethereum (using Ganache for local development)
- **Decentralized Storage**: IPFS

## Installation
To run the Skill Verification System locally, follow these steps:

1. **Clone the Repository**:
   git clone https://github.com/Aish2233/skill-verification-system-blockchain.git


2. **Navigate to the Project Directory**:
   cd skill-verification-system-blockchain
 

3. **Install Dependencies**:
   - Install Python dependencies for the Flask backend:
     pip install -r requirements.txt
     
   - Install Node.js dependencies for the frontend (if applicable):
     npm install
    

4. **Start Ganache**: Launch Ganache to create a local Ethereum blockchain.

5. **Deploy Smart Contracts**:
   - Navigate to the Truffle project directory and deploy the contracts:
     truffle migrate


6. **Run the Flask Application**:
   python app.py
   

## Usage
- Access the application through your web browser at `http://localhost:5000`.
- Register as a user or log in as an administrator to manage skill verifications.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.
