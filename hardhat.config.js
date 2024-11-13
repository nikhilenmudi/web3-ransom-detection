require("@nomicfoundation/hardhat-ethers");
require("dotenv").config();

module.exports = {
    solidity: "0.8.27",
    networks: {
        sepolia: {
            url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`, // Replace with your Alchemy API key
            accounts: [process.env.WALLET_PRIVATE_KEY], // Replace with your wallet's private key
        },
    },
};