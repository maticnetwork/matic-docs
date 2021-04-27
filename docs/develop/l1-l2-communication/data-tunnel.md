---
id: data-tunnel
title: Data Tunnel
description: Transfer state or data from Ethereum to Matic via Contracts
keywords:
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png 
---

## Overview
Matic validators continuously monitor a contract on Ethereum chain called **_StateSender_**. Each time a registered contract on Ethreum chain calls this contract, it emits an event. Using this event Matic validators relay the data to another contract on Matic chain. This **_StateSync_** mechanism is used to send data from Ethereum to Matic.

Matic validators also periodically submit a hash of all transactions on Matic chain to Ethereum chain. This **_Checkpoint_** can be used to verify any transaction that happened on Matic. Once a transaction is verified to have happened on Matic chain, action can be taken accordingly on Ethereum.

These 2 mechanisms can be used together to enable two way data transfer between Ethereum and Matic. To abstract out all these interactions, you can directly inherit our **_BaseRootTunnel_** (on Ethereum) and **_BaseChildTunnel_** (on Matic) contracts.


## Root Tunnel Contract
Use the **_BaseRootTunnel_** contract from [here](https://github.com/maticnetwork/pos-portal/blob/master/contracts/tunnel/BaseRootTunnel.sol).
This contract gives access to following functions -
- `_sendMessageToChild(bytes memory message)` - This function can be called internally with any bytes data as message. This data will be sent as it is to **_ChildTunnel_**.

- `_processMessageFromChild(bytes memory message)` - This is a virtual function that needs to be implemented to handle data being sent from **_ChildTunnel_**.

- `receiveMessage(bytes memory inputData)` - This function needs to be called to receive the message emitted by **_ChildTunnel_**. The proof of transaction needs to be provided as calldata. An example script to generate proof using matic SDK in given [here](https://github.com/rahuldamodar94/matic-learn-pos/blob/tunnel/tunnel/exit.js).

## Child Tunnel Contract
Use the **_BaseChildTunnel_** contract from [here](https://github.com/maticnetwork/pos-portal/blob/master/contracts/tunnel/BaseChildTunnel.sol).
This contract gives access to following functions -
- `_sendMessageToRoot(bytes memory message)` - This function can be called internally to send any bytes message to **_RootTunnel_**.

- `_processMessageFromRoot(bytes memory message)` - This is a virtual function that needs to implement the logic to handle message sent from **_RootTunnel_**.

## Implementation
As an example we will implement contracts where we want to calculate sum till a provied number. The sum can be calculated on Ethereum chain by calling `calculateSum` function. This will be too expensive due to high gas fees.

Alternatively we can call `calculateSumOnChildChain`. This will internally send the number to ChildTunnel by calling `_sendMessageToChild`. Then on Matic chain `_processMessageFromRoot` will receive this number and do required calculation. After calculation is done call `_sendMessageToRoot` to emit this calculated result. Now finally call `receiveMessage` on RootTunnel giving proof of emitted result. This will internally call `_processMessageFromChild` to store it in variable.

Both these methods will give the same final result. Second method takes some more transactions but overall gas cost will be less because all heavy processing is done on Matic chain and only result is stored on Ethereum.

Please note that you have to set the child tunnel contract address and checkpoint manager address in the root tunnel contract. `setCheckpointManager` and `setChildTunnel` are the two functions exposed on the root tunnel contract for this purpose. The child tunnel contract address has to be passed to `setChildTunnel` and `0x2890bA17EfE978480615e330ecB65333b880928e` has to be passed to `setCheckpointManager`. This address is the contract address of the root chain proxy on Goerli. Its mainnet equivalent is `0x86E4Dc95c7FBdBf52e33D563BbDB00823894C287`.


```js
pragma solidity 0.6.6;

import {BaseRootTunnel} from "./BaseRootTunnel.sol";

contract RootTunnel is BaseRootTunnel {
    uint256 public sum;
    uint256 public sumFromChildChain;

    function _processMessageFromChild(bytes memory message) internal override {
        (uint256 n) = abi.decode(message, (uint256));
        sumFromChildChain = n;
    }

    function calculateSumOnChildChain(uint256 number) external {
        _sendMessageToChild(abi.encode(number));
    }

    // reference function to do full calculation on ethereum
    function calculateSum(uint256 number) external {
        sum = 0;
        for (; number > 0; number--) {
            sum += number;
        }
    }
}
```

```js
pragma solidity 0.6.6;

import {BaseChildTunnel} from "./BaseChildTunnel.sol";

contract ChildTunnel is BaseChildTunnel {
    uint256 public sum;

    function _processMessageFromRoot(bytes memory message) internal override {
        uint256 number = abi.decode(message, (uint256));
        sum = 0;
        for (; number > 0; number--) {
            sum += number;
        }
    }

    function sendSumToRoot() external {
        _sendMessageToRoot(abi.encode(sum));
    }
}
```

Once you are ready with implementing your version of RootTunnel and ChildTunnel contracts, you need to register them on StateSender contract.

<center>
<button className="btn btn-primary btn-md">
  <a href="/docs/develop/ethereum-matic/submit-mapping-request" style={{color: 'inherit'}}>
    Submit Sender/Receiver Mapping Request
  </a>
</button>
</center>
