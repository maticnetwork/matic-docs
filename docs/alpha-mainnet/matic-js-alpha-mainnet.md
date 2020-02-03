Matic JS - Alpha Mainnet

# Beginner-friendly tutorial to Matic.js

This tutorial will act as a guide for a step-by-step process to understand and use [Matic JS](https://github.com/maticnetwork/matic.js), which is the easiest way to interact with the Matic Network. This guide is directed towards developers starting to begin their Ethereum journey. If you want to dive right ahead, feel free to skim through the article or choose to directly go to https://docs.matic.network/getting-started/.

### Prerequisites:

### Some ETH on Mainnet in your account

In order to make any transactions, you will also need some Ether in the test accounts that you will use while following the tutorial. 

### Matic Faucet

Throughout this tutorial, we will be using the ERC20 token `TEST` on the Ethereum network as an example. This is a TEST token. In your DApp, you can replace it with any ERC20 token. To get some Test `TEST` tokens on Matic Network, you can access the Matic Faucet by clicking on the link below

<div style="text-align: center; padding-top: 15px; padding-bottom: 15px;">
<button class="btn btn-primary btn-md" style="padding: 15px;background-color: #000;color: #fff; border-radius: 4px;cursor: pointer; box-shadow: 0px 4px 7px -4px rgba(0,0,0,0.75);">
  <a href="https://faucet.matic.network" target="_blank" style="color:inherit;">
    Get Test Tokens
  </a>
</button>
</div>


All you would need to do is follow simple steps on the link above and you will get some funds in to your account:

1. Click on the button
2. Pay the gas fees
3. And you’ll receive TEST Tokens on Ethereum Network

## Using Matic JS

We will be showcasing the flow for asset transfers on the Matic Network in this tutorial and how you can do the same using Matic.js:

![Arch](images/workflow.jpeg)

- User deposits tokens in Matic contract on mainchain
- Once deposited tokens get confirmed on the main chain, the corresponding tokens will get reflected on the Matic chain.
- The user can now transfer tokens to anyone they want instantly with negligible fees. Matic chain has faster blocks (approximately 1 second). That way, the transfer will be done almost instantly.
- Once a user is ready, they can withdraw remaining tokens from the mainchain by establishing proof of remaining tokens on Root contract (contract deployed on Ethereum chain) within 7 days.
- User can also get a fast exit via 0x or Dharma (coming soon!)

### Basic setup for the tutorial

To easily visualise the flow of funds on the Matic Network, it is instructive if you configure the Matic Network on Metamask. Note that we are using Metamask here solely for visualization purposes. There is no requirement to use Metamask at all for using the Matic Network.

Before starting with the tutorial, go ahead and have 3 Ethereum test accounts ready. In case you are new to Ethereum and Metamask, you can refer https://docs.matic.network/newbies/create-accounts-metamask/ on instructions on how to.

For your reference we will be using the following accounts in this tutorial

```js
Account #1: 0x7eD7f36694153bA6EfF6ca6726b60F6E2Bb17fcf
Account #2: 0x1a06816065731fcBD7296f9B2400d632816b070B
Account #3: 0xbFF81BA6Fa6593F0467592ACcF770A120f740552
```

When you create multiple accounts at your end, your addresses will be different from those shown here.

In order to view the flow of funds easily on the Matic Network using Matic.js, you can configure Matic’s Alpha-mainnet URL on Metamask. Refer this link — https://docs.matic.network/alpha-mainnet/conf-alpha-mainnet-metamask/ to quickly set it up. Note this is **optional**. You can query using web3, if you choose to.

### Configuring Matic Test tokens on Metamask

The `TEST` token, taken as an example for this tutorial, can be configured in Metamask so as to easily visualise account balances. Again note this is **optional**. You can very easily query the token balances and other variables using [web3](https://web3js.readthedocs.io/en/1.0/)

These Test tokens needs to be added to all 3 test accounts in Metamask once each in both the Ethereum and Matic alpha-mainnet:


```js
Token name: TEST
Where: Ethereum Network
Contract address: 0xd391dd06730931c84cc168e54466b234451c1a0e

----------------------

Token name: TEST 
Where: Matic Alpha-Mainnet (Custom RPC: https://alpha.ethereum.matic.network)
Contract address: 0x9d3f6e51a7c485381afd53802ff828b083db403c
```

In case you are new to Ethereum and Metamask, you can refer https://docs.matic.network/newbies/conf-custom-tokens-metamask/ on instructions on how to.

## Introducing Matic.js

The Matic.js repository is hosted on Github at https://github.com/maticnetwork/matic.js/

For reference purposes, I will be creating a test folder to showcase how to setup Matic.js step-by-step. Go ahead and create a folder for this tutorial — I am going with `$ mkdir matic-js-test`

Install the `maticjs` package via npm:

`$ npm install --save web3 maticjs`

If you wish to directly refer a set of code examples, you can do so at https://github.com/maticnetwork/matic.js/tree/master/examples

**Note:You might need to install some dependencies such as web3@1.0.0-beta.34 incase you run into any errors while running matic.js. To install this you can run the command `$ npm install web3@1.0.0-beta.34`**

### Depositing Funds from Ethereum Mainnet to Matic (Alpha-mainnet)

Within the `matic-js-test` folder, create a new file and name it `deposit-ERC20.js`.

```js
const Matic = require('maticjs').default
const config = require('./config')

const token = config.ROPSTEN_TEST_TOKEN // test token address
const amount = '1000000000000000000' // amount in wei
const from = config.FROM_ADDRESS // from address

// Create object of Matic
const matic = new Matic({
  maticProvider: config.MATIC_PROVIDER,
  parentProvider: config.PARENT_PROVIDER,
  rootChainAddress: config.ROOTCHAIN_ADDRESS,
  syncerUrl: config.SYNCER_URL,
  watcherUrl: config.WATCHER_URL,
})

matic.wallet = config.PRIVATE_KEY // prefix with `0x`

// Approve token
matic
  .approveERC20TokensForDeposit(token, amount, {
    from,
    onTransactionHash: (hash) => {
      // action on Transaction success
      console.log(hash) // eslint-disable-line
    },
  })
  .then(() => {
    // Deposit tokens
    matic.depositERC20Tokens(token, from, amount, {
      from,
      onTransactionHash: (hash) => {
        // action on Transaction success
        console.log(hash) // eslint-disable-line
      },
    })
  })
```

Let’s understand this a bit in detail.

`token` is the address of the `TEST` TEST ERC20 token contract taken as an example in this tutorial. You will replace it with the relevant ERC20 token address in your DApp.

```js
const token = "config.ROPSTEN_TEST_TOKEN" // test token address
```

`amount` is the amount that is to be deposited. Amount is mentioned in `wei` . To those new to the field, `1 TEST` token is equivalent to 10¹⁸ `wei` . In the code snippet, `0.01 TEST` = 10¹⁶ `wei`.

```js
const amount = "10000000000000000" // amount in wei (0.01 TEST)
```

`from` is your address. This will be address from which funds will be debited. Note that this is my test account address — you will need to plug your own address in here.

```js
const from = "0x7eD7f36694153bA6EfF6ca6726b60F6E2Bb17fcf" // from address
```

`matic.wallet` is your private key. **Never store your private key in code on production** — this is added in the `config.js` file for illustration purposes. Typically a user’s private key will be stored in a browser wallet such as Metamask or a mobile wallet such as the Matic wallet, Status or a hardware wallet.

```js
matic.wallet = config.PRIVATE_KEY // prefix with `0x`
```

You will also need to create another file `config.js`. This will contain all configuration related to Matic.js.

```js
module.exports = {
  MATIC_PROVIDER: 'https://alpha.ethereum.matic.network',
  PARENT_PROVIDER:'https://mainnet.infura.io/v3/7ac4e37ff3594447a70fb67bdd01b01b',
  ROOTCHAIN_ADDRESS: '0x2aa012a32db4297b6c1ec06b81e498154b4e8d46',
  WITHDRAWMANAGER_ADDRESS: '0x592ca027cde761ed1c1d4b5f6a169b4e64881cca',
  DEPOSITMANAGER_ADDRESS: '0x0bdb53216625f71d17bf94999d31257751e5cbc9',
  SYNCER_URL: 'https://alpha.ethereum.api.matic.network/api/v1',
  WATCHER_URL: 'https://alpha.ethereum.watcher.matic.network/api/v1',
  ROOTWETH_ADDRESS: '0x421dc9053cb4b51a7ec07b60c2bbb3ec3cfe050b',
  MATICWETH_ADDRESS: '0x31074c34a757a4b9FC45169C58068F43B717b2D0',
  PRIVATE_KEY: 'Your private key here', // prefix with `0x`
  FROM_ADDRESS: 'Your address here',
  ROPSTEN_TEST_TOKEN: '0xd391dd06730931c84cc168e54466b234451c1a0e',
  MATIC_TEST_TOKEN: '0x9d3F6E51A7C485381AFD53802fF828b083DB403C',
  ROPSTEN_ERC721_TOKEN: '0x07d799252cf13c01f602779b4dce24f4e5b08bbd',
  MATIC_ERC721_TOKEN: '0x9f289a264b6db56d69ad53f363d06326b984e637',
}
```

For now, don’t worry about these values — just keep them as is.

You will need to add your private key here. Signing of transactions will require your private key. Again, it is **NOT ADVISABLE** to hard code your private key when on production. Later, you can build keeping in mind that the user will be handling their keys at their end with MetaMask, Matic Wallet or any other compatible user wallet.

```js
PRIVATE_KEY: "<insert-your-private-key-here>"
```

Deposit is a 2 step process

- The tokens need to be first approved to the Matic rootchain contract on Ethereum.

```js
// Approve token
matic
  .approveERC20TokensForDeposit(token, amount, {
    from,
    onTransactionHash: (hash) => {
      // action on Transaction success
      console.log(hash, 'Deposit Tokens from Ethereum to Matic — Transaction Approved.') // eslint-disable-line
    },
  })
```

- Once approved, the deposit function is to be invoked where the tokens get deposited to the Matic contract, and are available for use in the Matic network.

```js
 // Deposit tokens
    matic.depositERC20Tokens(token, from, amount, {
      from,
      onTransactionHash: (hash) => {
        // action on Transaction success
        console.log(hash, 'Tokens deposited from Ethereum to Matic.') // eslint-disable-line
      },
    })
```

For reference purposes, the screenshots below will provide context during the actual deposit.

We currently have `100 TEST` tokens and `0.04` ETH at our address `0x7eD7f36694153bA6EfF6ca6726b60F6E2Bb17fcf` on Ethereum Mainnet,

![Arch](images/before-deposit-balance-ethereum.png)

while on Matic Network we have `0 TEST` tokens.

![Arch](images/before-deposit-balance-matic.png)

We will be depositing `1 TEST` tokens to Matic.

Let’s run the Deposit function. To run use:

`$ node deposit-ERC20.js`

We have added console logging for both events, which when run successfully will display the Transaction Hash as well as a message `“Deposit Tokens from Ethereum to Matic — Transaction Approved.”.` Once deposit is complete, you will see the Transaction Hash and message `”Tokens deposited from Ethereum to Matic.”` Since this is only for illustration purposes, the message can be customized to anything of your choice. By default it will only display the Transaction Hash.

![Arch](images/run-deposit-erc20.png)

Let’s verify our account balances on Metamask.

Our Balance on Mainnet now shows `99 TEST` which means our Deposit transaction of `1 TEST` was successful.

![Arch](images/after-deposit-balance-update-ethereum.png)

Verifying our balance on Matic Network also shows that our balance is increased by `1 TEST`.

![Arch](images/after-deposit-balance-update-matic.png)

Congratulations! You have successfully deposited funds from Ethereum to Matic.

In order to ensure you have more funds, deposit `1 TEST` token to Matic by repeating the above process. Make sure you change the `amount` value in the above script.

### Transferring funds from Matic

Once you have funds on Matic, you can use those funds to send to others instantly.

Create a new file — `transfer-ERC20.js` —  in your code directory.

```js
const Matic = require('maticjs').default
const config = require('./config')

const from = config.FROM_ADDRESS // from address
const recipient = 'Paste Your receipent address here ...' // receipent address

const token = config.MATIC_TEST_TOKEN // test token address
const amount = '100000000000000000' // amount in wei

// Create object of Matic
const matic = new Matic({
  maticProvider: config.MATIC_PROVIDER,
  parentProvider: config.PARENT_PROVIDER,
  rootChainAddress: config.ROOTCHAIN_ADDRESS,
  syncerUrl: config.SYNCER_URL,
  watcherUrl: config.WATCHER_URL,
})

matic.wallet = config.PRIVATE_KEY // prefix with `0x`

// Send Tokens
matic.transferTokens(token, recipient, amount, {
  from,
  // parent: true, // For token transfer on Main network (false for Matic Network)
  onTransactionHash: (hash) => {
    // action on Transaction success
    console.log(hash) // eslint-disable-line
  },
})

```

`recipient` is the receiver’s address, to whom the funds are supposed to be sent.

```js
const recipient = "0x1a06816065731fcBD7296f9B2400d632816b070B" // to address
```

`token` is the Matic TEST token contract address on the Matic Network. **Note that this is different from the Mainnet TEST token contract address.**. This is automatically picked up from the `config.js` file.

```js
const token = config.MATIC_TEST_TOKEN // test token address
```

The config details are then mentioned appropriately. You need not make any changes to it.

The transfer functionality is invoked here.

```js
matic.transferTokens(token, recipient, amount, {
  from,
  // parent: true, // For token transfer on Main network (false for Matic Network)
  onTransactionHash: (hash) => {
    // action on Transaction success
    console.log(hash, 'Transfer done!') // eslint-disable-line
  },
})
```

**Sidenote** — you can change the `parent` parameter to TRUE if you are using Matic.js to transfer funds on the main Ethereum network.

We have added console logging on both events, which when run successfully will display `“Transfer done!”` to assure that the transaction was completed successfully. These messages are completely customized for this tutorial, by default only the Transaction Hash will be displayed.

We will be making 2 different transfers worth `1 TEST` and `0.100 TEST` tokens respectively.

The screenshots below will provide context during the actual transfer.

**Transfer #1**

We will be transferring `1 TEST` from Account 1 to Account 2 on Matic Network.

Account 1–`0x7eD7f36694153bA6EfF6ca6726b60F6E2Bb17fcf`. This account currently holds `11 TEST` tokens.

Account 2–`0x1a06816065731fcBD7296f9B2400d632816b070B`. This account currently holds `0 TEST` tokens.

![Arch](images/account2-transfer1-balance.png)

Now we will run the transfer function. Run this on the terminal:

`$ node transfer-ERC20.js`

![Arch](images/run-transfer-erc20-1.png)

Once the code has run successfully, it will display a message of `"Transfer done!"`

Let’s verify our balances on Metamask.

Our balance on account address — `0x7eD7f36694153bA6EfF6ca6726b60F6E2Bb17fcf` is now updated to `10 TEST` tokens.

![Arch](images/account1-transfer1-update.png)

And to confirm that on our receiver’s account, our balance is now updated to `1 TEST` tokens.

![Arch](images/account2-transfer1-update.png)

You can also check the transaction on the Matic Explorer by searching the transaction hash.

Link to the explorer - https://alpha-mainnet.explorer.matic.network/

**Transfer #2**

In this transaction we will attempt to transfer `0.100 TEST` from Account 1 to Account 3.

From — `0x7eD7f36694153bA6EfF6ca6726b60F6E2Bb17fcf`

To — `0xbFF81BA6Fa6593F0467592ACcF770A120f740552`. Account 3 currently has `0 TEST` tokens.

![Arch](images/account3-transfer2-balance.png)

We will again run `$ node transfer-ERC20.js` from the terminal. Once we get the `‘Transfer done!’` message, we will check our balances.

![Arch](images/run-transfer-erc20-2.png)

Balance on Account 1 now shows a balance of `9.900TEST`,

![Arch](images/account1-transfer2-update.png)

whereas the balance on Account 3 shows us `0.100 TEST`.

![Arch](images/account3-transfer2-update.png)


### Withdraw funds from Matic

Funds that are available on Matic chain can be withdrawn back to the Ethereum Network.

In Matic, withdrawing is a 3 step process where:

1. Withdrawal of funds is initiated from Matic Network. A checkpoint interval of 5 mins is set, where all the blocks on the Matic block layer are validated since the last checkpoint.
2. Once the checkpoint is submitted to the mainchain Ethereum contract, an NFT Exit (ERC721) token is created of equivalent value. Users need to wait for a 7 day challenge period
3. Once the challenge period is complete, the withdrawn funds can be claimed back to your Ethereum acccount from the mainchain contract using a process-exit procedure.

For now, just go with the fact that the challenge period for withdrawals is an important part of the Plasma framework to ensure security of your transactions. Later, once you get to know the system better, the reason for the 7-day withdrawal window will become clear to you.

Just for reference, there will be an active exit market, which will allow trading of exit tokens (ERC721), thereby leading to faster withdrawals — but that is an article for another day.

**To keep the withdrawal process easier for now on the Matic Alpha-Mainnet, we have not enforced the 7-day withdrawal process**. This means while going through this tutorial and developing apps on the alpha-mainnet, for now, you will get the withdrawn funds immediately after you initiate the `process-exit` procedure.

Create 3 new files and name them `initiate-withdraw-ERC20.js`, `confirm-withdraw-ERC20.js`,  and `process-exit-ERCO20.js`

**Initiate Withdraw**

```js
const Matic = require('maticjs').default
const config = require('./config')

const token = config.MATIC_TEST_TOKEN // test token address
const amount = '1000000000000000000' // amount in wei
const from = config.FROM_ADDRESS // from address

// Create object of Matic
const matic = new Matic({
  maticProvider: config.MATIC_PROVIDER,
  parentProvider: config.PARENT_PROVIDER,
  rootChainAddress: config.ROOTCHAIN_ADDRESS,
  syncerUrl: config.SYNCER_URL,
  watcherUrl: config.WATCHER_URL,
  withdrawManagerAddress: config.WITHDRAWMANAGER_ADDRESS, 
})

matic.wallet = config.PRIVATE_KEY // prefix with `0x`

// NOTE: Initiate the withdraw on the Matic chain, and wait for ~5 minutes for 
// the checkpoint (refer https://whitepaper.matic.network/#checklayer for technical details) 
// before confirming the withdraw by executing `confirm-withdraw.js`.
// The txHash from the output needs to be copied to the `confirm-withdraw.js` file before executing
matic
 .startWithdraw(token, amount, {
   from,
   onTransactionHash: (hash) => {
    //  console.log("Withdraw Initiated")
    console.log(hash) // eslint-disable-line
   },
})
```

**Confirm Withdraw**

```js
const Matic = require('maticjs').default
const config = require('./config')

const from = config.FROM_ADDRESS // from address

// Create object of Matic
const matic = new Matic({
 maticProvider: config.MATIC_PROVIDER,
 parentProvider: config.PARENT_PROVIDER,
 rootChainAddress: config.ROOTCHAIN_ADDRESS,
 syncerUrl: config.SYNCER_URL,
 watcherUrl: config.WATCHER_URL,
 withdrawManagerAddress: config.WITHDRAWMANAGER_ADDRESS,
})

matic.wallet = config.PRIVATE_KEY // prefix with `0x`

var transactionHash = 'Paste txHash here ...' // Insert txHash generated from initiate-withdraw.js 

//Wait for 5 mins till the checkpoint is submitted, then run the confirm withdraw
matic.withdraw(transactionHash, {
   from,
   onTransactionHash: (hash) => {
      // action on Transaction success
      console.log(hash) // eslint-disable-line
      // Withdraw process is completed, funds will be transfer to your account after challenge period is over.
   },
})
```

**Process Exit**

```js

const Matic = require('maticjs').default
const config = require('./config')

const from = config.FROM_ADDRESS // from address
const rootTokenAddress = config.ROPSTEN_TEST_TOKEN // Root token address

// Create object of Matic
const matic = new Matic({
 maticProvider: config.MATIC_PROVIDER,
 parentProvider: config.PARENT_PROVIDER,
 rootChainAddress: config.ROOTCHAIN_ADDRESS,
 syncerUrl: config.SYNCER_URL,
 watcherUrl: config.WATCHER_URL,
 withdrawManagerAddress: config.WITHDRAWMANAGER_ADDRESS,
})

matic.wallet = config.PRIVATE_KEY // prefix with `0x`

// NOTE: Wait for NFT Challenge period to be complete
matic.processExits(rootTokenAddress, {
   from,
   onTransactionHash: (hash) => {
      // action on Transaction success
      // DEVNOTE: on sucessfull processExits funds will be transfered to your mainchain account
      console.log(hash) // eslint-disable-line
   },
})
```

_Note: A checkpoint, which is a representation of all transactions happening on the Matic Network to the Ethereum chain every ~5 minutes, is submitted to the mainchain Ethereum contract._

### Withdrawing funds from Matic to Ethereum

We will now initiate the Withdraw process.

We currently have `9.900 TEST` tokens at our address on Matic — `0x7eD7f36694153bA6EfF6ca6726b60F6E2Bb17fcf`

We will withdraw `1 TEST` from the Matic Account.

To initiate the withdraw we will run `$ node initiate-withdraw-ERC20.js`.

Once this process is initiated, you will receive the transaction hash. The transaction hash will be used as input to run the next step i.e. confirm withdraw process.

I’ll add the transaction hash to the code — `0x2dd45cd900d9e9f5399ab1379e9a76db7113d1a9180388d04369b7864292a219`. Note that in your case, this transaction hash will be different.

Once the initiate process is complete, we will wait for ~5 minutes, before running the second script `$ node confirm-withdraw.js`.

![Arch](images/run-confirm-withdraw-erc20.png)

To verify, we will also check the account balances on Metamask.

The balance on Account 1 on Matic Network now shows `8.900 TEST` Tokens.

![Arch](images/confirm-withdraw-balance-update.png)

Now, in order to claim your funds after the challenge period is complete, you will need to run the `process-exit-ERC20.js`

So let's run `$ process-exit-ERC20.js`

![Arch](images/run-process-exit-ERC20.png)

Once this is complete, you will see the funds in your Ethereum account.

So that’s it folks! You have withdrawn your funds successfuly and gotten to the end of this tutorial :)

Hope you have understood now that interacting with the Matic Network is quite easy. We will dive deeper and explore advanced interactions with Matic in later posts.

Similarly, as an exercise you can Deposit, transfer and withdraw ERC721 and Ether using Matic.js following the same steps as above.

Feel free to reach out to us at https://stack.matic.network/ in case you face any issues.

