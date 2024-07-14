require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    polygon: {
      url: 'https://polygon-amoy.g.alchemy.com/v2/RX8CRVTRvm3zbYGja3cJwwzZbm_TU4Bl', // Your Polygon RPC URL
      accounts: ['d14af005962ab7913d31fdb814986d81eafb74f779573df17726151d23bbd417'], // Your wallet's private key
    },
  },
};
