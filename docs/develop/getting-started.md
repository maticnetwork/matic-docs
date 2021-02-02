---
id: getting-started
title: Application development on Matic
sidebar_label: Getting Started
description: Build your next blockchain app on Matic.
keywords:
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png 
---

Welcome to the most exciting and innovative platform to build your blockchain application on **Matic Blockchain**. Blockchain technology is poised to revolutionise the way the digital world handles data and does business. Be a part of this revolution and get a head start with decentralised application development on Matic.

This page will act as your guide into the **Matic Ecosystem**. You'll find links to some useful resources and websites to get you up and started with building on Matic in particular and Blockchain in general. Feel free to reach out to us on Telegram/Discord. 

## **Developer Quick Start**

If you're an Ethereum Developer, you're already a Matic developer. 
All the tools you're familiar with are supported on Matic out of the box: Truffle, Remix, Web3js. 
Switch over to Matic's RPC and get started!

Matic's Test Network which is called **Mumbai** connects with **Ethereum's Goërli Testnet.** 
All the network related details can be found in [network docs](/docs/develop/network-details/network) 

- Setup [Metamask Wallet](/docs/develop/metamask/hello) or [Arkane Wallet](/docs/develop/wallets/arkane/intro)
- Deploy your Contracts on Matic Network
    - [Using Remix](/docs/develop/remix)
    - [Using Truffle](/docs/develop/truffle)
    - [Using Hardhat](/docs/develop/hardhat)
