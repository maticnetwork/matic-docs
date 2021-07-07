---
id: state-transfer
title: State Transfer
description: Transfer state or data from Ethereum to Matic without any mapping required
keywords:
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png
---

## Overview

Matic validators continuously monitor a contract on Ethereum chain called **_StateSender_**. Each time a registered contract on Ethreum chain calls this contract, it emits an event. Using this event Matic validators relay the data to another contract on Matic chain. This **_StateSync_** mechanism is used to send data from Ethereum to Matic.

Matic validators also periodically submit a hash of all transactions on Matic chain to Ethereum chain. This **_Checkpoint_** can be used to verify any transaction that happened on Matic. Once a transaction is verified to have happened on Matic chain, action can be taked accordingly on Ethereum.

These 2 mechanisms can be used together to enable two way data(state) transfer between Ethereum and Matic. To abstract out all these interactions, you can directly inherit our **_FxBaseRootTunnel_** (on Ethereum) and **_FxBaseChildTunnel_** (on Matic) contracts.

### Root Tunnel Contract

Use the `FxBaseRootTunnel` contract from [here](https://github.com/jdkanani/fx-portal/blob/main/contracts/tunnel/FxBaseRootTunnel.sol). This contract gives access to following functions:

- `function _processMessageFromChild(bytes memory data)`: This is a virtual function that needs to be implemented in the contract which inherits it to handle data being sent from ChildTunnel.
- `_sendMessageToChild(bytes memory message)`: This function can be called internally with any bytes data as a message. This data will be sent as it is to the child tunnel.
- `receiveMessage(bytes memory inputData)`: This function needs to be called to receive the message emitted by ChildTunnel. The proof of transaction needs to be provided as calldata. An example script to generate proof using matic.js is included below.

### Child Tunnel Contract

Use the `FxBaseChildTunnel` contract from [here](https://github.com/jdkanani/fx-portal/blob/main/contracts/tunnel/FxBaseChildTunnel.sol). This contract gives access to following functions:

- `function _processMessageFromRoot(uint256 stateId, address sender, bytes memory data)`: This is a virtual function that needs to implement the logic to handle message sent from the RootTunnel.
- `function _sendMessageToRoot(bytes memory message)`: This function can be called internally to send any bytes message to the root tunnel.

## Pre-requisite

- You'd need to inherit `FxBaseRootTunnel` contract in your root contract on ethereum. As an example, you can follow this [contract](https://github.com/jdkanani/fx-portal/blob/main/contracts/examples/state-transfer/FxStateRootTunnel.sol) . Similarly, inherit `FxBaseChildTunnel` contract in your child on Matic. Follow this [contract](https://github.com/jdkanani/fx-portal/blob/main/contracts/examples/state-transfer/FxStateChildTunnel.sol) as an example.
- While deploying your root contract on **Goerli testnet**, pass the address of `_checkpointManager` as `0x2890bA17EfE978480615e330ecB65333b880928e` and `_fxRoot` as `0x3d1d3E34f7fB6D26245E6640E1c50710eFFf15bA` . For **ethereum mainnet** `_checkpointManager` is `0x86e4dc95c7fbdbf52e33d563bbdb00823894c287` and `_fxRoot` is `0xfe5e5D361b2ad62c541bAb87C45a0B9B018389a2`.
- For deploying the child contract on **Mumbai testnet**, pass`0xCf73231F28B7331BBe3124B907840A94851f9f11` as `_fxChild` in constructor. For **Matic mainnet,** `_fxChild` will be `0x8397259c983751DAf40400790063935a11afa28a` .
- call `setFxChildTunnel` on deployed root tunnel with the address of child tunnel (E.g: [https://goerli.etherscan.io/tx/0x79cd30ace561a226258918b56ce098a08ce0c70707a80bba91197f127a48b5c2](https://goerli.etherscan.io/tx/0x79cd30ace561a226258918b56ce098a08ce0c70707a80bba91197f127a48b5c2) )
- call `setFxRootTunnel` on deployed child tunnel with address of root tunnel (E.g: [https://mumbai.polygonscan.com/tx/0xffd0cda35a8c3fd6d8c1c04cd79a27b7e5e00cfc2ffc4b864d2b45a8bb7e98b8/internal-transactions](https://mumbai.polygonscan.com/tx/0xffd0cda35a8c3fd6d8c1c04cd79a27b7e5e00cfc2ffc4b864d2b45a8bb7e98b8/internal-transactions) )

## Example contracts of state transfer bridge

- **Contracts**: [Fx-Portal Repository](https://github.com/jdkanani/fx-portal/tree/main/contracts/tunnel)
- **Goerli:** [0xc4432e7dab6c1b43f4dc38ad2a594ca448aec9af](https://goerli.etherscan.io/address/0xc4432e7dab6c1b43f4dc38ad2a594ca448aec9af)
- **Mumbai:** [0xa0060Cc969d760c3FA85844676fB654Bba693C22](https://mumbai.polygonscan.com/address/0xa0060Cc969d760c3FA85844676fB654Bba693C22/transactions)

## State transfer from Ethereum to Matic

- You'd need to call `_sendMessageToChild()` internally in your root contract and pass the data as an argument to be sent to Matic. (E.g: [https://goerli.etherscan.io/tx/0x28705fcae757a0c88694bd167cb94a2696a0bc9a645eb4ae20cff960537644c1](https://goerli.etherscan.io/tx/0x28705fcae757a0c88694bd167cb94a2696a0bc9a645eb4ae20cff960537644c1) )
- In your child contract, implement `_processMessageFromRoot()` virtual function in `FxBaseChildTunnel` to retrieve data from Ethereum. The data will be received automatically from the state receiver when the state is synced.

## State transfer from Matic to Ethereum

- Call `_sendMessageToRoot()` internally in your child contract with data as a parameter to be sent to Ethereum. ( E.g: [https://mumbai.polygonscan.com/tx/0x3cc9f7e675bb4f6af87ee99947bf24c38cbffa0b933d8c981644a2f2b550e66a/logs](https://mumbai.polygonscan.com/tx/0x3cc9f7e675bb4f6af87ee99947bf24c38cbffa0b933d8c981644a2f2b550e66a/logs) )
- Note the transaction hash as it'll be used to generate proof after it has been included as a checkpoint. Use the following sample script to generate proof from transaction hash.

```jsx
// npm i @maticnetwork/maticjs
const maticPOSClient = new require("@maticnetwork/maticjs").MaticPOSClient({
  maticProvider: "https://rpc-mumbai.matic.today", // replace if using mainnet
  parentProvider: "https://rpc.slock.it/goerli", // replace if using mainnet
});
const proof = maticPOSClient.posRootChainManager
  .customPayload(
    "0x3cc9f7e675bb4f6af87ee99947bf24c38cbffa0b933d8c981644a2f2b550e66a", // replace with txn hash of sendMessageToRoot
    "0x8c5261668696ce22758910d05bab8f186d6eb247ceac2af2e82c7dc17669b036" // SEND_MESSAGE_EVENT_SIG, do not change
  )
  .then(console.log);
```

- Implement `_processMessageFromChild()` in your root contract.
- Use the generated proof as an input to `receiveMessage()` to retrieve data sent from child tunnel into your contract. ( E.g: [https://goerli.etherscan.io/tx/0x436dcd500659bea715a09d9257295ddc21290769daeea7f0b666166ef75e3515](https://goerli.etherscan.io/tx/0x436dcd500659bea715a09d9257295ddc21290769daeea7f0b666166ef75e3515) )
