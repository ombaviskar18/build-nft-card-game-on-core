require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");

const dotenv = require("dotenv");
dotenv.config();

function privateKey() {
  return process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [];
}

module.exports = {
  networks: {
    core_testnet: {
      url: "https://rpc.test.btcs.network", // Core Testnet RPC URL
      chainId: 1115, // Core Testnet chain ID
      accounts: privateKey(), // Use private key from environment variable
      gasPrice: 2000000000, // 2 Gwei
      maxPriorityFeePerGas: 1000000000, // 1 Gwei priority fee
      gas: 2100000, // Gas limit
    },
  },
  solidity: {
    version: "0.8.24", // Your Solidity version
    settings: {
      evmVersion: "paris", // EVM version
      optimizer: {
        enabled: true, // Enable optimizer
        runs: 1000, // Optimizer runs
      },
    },
  },
  etherscan: {
    enabled: false, // Disable Etherscan verification
  },
  sourcify: {
    enabled: true, // Enable Sourcify verification
  },
};