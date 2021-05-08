---
id: eth
title: ETH Deposit and Withdraw Guide
sidebar_label: ETH
description: Build your next blockchain app on Matic.
keywords:
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png
---

This tutorial uses the Matic Testnet ( Mumbai ) which is mapped to the Goerli Network to demonstrate the asset transfer to and from the two blockchains. An **important thing to be noted** while following this tutorial is that you should always use a Proxy address whenever it is available. For example, the **RootChainManagerProxy** address has to be used for interaction instead of the **RootChainManager** address. The **PoS contract addresses, ABI, Test Token Addresses** and other deployment details of the PoS bridge contracts can be found [here](/docs/develop/ethereum-matic/pos/deployment).

**Mapping your assets** is necessary to integrate the PoS bridge on your application. You can submit a mapping request [here](/docs/develop/ethereum-matic/submit-mapping-request). But for the purpose of this tutorial, we have already deployed the **Test tokens** and Mapped then on the PoS bridge. You may need it for trying out the tutorial on your own. You can request the desired Asset from the [faucet](https://faucet.matic.network/). If the test tokens are unavailable on the faucet, do reach us on [discord](https://discord.gg/er6QVj)

In the upcoming tutorial, every step will be explained in detail along with a few code snippets. However, you can always refer to this [repository](https://github.com/maticnetwork/matic.js/tree/v2.0.2/examples/POS-client) which will have all the **example source code** that can help you to integrate and understand the working of PoS bridge.

## High Level Flow

Deposit ETH -

1. Make **_depositEtherFor_** call on **_RootChainManager_** and **send **the required ether.

Withdraw ETH -

1. **_Burn_** tokens on matic chain.
2. Call **_exit_** function on **_RootChainManager_** to submit proof of burn transaction. This call can be made **_after checkpoint_** is submitted for the block containing burn transaction.

## Steps

### Deposit

ETH can be deposited to matic chain by calling **_depositEtherFor_** on RootChainManager contract. Matic POS client exposes **_depositEtherForUser_** method to make this call.

**_ETH_** is deposited as **_ERC20_** token on Matic chain. For withdrawing it follow the same process as withdrawing ERC20 tokens.

```jsx
await maticPOSClient.depositEtherForUser(from, amount, {
  from,
  gasPrice: "10000000000",
});
```

> NOTE: Deposits from Ethereum to Matic happen using a state sync mechanism and takes about ~5-7 minutes. After waiting for this time interval, it is recommended to check the balance using web3.js/matic.js library or using Metamask. The explorer will show the balance only if at least one asset transfer has happened on the child chain. This [link](/docs/develop/ethereum-matic/pos/deposit-withdraw-event-pos) explains how to track the deposit events.

### Burn

User can call `withdraw` function of `MaticWETH` contract. This function should burn the tokens. Since Ether is an ERC20 token on matic chain, use `burnERC20` method that Matic POS client exposes to make this call.

```jsx
await maticPOSClient.burnERC20(childToken, amount, { from });
```

Store the transaction hash for this call and use it while generating burn proof.

### Exit

Once the **checkpoint** has been submitted for the block containing burn transaction, user should call the **exit** function of `RootChainManager` contract and submit the proof of burn. Upon submitting valid proof tokens are transferred to the user. Matic POS client exposes `exitERC20` method to make this call. This function can be called only after the checkpoint is included in the main chain. The checkpoint inclusion can be tracked by following this [guide](/docs/develop/ethereum-matic/pos/deposit-withdraw-event-pos#checkpoint-events).

```jsx
await maticPOSClient.exitERC20(burnTxHash, { from });
```
