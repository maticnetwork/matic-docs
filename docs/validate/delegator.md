---
id: delegator
title: Delegate on Matic
sidebar_label: Delegate on Matic
description: Build your next blockchain app on Matic.
keywords:
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png 
---
import useBaseUrl from '@docusaurus/useBaseUrl';


This is a step-by-step guide to help you become a delegator on Matic Mainnet. There are no pre-requisites required to become a delegator on Matic. All you have to do is have an Ethereum account.

## What is a Delegator?

Delegators are token holders who cannot, or do not want to run a validator node themselves. They can delegate staking tokens to a validator and obtain a part of their revenue in exchange. Because they share revenue with their validators, delegators also share risks. Should a validator misbehave, each of their delegators will be partially slashed in proportion to their delegated stake. Delegators play a critical role in the system, as they are responsible for choosing validators.

## Accessing the Dashboard and Login

You will need to first choose the Ethereum Mainnet on your Metamask. Once you have chosen that, you can then login to the Matic's Staking Dashboard. You can access the Dashboard here: https://wallet.matic.network/staking

Matic Validator Dashboard currently supports only Metamask as of now. So you will need to have the Metamask's extension added to your browser.

If you are currently using a different wallet, you can import your account to Metamask and then use the Staking Dashboard. You can read our guide on how to [Import an Account to Metamask](https://docs.matic.network/docs/home/blockchain-basics//import-account-to-metamask).

In order to import you account you first need to make sure that you install the Metamask extension on your browser. To install Metamask extension you use this link: https://metamask.io

You can also connect your Hardware wallet such as Ledger or Trezor using the "Connect to Hardware Wallet" option in Metamask. Once you connect your Hardware wallet in Metamask, you will be able to delegate your tokens from the Hardware wallet.

**Note**: We have experienced some issues with Firefox when using the Validator Dashboard. We recommend use Google Chrome or Brave.

Once you have logged in you will be navigated to a screen where you will see a list of Validators and a lot of stats.

**Note:** If you are already a validator, then when you attempt to become a delegator, you have to make sure that you use a different address than the one used for your validator. This is only if you're already a validator.

## How to Delegate to a Validator

You need to have your funds (ETH and MATIC tokens) on the Main Ethereum Network to delegate your tokens.  If your tokens are on any other network/testnet or Matic Mainnet, then you won't be able to delegate your tokens to Matic.

<img src={useBaseUrl("img/staking/main-ethereum-network.png")} />

Once you have logged in with your address on the Staking Dashboard you should have an option that says "Become a Delegator".

<img src={useBaseUrl("img/staking/become-a-delegator.png")} />

**Note:** if you scroll down to the validator list in the Dashboard, you will also see a `Delegate` button to each validator. You can also click on that `Delegate` button to choose the validator you want to delegate to.

Once you click on the `Delegate` button you will be navigated to a screen that will ask you to fill in some information such as Stake amount.

<img src={useBaseUrl("img/staking/delegator-form.png")} />

You can add the amount that you want to delegate in the Stake amount field. You will also see the projected rewards per checkpoint once you add a value in the amount field. 

Clicking on Delegate Now will confirm your transaction. Note that there will 2 confirmations asked to sign from your Wallet.

**Note:** It will take 12 Block confirmations to confirm your delegation transaction and for it reflect on the Dashboard.

Once your delegation transaction is confirmed, you will get a success message.

**Note:** You can also delegate to multiple validators using the same address.

<img src={useBaseUrl("img/staking/delegator-success.png")} />

You can then access your Dashboard by clicking on the `Go to my Account` button.

Clicking on the Dashboard you will be able to see your details such as `Balance`, `Total Stake`, & `Rewards`.

You will also see a section for your Delegations. In this section, you will be able to view a list of all your delegations across validators. 

<img src={useBaseUrl("img/staking/delegator-profile.png")} />

## Claiming Rewards as a Delegator

Clicking on the Rewards Card will navigate you to the Rewards page. 

You will see a list of Validators that you have delegated to and next to each delegator would be 2 buttons

* Withdraw Reward
* Restake Rewards

### Withdraw Reward

As a Delegator, you earn rewards as long as the Validator is earning rewards. Clicking on Withdraw Rewards will ask you for a confirmation from your Wallet. Confirming the transaction will send your accumulated rewards back to your wallet and your account should be updated.

<img src={useBaseUrl("img/staking/my-rewards.png")} />

### Restake Rewards

Restaking your rewards is an easy way to increase your delegation stake to your validator. Clicking on `Restake Reward` will ask you for confirmation from your Wallet (Metamask). Once you confirm the transaction, only then would the `restake` transaction be complete.

Once the `restake` is complete after 12 Block confirmations, you will see an update on your Dashboard with the stake amount getting higher for the validator you have selected. You can also refresh your page to see the update. 

**Note:** You can `restake rewards` to individual validators only. You cannot restake your entire rewards to all validators at once.

### Unbond from a Validator

Unbonding from a validator means that you want to withdraw your complete stake from the validator that you delegated to. 

**To Unbond from a Validator**

Navigate to you Delegator Profile page (My Delegator Details Page). Once you login, you will find this on the left hand menu of the Staking Dashboard.

Here you will see an `Unbond` button for each of the validator. Click on the `Unbond` button for whichever validator that you want to Unbond from.

<img src={useBaseUrl("img/staking/unbond-delegator.png")} />

You will receive a pop-up notification informing you about the Unbond process. It will display the Rewards that have been accumulated (if any) and also your total stake amount. You will also be given information on when you would receive these tokens back to your account.

When you unbond from a validator, there is an `unbonding period` that we maintain to ensure there is no malicious behaviour on the network. The Unbonding period is for ~9 days (80 Checkpoints) on Matic Mainnet. You will receive your rewards immediately after you unbond, however, your stake token amount will be unlocked in ~9 days.

Clicking on `Unbond` button will ask you to confirm the transaction. Depending on the network congestion on Ethereum the transaction will take time to complete.

Once the transaction is completed, you will see a `Claim Stake` button now. You may need to refresh the page once the transaction is completed. 

The `Claim Stake` button will stay disabled until the Unbonding period is complete. As of now, there is no way to notify a user about when the Unbonding period is complete. Once the unbonding period is complete, the `Claim Stake` button will be enabled and you can then claim your staked tokens which will be transferred to your account.