- Connecting to Matic [with RPC](https://docs.matic.network/docs/develop/metamask/testnet) by adding Matic network on Metamask or directly via [Arkane](/docs/develop/wallets/arkane/network).

  Note that same RPC can be used with web3js.

    ```jsx
    // Javascript 

    const Web3 = require('Web3')

    // Sign up for a free dedicated RPC URL at https://rpc.maticvigil.com/ or other hosted node providers.
    const web3 = new Web3('https://rpc-mumbai.matic.today')

    // web3 object is now connected with Matic's node
        ```

---

### **🦕 Already have a dApp?**

- **Migrating from Ethereum chain (or any EVM based chain for that matter)**

    Deploy all your smart contracts directly on Matic chain. You don't have to worry about the underlying architecture, as long as it is EVM compatible!

    [Deploying your dApp on Matic](https://docs.matic.network/docs/integrate/quickstart)

- **Using Matic as a faster transactions layer**

    Using Matic as a transactions layer in your DApp deployed on Mainnet, you can get started with getting your tokens mapped by us.

    Getting your tokens mapped on Matic: 👋🏼 Ping us on [http://bit.ly/matic-technical-group](http://bit.ly/matic-technical-group)

### **🌱 Building a new dApp on Matic?**

**🏗️ Start building!**

- [Full Stack DApp: Tutorial Series](https://kauri.io/full-stack-dapp-tutorial-series/5b8e401ee727370001c942e3/c)
- Getting to know your tools:
    - [Web3js](https://www.dappuniversity.com/articles/web3-js-intro), [Remix](https://docs.matic.network/docs/develop/remix/), [Truffle](https://docs.matic.network/docs/develop/truffle), [Metamask](https://docs.matic.network/docs/develop/metamask/hello), [Arkane](/docs/develop/wallets/arkane/intro)
- [Writing your first DApp on Matic!](https://docs.matic.network/docs/develop/full-stack-dapp-with-pos)

**😎 Advanced**

- [Sidechains and Plasma](https://docs.matic.network/docs/home/blockchain-basics/sidechain)
- [Matic's architecture and Security](https://docs.matic.network/docs/home/architecture/components)
- [When to use Plasma](https://docs.matic.network/docs/home/architecture/security-models)
- [Moving assets from Mainchain to Matic chain: the Plasma way](https://docs.matic.network/docs/develop/maticjs/getting-started)
- [Swapping Plasma Assets](https://docs.matic.network/docs/develop/advanced/swap-assets)

**Other links**

<div style={{textAlign: 'center', paddingTop: '15px', paddingBottom: '15px'}}>
  <button className="btn btn-primary btn-md mx-4">
    <a href="https://www.notion.so/Video-Tutorials-Library-f16cbb8c3d9d47d8bc809e06519f110c" target="_blank" style={{color: 'inherit'}}>
      Video Tutorials Library
    </a>
  </button>

  <button className="btn btn-primary btn-md mx-4">
    <a href="https://www.notion.so/Writings-by-the-Team-c979819406894abb964cb50ae197f376" target="_blank" style={{color: 'inherit'}}>
      Writings by the Team
    </a>
  </button>

  <button className="btn btn-primary btn-md mx-4">
    <a href="https://www.notion.so/f5739c3ed3cc40e3ae71d5935a72143d" target="_blank" style={{color: 'inherit'}}>
      Matic Tools
    </a>
  </button>

  <button className="btn btn-primary btn-md mx-4">
    <a href="https://www.notion.so/FAQs-2192c487105342ae90c54efadd101cac" target="_blank" style={{color: 'inherit'}}>
      FAQs
    </a>
  </button>
</div>

### **Learn the developer tools**

- [CryptoZombies](https://cryptozombies.io/)
- [Full stack dapp tutorial series](https://kauri.io/collection/5b8e401ee727370001c942e3/full-stack-dapp-tutorial-series)
- [Infura Docs](https://infura.io/docs)
- [Truffle Suite Docs](https://www.trufflesuite.com/docs) (Recommended)
- [Truffle tutorials](https://www.trufflesuite.com/tutorials) (Recommended)
- [Parity Wiki](https://wiki.parity.io/)
- [Geth docs](https://geth.ethereum.org/)
- [Remix](https://remix.ethereum.org/)
- [OpenZeppelin Docs](https://docs.openzeppelin.com/)
- [Ethernaut](https://ethernaut.openzeppelin.com/)
    - A game that teaches security
- [Capture the Ether](https://capturetheether.com/)
    - A game that teaches security

### **Learn the Basics of Development**

- [Full stack dapp tutorial series](https://kauri.io/collection/5b8e401ee727370001c942e3/full-stack-dapp-tutorial-series)
- [Truffle tutorials](https://www.trufflesuite.com/tutorials)
- [Dapp University](https://www.youtube.com/channel/UCY0xL8V6NzzFcwzHCgB8orQ)
- [ConsenSys Academy Developer Program On-Demand course](https://consensys.net/academy/ondemand/)
- [What is Ethereum?](https://blockgeeks.com/guides/ethereum/)
- [Read Mastering Ethereum](https://github.com/ethereumbook/ethereumbook)
- [OpenZeppelin Learn Docs](https://docs.openzeppelin.com/learn/)

### **Get Involved with Hackathons**

Hackathons take place at blockchain conferences and meetups all over the world. Chances are you can’t hop on a plane on a moment’s notice, but some conferences or projects host virtual hackathons open to anyone with an internet connection.

<div style={{textAlign: 'center', paddingTop: '15px', paddingBottom: '15px'}}>
  <button className="btn btn-primary btn-md">
    <a href="https://discord.gg/yCj3gc" target="_blank" style={{color: 'inherit'}}>
      Matic Hackathons Discord Channel
    </a>
  </button>
</div>

### **Meet-ups**

Some meetups are more about trading “investment” advice but a good technical meetup in your area is an excellent way to meet other people interested in Dapp development.

<div style={{textAlign: 'center', paddingTop: '15px', paddingBottom: '15px'}}>
  <button className="btn btn-primary btn-md">
    <a href="https://t.me/EthereumIndiaOfficial" target="_blank" style={{color: 'inherit'}}>
    Ethereum India Official
    </a>
  </button>
</div>

# **Keeping Up with Development**

### **Social Media**

Dapp development encourages network decentralization, and it also embodies it. Developers are located everywhere in the world! As such, social media has become important to keep people in touch across time zones. Besides the popular platforms, you may be less familiar with platforms such as Telegram, Discord and Gitter.

Reddit:

- /r/maticnetwork
- /r/ethereum
- /r/ethdev
- /r/ethfinance
- /r/ethereumnoobies

Twitter:

- [Bankless: How to Use Crypto Twitter](https://bankless.substack.com/p/how-to-use-crypto-twitter-to-level-77c)
- [EthHub](https://twitter.com/ethhub_io)
- [CodeFi](https://twitter.com/ConsenSysCodefi)
- [ConsenSys Labs](https://twitter.com/ConsenSysLabs)
- [Universal Login](https://twitter.com/unilogin)
- [MetaCartle](https://twitter.com/meta_cartel)
- [Ethereum Foundation](https://twitter.com/ethereum)
- [DAI Dao](https://twitter.com/rDAI_dao)
- [ETHGlobal](https://twitter.com/ETHGlobal)
- [MakerDao](https://twitter.com/MakerDAO)
- [DeFi Pulse](https://twitter.com/defipulse)
- [DeFi Prime](https://twitter.com/defiprime)
- [Uniswap](https://twitter.com/UniswapExchange)
- [Compound](https://twitter.com/compoundfinance)
- [Gnosis](https://twitter.com/gnosisPM)
- [Nexus Mutual](https://twitter.com/NexusMutual)
- [Argent](https://twitter.com/argentHQ)
- [The Token Analyst](https://twitter.com/thetokenanalyst)
- [EF Devcon account](https://twitter.com/EFDevcon)
- [Status](https://twitter.com/ethstatus?lang=en)
- [OpenZeppelin](https://twitter.com/openzeppelin)

### **Newsletters**

- [Week In Ethereum](https://weekinethereumnews.com/)
- [EthHub](https://ethhub.io/)
- [Chain Letter](https://forms.technologyreview.com/chain-letter/)
- [ConsenSys Newsletter Digest](https://share.hsforms.com/1HiFwsb55S5GUf-EOe0KP8Q2urwb?email=)

### **Podcasts**

- [Zero Knowledge](https://www.zeroknowledge.fm/)
- [Into the Ether](https://ethhub.substack.com/)
- [Unconfirmed](https://unconfirmed.libsyn.com/)
- [Epicenter](https://epicenter.tv/)
- [11:FS Blockchain Insider](https://bi.11fs.com/)

## Pointers

If this is overwhelming, that’s okay! You can jump right into the fire and start hacking. Here are a few pointers before you start diving into resources, repositories, and documentation.

1. **Beware the cost of being on the bleeding edge** More so than typical niche programming, dapp and blockchain development moves very quickly. Deep into learning, you may find complex code repositories, 404s on a documentation site, or, perhaps, no documentation at all. Rather than seeing this as a deterrent, see it as an invitation to a **Opportunity**. Ping on our developer channel, find the Discord / Gitter / Telegram channel, post on Stack Overflow or Reddit — you may be surprised at the rate of response and openness of the community.
2. **The learning curve may be daunting, but the barrier to entry is low**. All communities have their grumps, of course, but if you do the work, put in the effort, it will be noticed. Projects welcome pull requests from outsiders and support will be there if you’ve exhausted every other resource. We’re working on creating a better world and can use all the help we can get. We’re just glad you’re here.
