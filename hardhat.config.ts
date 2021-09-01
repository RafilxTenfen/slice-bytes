import { task } from "hardhat/config";
// import "@nomiclabs/hardhat-waffle";
import { HardhatUserConfig } from 'hardhat/types';
import 'hardhat-deploy';
import "@nomiclabs/hardhat-ethers";
import "hardhat-gas-reporter"

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 const config: HardhatUserConfig = {
  solidity: "0.7.3",
  namedAccounts: {
    deployer: "0x21a31Ee1afC51d94C2eFcCAa2092aD1028285549", // binance addr
  },
  networks: {
    hardhat: {
      live: false,
      blockGasLimit: 6800000,
      gasPrice: 60000000,
      tags: ['test', 'local'],
    },
    //Ganache
    development: {
      live: false,
      url: 'http://127.0.0.1:8545',
      gas: 6700000,
      gasPrice: 20000000000,
      tags: ['rawTests', 'local'],
      saveDeployments: false,
    },
  }
};
