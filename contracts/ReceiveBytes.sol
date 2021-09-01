//SPDX-License-Identifier: Unlicense
pragma solidity ^0.7.3;

/**
  @title Simple ownable contract to receive slice of bytes
  @author Rafilx Tenfen
  @notice This is just an test contract
 */
contract ReceiveBytes {
  address private _owner;
  bytes public data;

  event ChangeOwner(address previousOwner, address newOwner);

  /**
    * @dev Throws if called by any other account than the owner
    */
  modifier onlyOwner() {
    require(owner() == msg.sender, 'ReceiveBytes: caller is not the owner');
    _;
  }

  /**
    @dev Set the deployer of the contract as owner
   */
  constructor() {
    setOwner(msg.sender);
  }

  /**
    @notice Returns the current contract owner
   */
  function owner() public view returns (address) {
    return _owner;
  }

  function receiveData(bytes memory newData) public {
    data = newData;
  }

  /**
    @notice Change the contract owner
    @dev Throws if the newOwner address is zero address
   */
  function changeOwner(address newOwner) public onlyOwner {
    require(newOwner != address(0), 'ReceiveBytes: New owner cannot be zero address');
    setOwner(newOwner);
  }

  function setOwner(address newOwner) internal {
    require(_owner != newOwner, 'ReceiveBytes: This address is already the owner');
    address oldOwner = _owner;
    _owner = newOwner;
    emit ChangeOwner(oldOwner, newOwner);
  }
}
