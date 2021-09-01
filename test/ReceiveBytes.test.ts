import { ethers } from "hardhat";
import { Signer } from "ethers";
import { expect } from 'chai'
import Web3 from 'web3';

describe("Receive Bytes tests", function () {
  let accounts: Signer[];
  let deployer: Signer;
  let other: Signer;

  beforeEach(async function () {
    [deployer, ...accounts] = await ethers.getSigners();
  });

  it("should deploy with deployer", async function () {
    const receiveBytesFactory = await ethers.getContractFactory("ReceiveBytes", other);

    const receiveBytes = await receiveBytesFactory.deploy();
    expect(await receiveBytes.owner()).to.equal(await deployer.getAddress());
  });

  it("should receive data", async function () {
    const receiveBytesFactory = await ethers.getContractFactory("ReceiveBytes");

    const receiveBytes = await receiveBytesFactory.deploy();
    const dataBytes = Web3.utils.encodePacked('anything', 'it can be multiples stuffs');
    await receiveBytes.receiveData(dataBytes);
    expect(await receiveBytes.data()).to.equal(dataBytes);
  });
});