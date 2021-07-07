---
id: staking-faq
title: Staking FAQ
sidebar_label: Staking FAQ
description: Build your next blockchain app on Matic.
keywords:
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png 
---
import useBaseUrl from '@docusaurus/useBaseUrl';

### How to stake?

For Staking you would need to have funds on Ethereum Mainnet. Login to Metamask on the Ethereum network using the Staking Dashboard. https://wallet.matic.network/staking


### I am unable to view the Staking tab. How do i access Staking?

Once logged into https://wallet.matic.network you need to  click on apps > staking. Users will be landed on staking overview page. Reference for guide:

<img src={useBaseUrl("img/staking_faq/howToAccessStake.png")} height="300px"/>

### Why am I not able to Stake? I have enough Matic to Stake?

Check if you have funds on the Main Ethereum Network, to delegate your tokens. All staking happens on Ethereum Network only

### How do I know which Validator to select for better rewards?

It depends on your understanding and research on which validator you would want to stake on.You can find the list of validators here : https://wallet.matic.network/staking/validators

### What is the unbonding period? 

The unbonding period on Matic is 80 checkpoints. This period applies to the originally delegated amount and re-delegated amounts. It does not apply to any rewards that were not re-delegated.

### Where to Stake? 

You can visit the below link for Staking: https://wallet.matic.network/staking/validators

### I want to Withdraw Rewards but I am unable to ?

You would need to have a minimum of 2 Matic to withdraw rewards.

### I want to Restake Rewards but I am unable to ?

You would need to have a minimum of 2 Matic to restake rewards.

### How to withdraw rewards?

You can claim your rewards by clicking on the “My Account”, all the delegators for a validator are displayed. Click on the “Withdraw Reward” button and the rewards will be transferred to your delegated account on Metamask. 

`Step 1` <br/>
<img src={useBaseUrl("img/staking_faq/Withdraw Rewards SS1.png")} height="300px"/><br/>

`Step 2` <br/>
<img src={useBaseUrl("img/staking_faq/Withdraw Rewards SS2.png")} height="300px"/><br/>


### How to restake?

Click on the “My Account” to navigate to the rewards page. There you would see two options:
- Withdraw rewards
- Restake rewards

Clicking on Restake Reward will ask you for confirmation from your Metamask account. Once you confirm the transaction, only then the restake transaction would be complete.

`Step 1` <br/>
<img src={useBaseUrl("img/staking_faq/Restake SS1.png")} height="300px"/><br/>

`Step 2` <br/>
<img src={useBaseUrl("img/staking_faq/Restake SS2.png")} height="300px"/><br/>


### How to unbond?

To Unbond from a Validator, navigate to your Delegator Profile page (MyAccount). 
Once you login you will find this on the left-hand menu of the Staking Dashboard.
Here you will see an Unbond button for each of the validators. Click on the Unbond button for whichever validator that you want to Unbond from.

`Step 1` <br/>
<img src={useBaseUrl("img/staking_faq/Unbond SS1.png")} height="300px"/><br/>

`Step 2` <br/>
<img src={useBaseUrl("img/staking_faq/Unbond SS2.png")} height="300px"/><br/>


### How to claim stake?

Once the unbonding period is complete the Claim Stake button will be enabled and you can then claim your staked tokens and it will be transferred to your account

`Step 1` <br/>
<img src={useBaseUrl("img/staking_faq/Claim Stake SS1.png")} height="300px"/><br/>

`Step 2` <br/>
<img src={useBaseUrl("img/staking_faq/Claim Stake SS2.png")} height="300px"/><br/>

### Are hardware wallets supported?

Yes, hardware wallets are supported. You can use the "Connect Hardware Wallet" option on Metamask and connect your Hardware wallet and then continue the delegation process.

### Why can’t I stake directly from Binance?

Staking through Binance is not yet supported. There will be an announcement if and when Binance starts supporting it.

### Do I need to deposit Matic tokens to the Matic Mainnet network for staking?

No. All your funds need to be on the Main Ethereum Network.

### When does reward get distributed?

The rewards are distributed whenever a checkpoint is submitted.

Currently 20188 Matic tokens are distributed proportionately on each successful checkpoint submission to each delegator based on their stake relative to the overall staking pool of all validators and delegators. Also, the percentage for the reward distributed to each delegator will vary with each checkpoint depending on the relative stake of the delegator, validator and the overall stake.

(Note that there is a 10% proposer bonus that accrues to the validator who submits the checkpoint, but over time, the effect of the extra bonus is nullified over multiple checkpoints by different validators.)

The checkpoint submission is done by one of the validators approximately every 34 minutes. This time is approximate and may vary based on validator consensus on the Matic Heimdall layer. This may also vary based on Ethereum Network. Higher congestion in the network may result in delayed checkpoints.

You can track checkpoints on the staking contract here: https://etherscan.io/address/0x86e4dc95c7fbdbf52e33d563bbdb00823894c287

### Why does reward keep getting decreased at every checkpoint?

Actual rewards earned will depend on the actual total locked supply in the network at each checkpoint. This is expected to vary significantly as more MATIC tokens get locked in the staking contracts.
Rewards will be higher, to begin with, and will keep decreasing as the locked supply % goes up. This change in locked supply is captured at every checkpoint, and rewards are calculated based on this.

### Will I keep receiving rewards after I unbond?

No. Once you unbond you stop receiving rewards.

### Which browser is compatible with Staking Dashboard?

Chrome, Firefox, and Brave

### My Metamask is stuck at confirming after login, what do I do? Or nothing happens when I try to login?

Check for the following:
- If you’re using Brave, please turn off the option for “Use Crypto Wallets” in the settings panel.
- Check if you are logged into Metamask
- Check if you are logged into Metamask with Trezor/Ledger. You need to additionally turn on permission to call contracts on your Ledger device, if not enabled already.
- Check your system timestamp. If the system time is not correct, you will need to correct it.

### I have unbonded, how long will it take to Unbond

The unbonding period is currently set to 80 checkpoints. This is approximately 9-10 days. Every checkpoint takes approximately 3 hours. However, some checkpoints could be delayed due to congestion on Ethereum.
