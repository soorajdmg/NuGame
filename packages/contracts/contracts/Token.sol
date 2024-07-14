// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;


import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Token is ERC20{
    constructor(string memory name, string memory symbol, uint256 initialSupply) ERC20(name, symbol) {
        _mint(msg.sender, initialSupply);
    }

    function mint(uint256 amount) external {
        _mint(msg.sender, amount);
    }

    function transferTokens(address to, uint256 amount) external {
        _transfer(msg.sender, to, amount);
    }
}


