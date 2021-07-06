---
id: network-detail
title: How to read Network Details?
description: Build your next blockchain app on Matic.
keywords:
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png 
---

You can have the network details by visting the below shared support links.
- Network config: <static.matic.network/network/"network_name"/"version"/index.json>

## Example

For TestnetV3: https://static.matic.network/network/testnet/v3/index.json

```js
{
  "Main": {
    "NetworkName": "Ropsten testnet",                                           // Network Name
    "ChainId": 3,                                                               // ChainId
    "RPC": "https://ropsten.infura.io/v3/70645f042c3a409599c60f96f6dd9fbc",     // This is the Ropsten testnet RPC; sign up for free, private RPC URLS at https://alchemy.com or alternative providers
    "SyncerAPI": "https://testnetv3-syncer.api.matic.network/api/v1",           // Backend service which syncs the Matic sidechain state to a MySQL database which we use for faster querying. This comes in handy especially for constructing withdrawal proofs while exiting assets from Plasma.
    "WatcherAPI": "https://testnetv3-watcher.api.matic.network/api/v1",         // Backend service which syncs the Matic Plasma contract events on Ethereum mainchain to a MySQL database which we use for faster querying. This comes in handy especially for listening to asset deposits on the Plasma contract.
    "DaggerEndpoint": "https://ropsten.dagger.matic.network",                   // Dagger Endpoint in Ropsten
    "Explorer": "https://ropsten.etherscan.io",                                 // Explorer in Ropsten
    "Contracts": {
      "Registry": "0x56B082d0a590A7ce5d170402D6f7f88B58F71988",                 // The address for the main Registry in  Ropsten testnet
      "RootChain": "0x82a72315E16cE224f28E1F1fB97856d3bF83f010",                // The address for the main Plasma contract in  Ropsten testnet
      "DepositManager": "0x4b068Ac93b3b71DB13Fce4c4510Eb70D3022576A",           // An address for a DepositManager contract in Ropsten testnet
      "DepositManagerProxy": "0x3Bc6701cA1C32BBaC8D1ffA2294EE3444Ad93989",      // An address for a DepositManagerProxy contract in Ropsten testnet
      "WithdrawManager": "0xcBd99DfD6fbC55e7596318FC069bC3B7869Ff30a",          // An address for a WithdrawManager contract in Ropsten testnet
      "WithdrawManagerProxy": "0x3cf9aD3395028a42EAfc949e2EC4588396b8A7D4",     // An address for a WithdrawManagerProxy contract in Ropsten testnet
      "StakeManager": "0x0aEd86c6cA8c68C5499cec6F3570e2CA4860A918",             // An address for a StakeManager contract in Ropsten testnet
      "SlashingManager": "0xAb1e2218EAF1b2d242ddDD047BE5f5583A68BA84",          // An address for a SlashingManager contract in Ropsten testnet
      "DelegationManager": "0xba032CD2B41a6FDA32ad9f1DE5623694a47Db9EA",        // An address for a DelegationManager contract in Ropsten testnet
      "ExitNFT": "0xe4202974B2d5b2f26b7A8f27098EC439d1e6C4aa",                  // An address for a ExitNFT contract in Ropsten testnet
      "StateSender": "0x22E1f5aa1BA9e60527250FFeb35e30Aa2913727f",              // An address for a StateSender contract in Ropsten testnet
      "Predicates": {                                                           // Predicated Contracts in Ropsten
        "ERC20Predicate": "0xaBE79B1B44581c69cCc45146dd8681Fb82a8AA18",         
        "ERC721Predicate": "0x1F07Aa7eB46414d2F89746C7510E8597E82CF698",
        "MarketplacePredicate": "0x2E3a58bF3644E4D790f93A01527F85E211c57841",
        "TransferWithSigPredicate": "0x3f0dC47C79254cfCA4195519954b444F87a766E0"
      },
      "Tokens": {
        "MaticWeth": "0x7BdDd37621186f1382FD59e1cCAE0316F979a866",              // Contract for WrappedEther in Ropsten
        "TestToken": "0x28C8713DDe7F063Fdc4cA01aB2A8856e0F243Fec",              // Contract for ERC20 in Ropsten
        "TestERC721": "0x07d799252cf13c01f602779b4dce24f4e5b08bbd"              // Contract for ERC721 in Ropsten
      }
    }
  },
  "Matic": {
    "NetworkName": "Matic testnet",                                             // Network Name
    "ChainId": 15001,                                                           // ChainId
    "RPC": "https://testnetv3.matic.network",                                   // This is the MATIC testnet RPC
    "RPCWebSocketEndpoint": "wss://testnetv3-wss.matic.network",                // This is the MATIC testnet Wss
    "SyncerAPI": "https://testnetv3-syncer.api.matic.network/api/v1",           // Backend service which syncs the Matic sidechain state to a MySQL database which we use for faster querying. This comes in handy especially for constructing withdrawal proofs while exiting assets from Plasma.
    "Explorer": "https://testnetv3-explorer.matic.network/",                    // Explorer in Matic
    "DaggerEndpoint": "https://testnetv3-dagger.matic.network",                 // Dagger Endpoint in Matic
    "Contracts": {
      "ChildChain": "0xa2EF03edfA084ac9e5Bf110e409Ed5483BAe4101",               // This is child chain contract address
      "Tokens": {
        "MaticWeth": "0x8567184E6F9b1B77f24AfF6168453419AD22f90e",              // ChildContract for WrappedEther in Matic testnetv3
        "TestToken": "0x9a93c912F4eFf0254d178a18ACD980C1B05b57b0",              // ChildContract for ERC20 in Matic testnet
        "TestERC721": "0x8D5231e0B79edD9331e0CF0d4B9f3F30d05C47A5"              // ChildContract for ERC721 in Matic testnet
      }
    }
  }
}
```