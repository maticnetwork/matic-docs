---
id: stake-on-matic
title: How to Stake and Become a Validator on Matic
description: Build your next blockchain app on Matic.
keywords:
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png 
---
import useBaseUrl from '@docusaurus/useBaseUrl';


This is a step-by-step guide to help you become a validator on Matic's incentivised testnet program. The following list of commands will help you setup your heimdall and bor nodes for staking and performing validator duties.


## Pre-requisites:

You should have Heimdall and Bor setups up and running on your machine. If you haven't setup your node you should setup using the following instructions:  https://docs.matic.network/docs/validate/mainnet/validator-guide


### Account information

First you do a basic check on your account information by running the below command. You need to make sure that you run this command only your **Validator Node**. The output of this command will be required in your staking transactions. If you put the output of your Sentry node, it will cause complications on your node.

```bash
    heimdalld show-account
```

Your output should appear in the following format:
```json
{
    "address": "0x6c468CF8c9879006E22EC4029696E005C2319C9D",
    "pub_key": "0x04b12d8b2f6e3d45a7ace12c4b2158f79b95e4c28ebe5ad54c439be9431d7fc9dc1164210bf6a5c3b8523528b931e772c86a307e8cff4b725e6b4a77d21417bf19"
}
```
This will display your address and public key for your validator node. **Note that this address must match with your signer address on Ethereum.**

### Show private key

Then you to do another check for your private-key by running the following command. Note that this is an **optional** step and need not be a mandatory step:
```bash
heimdalld show-privatekey
```
The following output should appear:
```json
{
    "priv_key": "0x********************************************************"
}
```
Now that you have done a basic health check and generated the keystore and private key for Bor and Heimdall respectively, you can now proceed to staking your tokens on Matic and become a validator.

## Stake on Matic

You can stake on Matic using the Validator Dashboard

### Stake using validator dashboard 

In order to stake using the Validator Dashboard, you can use the following link to access the dashboard: https://wallet.matic.network/staking/validators/new

You will be able to login using Metamask or any WalletConnect enabled wallet. We recommend using Metamask.

You have to make sure that you login using the same address where your tokens are present.

Once you login you will see the landing page and an option to become a Validator.

<img src={useBaseUrl("img/staking/become-a-validator.png")} />

Clicking on **Become a validator** will navigate you to a separate page to initiate the process.

You will first be asked to setup your node. If you haven't already setup your node by now, you will need to do so, else if you proceed ahead you will receive an error when you attempt to stake.

<img src={useBaseUrl("img/staking/setup-node.png")} />

Clicking on Next will proceed you to next step where you add Validator details and staking amount. If you are instead taken to the **Connect Wallet** or **Add Fund** screens, this means that you are either not connected to your wallet or you have not connected to the account that contains the staking tokens.

<img src={useBaseUrl("img/staking/stake.png")} />

Once you enter all the required details such as Signer Address and Stake amount, you can then click on **Stake Now**. You have to make sure that you don't add the entire balance of your Wallet into the amount field as 1 Matic token is taken as **Heimdall Fee**

Once the transaction is completed you will have staked successfully to become a validator. You will be asked thrice to confirm the transaction. 

* Approve Transaction - This will approve your stake transaction.
* Stake - This will confirm your stake transaction.
* Save -  This will save your validator details.

**Note:** For the changes to take effect on the Staking Dashboard, it requires a minimum of 12 Block Confirmations to verify and finalize. After 12 Block Confirmations, you can refresh your page and you would see the updated details on the Dashboard.

### Balance

To check the balance of your address:

```bash
    heimdallcli query auth account <signer-address> --chain-id <chain-id>
```

The following output should appear:

```json
address: 0x6c468cf8c9879006e22ec4029696e005c2319c9d
coins:
- denom: matic
amount:
    i: "1000000000000000000000"
accountnumber: 0
sequence: 0
```

### Claiming Rewards as a Validator

Once you are setup and staked as a validator, you will earn rewards for performing validator duties. When you perform validator duties dutifully, you get rewarded however, if your node uptime is not 100% and/or if you attempt to do any malicious activity, your stake gets slashed.

In order to claim rewards you can go to your Validator Profile.

You will see 2 buttons on your profile:

* Withdraw Rewards
* Restake Rewards

<img src={useBaseUrl("img/staking/validator-rewards.png")} />

#### Withdraw Rewards

As a Validator, you earn rewards as long as your performing your validator correctly. Clicking on Withdraw Rewards will ask you for a confirmation from your Wallet. Confirming the transaction will get your rewards back to your wallet and your account should be updated.

#### Restake Rewards

Restaking your rewards is an easy way to increase your stake as a validator. Clicking on `Restake Rewards` will ask you for confirmation from your Wallet. However, this will be 2 confirmations, as it will first `Claim your Reward` and then `Restake` it.

Once the `Restake` is complete, after 12 Block confirmations you would see an update on your Dashboard with the stake amount getting higher for the validator you had selected.

**Note:** You can `restake rewards` to individual validators only. You cannot restake your entire rewards to all validators at once.
