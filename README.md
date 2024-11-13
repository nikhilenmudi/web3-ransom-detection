
# Web3 Ransom Detection

A decentralized application (dApp) for detecting and managing malicious Ethereum addresses using blockchain technology. This project allows users to:
- Add suspicious wallet addresses to a public registry.
- Check whether a wallet address is flagged as suspicious.
- Demonstrate how blockchain technology can be leveraged for transparency and security in tracking malicious activities.

---

## Features
1. **Smart Contract**: 
   - A Solidity-based contract deployed on the Sepolia testnet.
   - Manages a registry of suspicious Ethereum addresses.
   - Emits events for flagged transactions.

2. **Frontend (React)**:
   - User-friendly interface to interact with the smart contract.
   - Integrated with MetaMask for wallet connections and transaction signing.

3. **Backend Integration**:
   - Uses Hardhat to manage smart contract development, deployment, and testing.

4. **Environment Variables**:
   - Secured via `.env` files to keep sensitive data like private keys and API keys safe.

5. **Add Suspicious Address**:
   - Allows users to flag an Ethereum address as suspicious.
   - Requires MetaMask for signing the transaction.

6. **Check If Suspicious**:
   - Query the blockchain to check if an Ethereum address is flagged as suspicious.
   - No gas fees required for this operation.

7. **MetaMask Integration**:
   - Supports wallet connection for signing transactions and querying the blockchain.

8. **Smart Contract on Sepolia Testnet**:
   - Deployed on Sepolia, enabling low-cost interactions for testing purposes.

---

## Project Structure
```
web3-ransom-detection/
├── contracts/               # Solidity smart contracts
│   └── SuspiciousAddressTracker.sol
├── scripts/                 # Deployment and interaction scripts
│   ├── deploy.js
│   └── interact.js
├── frontend/                # Frontend React app
│   ├── public/              # Public assets (e.g., images, favicon)
│   ├── src/                 # React components and code
│   │   ├── components/      # Reusable UI components
│   │   ├── App.js           # Main React app file
│   │   └── index.js         # Entry point
│   └── .env                 # Frontend-specific environment variables
├── .env                     # Backend environment variables
├── hardhat.config.js        # Hardhat configuration
├── package.json             # Dependencies and scripts
├── README.md                # Documentation
└── node_modules/            # Installed npm packages
```

---

## Getting Started

### Prerequisites
- Node.js and npm installed.
- MetaMask browser extension installed.
- You will need some test tokens in your wallet. Use Alchemy or any other faucets to generate tokens

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/web3-ransom-detection.git
   cd web3-ransom-detection
   ```

2. Install dependencies for both the backend and frontend:
   ```bash
   npm install
   cd frontend
   npm install
   cd ..
   ```

3. Create `.env` files:
   - Backend `.env`:
     ```plaintext
     ALCHEMY_API_KEY=your-alchemy-api-key
     WALLET_PRIVATE_KEY=your-wallet-private-key
     ```
   - Frontend `.env`:
     ```plaintext
     REACT_APP_CONTRACT_ADDRESS=your-deployed-contract-address
     REACT_APP_ALCHEMY_API_KEY=your-alchemy-api-key
     ```

---

## Usage

### 1. Deploy the Smart Contract
To deploy the smart contract to the Sepolia testnet:
```bash
npx hardhat run scripts/deploy.js --network sepolia
```
The deployed contract address will appear in the terminal.

### 2. Start the Frontend
Navigate to the `frontend` directory and start the React app:
```bash
cd frontend
npm start
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Interact with the dApp
- Connect your wallet using MetaMask.
- Add suspicious Ethereum addresses to the registry.
- Check whether a specific address is flagged as suspicious.

---

## Environment Variables
- **Backend `.env`**:
  - `ALCHEMY_API_KEY`: Your Alchemy API key for connecting to the Sepolia testnet.
  - `WALLET_PRIVATE_KEY`: Your wallet's private key for deploying and interacting with contracts.
- **Frontend `.env`**:
  - `REACT_APP_CONTRACT_ADDRESS`: The deployed contract address.
  - `REACT_APP_ALCHEMY_API_KEY`: Alchemy API key for fetching blockchain data.

---

## Technologies Used
- **Solidity**: Smart contract programming language.
- **Hardhat**: Ethereum development environment.
- **React**: Frontend framework for building user interfaces.
- **ethers.js**: Library for interacting with Ethereum.
- **MetaMask**: Browser-based wallet for signing transactions.
- **Sepolia Testnet**: Ethereum test network for deploying and testing contracts.

---

## Future Improvements
- Add a feature to listen for real-time events and display flagged transactions in the frontend.
- Optimize the smart contract for lower gas costs.
- Implement token-based incentives for users reporting malicious addresses.
- Support for Layer 2 solutions like Polygon for lower transaction fees.

---

## Contributing
1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push:
   ```bash
   git commit -m "Add new feature"
   git push origin feature-name
   ```
4. Create a pull request.

---

## License
This project is open-source and available under the [MIT License](LICENSE).
