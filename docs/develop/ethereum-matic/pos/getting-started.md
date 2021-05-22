---
id: getting-started
title: PoS Bridge
sidebar_label: Introduction
description: Build your next blockchain app on Matic.
keywords:
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png
---

A bridge is basically a set of contracts that help in moving assets from the root chain to the child chain. There are primarily two bridges to move assets between Ethereum and Matic. First one is the Plasma bridge and the second one is called the **PoS Bridge** or **Proof of Stake bridge**. **Plasma bridge** provides an increased security guarantee due to the Plasma exit mechanism.

However, there are certain restrictions on the child token and there is a 7-day withdrawal period associated with all exits/withdraws from Matic to Ethereum on the Plasma bridge.

This is quite painful for those DApps/users who need some **flexibility** and **faster withdrawals**, and are happy with the level of security provided by the Matic Proof-of-Stake bridge, secured by a robust set of external validators.

Proof of stake based assets provides PoS security and faster exit with one checkpoint interval.

## Steps to use the PoS Bridge

- **Root token** and **Child token** has to be mapped on the PoS bridge. This basically means that the token contract on the root chain and the token contract on the child chain have to maintain a connection or mapping in order transfer assets between them. Submit mapping request [here](/docs/develop/ethereum-matic/submit-mapping-request).

- Once mapping is done, you can either use the **matic.js SDK** to interact with the contracts or you can do the same without the SDK. However, the matic.js SDK is designed in a very user friendly way to make the asset transfer mechanism very easy to integrate with any application.

- **The complete cycle of transferring assets from Ethereum to Matic and then back to Ethereum** will be explained through this tutorial. In short, the process can be summed up as mentioned below:

  1. Owner of the asset **(ERC20/ERC721/ERC1155)** token has to approve a specific contract on the PoS bridge to spend the amount of tokens to be transferred. This specific contract is called the **Predicate Contract** (deployed on the Ethereum network) which actually **locks the amount of tokens to be deposited**.
  2. Once the approval is given, the next step is to **deposit the asset**. A function call has to be made on the **RootChainManager** contract which in turn triggers the **ChildChainManager** contract on the Matic chain.
  3. This happens through a state sync mechanism which can be understood in detail from [here](https://docs.matic.network/docs/contribute/state-sync/). 
  4. The **ChildChainManager** internally calls the **deposit** function of the child token contract and the corresponding amount of asset tokens are **minted to the users account**. It is important to note that only the ChildChainManager can access the deposit function on the child token contract.
  5. Once the user gets the tokens, they can be **transfered almost instantly with negligible fees on the Matic chain**.
  6. Withdrawing assets back to Ethereum is a 2 step process in which the asset tokens has to be **first burnt on the Matic chain** and then the **proof of this burn transaction has to be submitted** on the Ethereum chain.
  7. It takes about 10-30 mins for the burn transaction to be checkpointed into the Ethereum chain. This is done by the Proof of Stake validators.
  8. Once the transaction has been added to the check point, a proof of the burn transaction can be submitted on the **RootChainManager** contract on Ethereum by calling the **exit** function.
  9. This function call **verifies the checkpoint inclusion** and then triggers the Predicate contract which had locked the asset tokens when the assets were deposited initially.
  10. As the final step, the **predicate contract releases the locked tokens** and refunds it to the Users account on Ethereum.
