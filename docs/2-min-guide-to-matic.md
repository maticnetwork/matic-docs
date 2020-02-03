# 2-min guide to get started on Matic

Block time on the Matic testnet is ~1s.

### Deploy smart contracts

* If you are already developing contracts on Ethereum, just configure the Web3 Provider URL to https://testnet2.matic.network
* Everything else remains the same
* Matic Mainnet will have PoS security, with greater Plasma guarantees being added

> **Note**: Developers already integrating with https://testnet2.matic.network/ can change their RPC to https://pre-alpha.matic.network in order to move to the pre-alpha Matic mainnet test chain. This environment will have the same changes as in the alpha Matic mainnet, and will allow any breaking changes to be rectified in your application.

### Bring Ropsten assets (ERC20/ERC721) to the Matic testnet using Plasma

* To get TEST tokens on Ropsten you can access the Matic Faucet: https://faucet.matic.network

* Ropsten TEST token contract address - `0x6b0b0e265321e788af11b6f1235012ae7b5a6808`

* Use [matic.js](https://github.com/maticnetwork/matic.js) to interact with the Matic Plasma contracts. Go to  the [maticjs walkthrough](https://docs.matic.network/matic-js-tutorial/).

The flow for this would be:

* Deposit assets from Ropsten to Matic - [deposit-ERC20.js](https://github.com/maticnetwork/matic.js/blob/master/examples/node/deposit-ERC20.js)
* Fast transfers on the Matic Plasma sidechain - [transfer-ERC20.js](https://github.com/maticnetwork/matic.js/blob/master/examples/node/transfer-ERC20.js)
* Withdraw from Matic to Ropsten - [initiate-withdraw-ERC20.js](https://github.com/maticnetwork/matic.js/blob/master/examples/node/initiate-withdraw-ERC20.js) >> (wait for ~5 mins) >>
[confirm-withdraw.js](https://github.com/maticnetwork/matic.js/blob/master/examples/node/confirm-withdraw.js) >> (wait for ~5 mins) >>
[process-exit-ERC20.js](https://github.com/maticnetwork/matic.js/blob/master/examples/node/process-exit-ERC20.js)

![Arch](/images/matic-workflow-theme.jpg)

* Take a look at the examples here - https://github.com/maticnetwork/matic.js/tree/master/examples - to get started


### For introduction to Matic, Plasma, Layer-2 architecture, and how to get started

<center>
    <iframe width="420" height="315" src="https://www.youtube.com/embed/M1OTnVGcuMI">
    </iframe>
</center>