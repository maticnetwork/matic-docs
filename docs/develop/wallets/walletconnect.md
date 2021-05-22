---
id: walletconnect
title: Wallet Connect
description: Build your next blockchain app on Matic.
keywords:
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png 
---
Wallet Connect is an open protocol - not a wallet - built to create a communication link between DApps and Wallets. A wallet and an application supporting this protocol will enable a secure link through a shared key between the two peers. A connection is initiated by the DApp displaying a QR code with a standard WalletConnect URI and the connection is established when the wallet application approves the connection request. Further requests regarding funds transfer are confirmed on the wallet application itself.

## 1. Set up Web3

To set up your DApp to connect to user’s Matic Wallet we can use Wallet Connect’s provider to directly connect to Matic Network. Install the following in your DApp:

```bash
npm install --save @maticnetwork/walletconnect-provider
```

Install matic.js for Matic integration:

```bash
$ npm install --save maticjs
```
And add the following code in your App,

```js
import WalletConnectProvider from "@maticnetwork/walletconnect-provider"

import Web3 from "web3"
import Matic from "maticjs"
```

Next, we set up Matic and Ropsten provider via Wallet Connect’s object:

```javascript
const maticProvider = new WalletConnectProvider(
  {
    host: `https://rpc-mumbai.matic.today`,
    callbacks: {
      onConnect: console.log('connected'),
      onDisconnect: console.log('disconnected!')
    }
  }
)

const ropstenProvider = new WalletConnectProvider({
  host: `https://ropsten.infura.io/v3/70645f042c3a409599c60f96f6dd9fbc`,
  callbacks: {
    onConnect: console.log('connected'),
    onDisconnect: console.log('disconnected')
  }
})
```
We created the above two provider objects to instantiate our Web3 object with:


```js
const maticWeb3 = new Web3(maticProvider)
const ropstenWeb3 = new Web3(ropstenProvider)
```


## 2. Instantiating contracts

Once we have our web3 object, the instantiating of contracts involves the same steps we followed for metamask.

> Again, assuming you have your contract ABI and address already in place :)

```js
const myContractInstance = new this.maticWeb3.eth.Contract(myContractAbi, myContractAddress)
```

## 3. Calling functions

Like discussed above, we have two types of functions in Ethereum, depending upon the interaction with the blockchain. We `call()` when we read data and `send()` when we write data.

### Calling `call()` Functions

Now reading data doesn’t require a signature, therefore the process is the same as discussed above:

```js
this.myContractInstance.methods
  .myMethod(myParams)
  .call()
  .then (
  // do stuff with returned values
  )
```
### Calling `send()` Functions

Since writing to the blockchain requires a signature, we prompt the user on their wallet (that supports wallet connect) to sign the transaction. 

This involves two steps: 
1. Constructing a transaction 
2. Getting a signature on the transaction 
3. Sending signed transaction


```js
const tx = {
  from: this.account,
  to: myContractAddress,
  gas: 800000,
  data: this.myContractInstance.methods.myMethod(myParams).encodeABI(),
}
```


The above code creates a transaction object which is then sent to user’s wallet for signature:


```js
maticWeb3.eth.signTransaction(tx)
  .then((result) =>{
    maticWeb3.eth.sendSignedTransaction(result)
    .then((receipt) => 
    console.log (receipt)
  )
})
```

`signTransaction()` function prompts the user for their signature and `sendSignedTransaction()` sends the signed transaction over (returns a transaction receipt on success).

> NOTE: all this while, the private key is in user’s wallet and the app does not access it any way. :)
