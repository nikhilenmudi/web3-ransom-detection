const hre = require("hardhat");

async function main() {
    // Get the contract factory
    const SuspiciousAddressTracker = await hre.ethers.getContractFactory("SuspiciousAddressTracker");

    // Deploy the contract
    const tracker = await SuspiciousAddressTracker.deploy();

    console.log("Deploying contract...");

    // Wait for the deployment transaction to be mined
    await tracker.waitForDeployment();

    // Log the deployed contract address
    console.log("SuspiciousAddressTracker deployed to:", await tracker.getAddress());
}

// Run the deployment script
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
