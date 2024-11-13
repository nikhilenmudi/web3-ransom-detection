import React, { useState, useEffect } from "react";
import { BrowserProvider, Contract } from "ethers";

const App = () => {
    const [address, setAddress] = useState("");
    const [isSuspicious, setIsSuspicious] = useState(null);
    const [suspiciousAddresses, setSuspiciousAddresses] = useState([]);
    const [isConnected, setIsConnected] = useState(false);

    const contractABI = [
        "function addSuspiciousAddress(address _address) public",
        "function isSuspiciousAddress(address _address) public view returns (bool)",
        "event SuspiciousTransaction(address indexed from, address indexed to, uint256 amount)",
    ];
    const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;

    // Function to connect MetaMask
    const connectWallet = async () => {
        if (!window.ethereum) {
            alert("MetaMask is required!");
            return;
        }
        try {
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
            console.log("Connected wallet:", accounts[0]);
            alert(`Connected to wallet: ${accounts[0]}`);
            setIsConnected(true);
            checkNetwork();
        } catch (error) {
            console.error("Failed to connect wallet:", error);
            alert("Failed to connect wallet. Please try again.");
        }
    };

    // Function to check network
    const checkNetwork = async () => {
        try {
            const { chainId } = await window.ethereum.request({ method: "eth_chainId" });
            if (chainId !== "0xaa36a7") { // Sepolia chain ID
                alert("Please switch to the Sepolia network in MetaMask!");
            }
        } catch (error) {
            console.error("Failed to check network:", error);
        }
    };

    // Function to add suspicious address
    const addSuspiciousAddress = async () => {
        if (!window.ethereum) {
            alert("MetaMask is required!");
            return;
        }
        try {
            const provider = new BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const contract = new Contract(contractAddress, contractABI, signer);

            const tx = await contract.addSuspiciousAddress(address);
            await tx.wait();
            alert(`Address ${address} added as suspicious! Transaction Hash: ${tx.hash}`);

            // Update the list of suspicious addresses
            fetchSuspiciousAddresses();
        } catch (error) {
            console.error("Failed to add suspicious address:", error);
            alert("Failed to add suspicious address. Check the console for details.");
        }
    };

    // Function to check if an address is suspicious
    const checkAddress = async () => {
        if (!window.ethereum) {
            alert("MetaMask is required!");
            return;
        }
        try {
            const provider = new BrowserProvider(window.ethereum);
            const contract = new Contract(contractAddress, contractABI, provider);

            const result = await contract.isSuspiciousAddress(address);
            setIsSuspicious(result);
        } catch (error) {
            console.error("Failed to check address:", error);
            alert("Failed to check address. Check the console for details.");
        }
    };

    // Function to fetch suspicious addresses (mocked here, update if smart contract supports it)
    const fetchSuspiciousAddresses = async () => {
        // Replace with actual fetching logic if contract supports returning all addresses
        setSuspiciousAddresses((prev) => [...prev, address]); // Mocked example
    };

    // Function to listen for real-time events
    const listenToEvents = async () => {
        if (!window.ethereum) return;

        const provider = new BrowserProvider(window.ethereum);
        const contract = new Contract(contractAddress, contractABI, provider);

        contract.on("SuspiciousTransaction", (from, to, amount) => {
            console.log("Suspicious transaction detected:", { from, to, amount });
            alert(`Suspicious transaction detected! From: ${from}, To: ${to}, Amount: ${amount.toString()}`);
        });
    };

    // Effect to listen for events when connected
    useEffect(() => {
        if (isConnected) {
            listenToEvents();
        }
    }, [isConnected]);

    return (
        <div style={{ padding: "20px" }}>
            <h1>Web3 Ransom Detection</h1>
            {!isConnected && (
                <button onClick={connectWallet} style={{ marginBottom: "20px" }}>
                    Connect Wallet
                </button>
            )}
            <br />
            <input
                type="text"
                placeholder="Enter Ethereum Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                style={{ padding: "10px", width: "300px", marginBottom: "10px" }}
            />
            <br />
            <button onClick={addSuspiciousAddress} style={{ marginRight: "10px" }}>
                Add Suspicious Address
            </button>
            <button onClick={checkAddress}>Check If Suspicious</button>
            {isSuspicious !== null && (
                <p>
                    Address {address} is {isSuspicious ? "suspicious" : "not suspicious"}.
                </p>
            )}
            <h2>Suspicious Addresses</h2>
            <ul>
                {suspiciousAddresses.map((addr, index) => (
                    <li key={index}>{addr}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;
