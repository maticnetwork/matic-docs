---
id: hardhat
title: Using Hardhat
description: Build your next blockchain app on Matic.
keywords:
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png 
---

## **Setting up the development environment**

There are a few technical requirements before we start. Please install the following:

- [Node.js v8+ LTS and npm](https://nodejs.org/en/) (comes with Node)
- [Git](https://git-scm.com/)

Once we have those installed, To install hardhat, you need to create an npm project by going to an empty folder, running npm init, and following its instructions. Once your project is ready, you should run

```js
$ npm install --save-dev hardhat
```
To create your Hardhat project run npx hardhat in your project folder
Let’s create the sample project and go through these steps to try out the sample task and compile, test and deploy the sample contract.


The sample project will ask you to install hardhat-waffle and hardhat-ethers.You can learn more about it [in this guide](https://hardhat.org/getting-started/#quick-start)

## **hardhat-config**

- Go to hardhat.config.js
- Update the hardhat-config with matic-network-crendentials.
- create .secret file in the root to store your private key

```js
require("@nomiclabs/hardhat-ethers");
const fs = require('fs');
const privateKey = fs.readFileSync(".secret").toString().trim();
module.exports = {
  defaultNetwork: "matic",
  networks: {
    hardhat: {
    },
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [privateKey]
    }
  },
  solidity: {
    version: "0.7.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
}
```


## **Deploying on Matic Network**

Run this command in root of the project directory:
```js
$ npx hardhat run scripts/sample-script.js --network matic
```

Contract will be deployed on Matic's Mumbai Testnet, it look like this:

```js
Compilation finished successfully
Greeter deployed to: 0xfaFfCAD549BAA6110c5Cc03976d9383AcE90bdBE
```

> Remember your address would differ, Above is just to provide an idea of structure.
**Congratulations!** You have successfully deployed Greeter Smart Contract. Now you can interact with the Smart Contract.

You can check the deployment status here: https://mumbai-explorer.matic.today/





