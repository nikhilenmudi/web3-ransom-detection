// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SuspiciousAddressTracker {
    // Mapping to store suspicious addresses
    mapping(address => bool) private suspiciousAddresses;

    // Event to emit when a suspicious transaction is flagged
    event SuspiciousTransaction(address indexed from, address indexed to, uint256 amount);

    // Add an address to the suspicious list
    function addSuspiciousAddress(address _address) public {
        suspiciousAddresses[_address] = true;
    }

    // Remove an address from the suspicious list
    function removeSuspiciousAddress(address _address) public {
        suspiciousAddresses[_address] = false;
    }

    // Check if an address is suspicious
    function isSuspiciousAddress(address _address) public view returns (bool) {
        return suspiciousAddresses[_address];
    }

    // Flag a transaction and emit an event if it involves a suspicious address
    function flagTransaction(address _from, address _to, uint256 _amount) public {
        if (suspiciousAddresses[_from] || suspiciousAddresses[_to]) {
            emit SuspiciousTransaction(_from, _to, _amount);
        }
    }
}
