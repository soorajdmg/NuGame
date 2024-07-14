const { ethers } = require("ethers");
const provider = new ethers.providers.InfuraProvider("mainnet", "YOUR_INFURA_PROJECT_ID");

const hre = require("hardhat");

async function main() {
    // Compile the contract
    // await hre.run('compile');

    // Define the token name and symbo
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());
    const tokenName = "GameToken";
    const tokenSymbol = "GTK";

    // Get the contract factory
    const Token = await hre.ethers.getContractFactory("Token");

    // Deploy the contract
    const token = await Token.deploy(tokenName, tokenSymbol, 2000);

    // Wait for the transaction to be mined
    const receipt = await token.waitForDeployment();

    // Log the deployed contract address
    console.log(`Token deployed to:`,token.target);
}

// Execute the main function
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
