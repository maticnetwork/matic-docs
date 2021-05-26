---
id: consensys-framework
title: Consensys Scaling Framework
sidebar_label: Consensys Scaling Framework
description: Build your next blockchain app on Matic.
keywords:
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png 
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Who Operates It?
Miner nodes on mainnet Ethereum move or “operate” the network forward by solving Proof of Work and creating new blocks. The L2 solution requires a similar “operator” role on its network, which is the miner-equivalent of Ethereum mainnet that can move the L2 network forward. There are a few differences, however. For example, along with processing and authorizing transactions like a miner, an L2 operator may also facilitate users entering and exiting the L2 layer itself.

### - Who or what is required to operate the Polygon Proof of Stake network?

Polygon PoS commit chain relies on a set of validators to secure the network. The role of validators is to run a full node; produce blocks, validate and participate in consensus and commit checkpoints on the Ethereum main-chain. To become a validator, one needs to stake their MATIC tokens with staking management contracts residing on the Ethereum main chain.

For more details, please refer https://docs.matic.network/docs/validate/validator/introduction#overview

### - How do they become operators in the Polygon PoS network? What rules do they abide by?

To become a validator, one needs to stake their MATIC tokens with staking 
management contracts residing on the Ethereum mainchain.
          
Rewards are distributed to all stakers proportional to their stake at every checkpoint with an exception being the proposer getting an additional bonus. User reward balance gets updated in the contract which is referred to while 
claiming rewards.

Stakes are at risk of getting slashed in case the validator node commits a 
malicious act like double signing, validator downtime which also affects the linked 
delegators at that checkpoint.

For more details please refer 
https://docs.matic.network/docs/validate/validator/introduction#end-to-end-flow-for-a-matic-validator and https://docs.matic.network/docs/validate/validator/responsibilities/#responsibilities-of-validator


### - What trust assumptions must the Polygon PoS users make about the operator?

Polygon PoS commit chain relies on a set of validators to secure the network. The role of validators is to run a full node; produce blocks, validate and participate in consensus and commit checkpoints on the main-chain. To become a validator, one needs to stake their MATIC tokens with staking management contracts residing on the main-chain.
As long as ⅔ of the weighted stake of the validators is honest, the chain will progress accurately.

### - What are the operators responsible for? What power do they have?

The role of validators is to run a full node; produce blocks, validate and participate in consensus and commit checkpoints on the main-chain.

The validators have the power to stop the progress of the chain, reorder blocks, etc. assuming ⅔ of the weighted stake validators are not honest. They do not have the power to change the state, user asset balances, etc.

### - What are the motivations to become an operator of the Polygon PoS?

Validators stake their MATIC tokens as collateral to work for the security of the network and in exchange for their service, earn rewards.

Please refer https://docs.matic.network/docs/validate/economics#what-is-the-incentive for more details.

## How’s the Data?
By definition, a Layer 2 technology must create incremental data checkpoints on a Layer 1 (Ethereum mainnet). Our concern, then, is with the interstitial time between those periodic Layer 1 check-ins. Specifically, how is Layer 2 data generated, stored and stewarded while away from the safe harbor of Layer 1? We are most concerned with this because it is when the user is furthest from the trustless security of a public mainnet.

### - What are the lock-up conditions for Polygon PoS? 

In most token design patterns, the token is minted on Ethereum and can be sent to Polygon PoS. To move such a token from Ethereum to Polygon PoS, the user needs to lock funds in a contract on Ethereum, and the corresponding tokens are then minted on Polygon PoS.

This bridge relay mechanism is run by the Polygon PoS validators who need to ⅔ agree on the locked token event on Ethereum to mint the corresponding token amount on Polygon PoS.

Withdrawing assets back to ethereum is a 2 step process in which the asset tokens have to be first burnt on the Polygon PoS commit chain and then the proof of this burn transaction has to be submitted on the Ethereum chain.


For more details, refer https://docs.matic.network/docs/develop/ethereum-matic/pos/getting-started#steps-to-use-the-pos-bridge

### - How soon are those funds available on the Polygon PoS?

Around ~7-8 minutes. This is done via a message passing mechanism that is termed as `state sync`. More details can be found here: https://docs.matic.network/docs/contribute/state-sync/

Does Polygon PoS provide support for users entering without a L1 lock-up (i.e. in the case of onboarding a user directly onto Polygon, then the user wishes to exit to Ethereum mainnet)?

Yes a special bridge mechanism is used to accomplish this. When the user wishes to exit to Ethereum, instead of the usual method of unlocking the tokens from a special contract, it is minted.

You can read about them here: https://docs.matic.network/docs/develop/ethereum-matic/pos/mintable-assets

### - How would a user dispute an invalid Polygon PoS transaction? Prove a valid Polygon PoS transaction?

There is currently no way on-chain to dispute an invalid Polygon PoS transaction. However, validators of the Polygon PoS chain submit periodic checkpoints to Ethereum - you can see more details here: https://docs.matic.network/docs/contribute/heimdall/modules/checkpoint/
It is possible to verify a transaction on Polygon PoS chain on Ethereum by constructing a Merkle tree proof and verifying it against the periodic checkpoints that happen on Ethereum of the Polygon PoS transaction and receipt Merkle tree roots.

Once a Polygon user wishes to exit, how soon are the locked-up Layer 1 funds (plus or minus any L2 gains or losses) available back on L1?

Approximately ~1-3 hours depending on the frequency of the checkpoints (https://docs.matic.network/docs/contribute/heimdall/modules/checkpoint/). The frequency is majorly a function of the cost that the validators are willing to spend on ETH gas fees to submit checkpoints.

### - Do you anticipate there being Liquidity Providers on Layer 1 willing to provide immediately redeemable L1 funds to existing Polygon PoS users?

There are already a few players such as https://connext.network/ (already live) and https://biconomy.io/ that are or will be providing this service. There are a various number of other players who are also going to go live pretty soon. 

## How’s the Stack?
The comparison of stack is important to highlight what a Layer 2 has or has not changed from Ethereum mainnet. 

### - How much does the Polygon PoS stack share with the Ethereum mainnet stack?

If you're an Ethereum Developer, you're already a Polygon PoS developer. All the tools you're familiar with are supported on Polygon PoS out of the box: Truffle, Remix, Web3js and many, many more.

There is no major change in the EVM interface for Polygon PoS relative to Ethereum.

### -  Where does the Polygon PoS differ from Ethereum mainnet stack and what risks / rewards does that introduce?

No major changes.

## Preparing for the Worst
How does the Polygon PoS system prepare for:

### -  A mass exit of users?

As long as ⅔ of the validators are honest, funds on the chain are secure. In case this assumption is not valid, in such a scenario the chain can stop or reordering can happen. Social consensus will be needed to then restart the chain from an earlier state - including snapshots of the Polygon PoS state that are submitted via checkpoints that can be used to do this.

### - Polygon participants attempting to game the Polygon consensus. For example, by forming a cartel?

Social consensus will be needed to then restart the chain from an earlier state by removing those validators and restarting it with a fresh set of validators - including snapshots of the Polygon PoS state that are submitted via checkpoints that can be used to do this.


### - A bug or exploit discovered in a critical part of its system?

Care has been taken to reuse battle-tested components in the build out of the system. However, if there is a bug or exploit in a critical part of the system, restoring the chain to an earlier state via social consensus is the main solution path.

