/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  introduction: [
    "home/new-to-matic",
    {
      type: "category",
      label: "Blockchain Basics",
      items: [
        "home/blockchain-basics/blockchain",
        "home/blockchain-basics/blockchain-types",
        "home/blockchain-basics/consensus-mechanism",
        "home/blockchain-basics/ethereum",
        "home/blockchain-basics/matic",
        "home/blockchain-basics/solidity",
        "home/blockchain-basics/transactions",
        "home/blockchain-basics/gas",
        "home/blockchain-basics/accounts",
        "home/blockchain-basics/sidechain",
        "home/blockchain-basics/import-account-to-metamask",
      ],
    },
    "home/architecture/matic-architecture",
    // "home/architecture/matic-flow",
    "home/architecture/security-models",
    // "home/architecture/bor-chain",
    // "home/architecture/heimdall-chain",
    "home/faq",
  ],
  development: [
    "develop/getting-started",
    {
      type: "category",
      label: "Deploying on Matic",
      items: ["develop/remix", "develop/truffle","develop/hardhat"],
    },
    {
      type: "category",
      label: "Network Details",
      items: [
        "develop/network-details/network",
        "develop/network-details/mapped-tokens",
        "develop/network-details/gas-token",
        "develop/network-details/genesis-contracts",
        "develop/network-details/full-node-deployment",
      ],
    },
    {
      type: "category",
      label: "Tools",
      items: [
        {
          type: "link",
          label: "Matic Faucet",
          href: "https://faucet.matic.network/",
        },
        // {
        //   type: "link",
        //   label: "RPC Health",
        //   href: "https://status.matic.today",
        // },
        // {
        //   type: "link",
        //   label: "Checkpoint Status",
        //   href: "https://status.matic.today/#/checkpoints",
        // },
        "develop/tools/matic-gas-station",
      ],
    },
    {
      type: "category",
      label: "Using Metamask",
      items: [
        "develop/metamask/hello",
        "develop/metamask/config-matic",
        "develop/metamask/custom-tokens",
        "develop/metamask/multiple-accounts",
      ],
    },

    {
      type: "category",
      label: "Wallets",
      items: [
        "develop/wallets/getting-started",
        {
          type: "category",
          label: "Arkane",
          items: [
            "develop/wallets/arkane/intro",
            "develop/wallets/arkane/create-wallet",
            "develop/wallets/arkane/network",
            "develop/wallets/arkane/custom-tokens",
            "develop/wallets/arkane/support",
          ],
        },
        "develop/wallets/fortmatic",
        "develop/wallets/metamask",
        "develop/wallets/portis",
        "develop/wallets/torus",
        "develop/wallets/walletconnect",
        {
          type: "category",
          label: "Matic Web Wallet",
          items: [
            "develop/wallets/matic-web-wallet/web-wallet-v2-guide",
            "develop/wallets/matic-web-wallet/deposit-eth-dai-on-matic",
          ],
        },
 
      ],
    },
    {
      type: "category",
      label: "Ethereum ↔ Matic",
      items: [
        "develop/ethereum-matic/getting-started",
        {
          type: "category",
          label: "PoS Bridge",
          items: [
            "develop/ethereum-matic/pos/getting-started",
            {
              type: "category",
              label: "Using SDK",
              items: [
                "develop/ethereum-matic/pos/using-sdk/getting-started",
                "develop/ethereum-matic/pos/using-sdk/eth",
                "develop/ethereum-matic/pos/using-sdk/erc20",
                "develop/ethereum-matic/pos/using-sdk/erc721",
                "develop/ethereum-matic/pos/using-sdk/erc1155"
              ],
            },
            {
              type: "category",
              label: "Calling Contracts",
              items: [
                "develop/ethereum-matic/pos/calling-contracts/ether",
                "develop/ethereum-matic/pos/calling-contracts/erc20",
                "develop/ethereum-matic/pos/calling-contracts/erc721",
                "develop/ethereum-matic/pos/calling-contracts/erc1155",
              ],
            },
            "develop/ethereum-matic/pos/deposit-withdraw-event-pos",
            "develop/ethereum-matic/pos/deployment",
            "develop/ethereum-matic/pos/mapping-assets",
          ],
        },
        {
          type: "category",
          label: "Plasma Bridge",
          items: [
            "develop/ethereum-matic/plasma/getting-started",
            "develop/ethereum-matic/plasma/eth",
            "develop/ethereum-matic/plasma/erc20",
            "develop/ethereum-matic/plasma/erc721",
            "develop/ethereum-matic/plasma/deposit-withdraw-event-plasma",
            "develop/ethereum-matic/plasma/mapping-assets",
          ],
        },
        "develop/ethereum-matic/submit-mapping-request",
        "develop/ethereum-matic/mintable-assets",
      ],
    },
    {
      type: "category",
      label: "L1<>L2 Communication",
      items: [
        "develop/l1-l2-communication/state-transfer"
      ],
    },
    {
      type: "category",
      label: "Meta Transactions",
      items: [
        "develop/metatransactions/getting-started",
        "develop/metatransactions/metatransactions-biconomy",
        "develop/metatransactions/metatransactions-gsn",
        "develop/metatransactions/network-agnostics"
      ],
    },
    {
      type: "category",
      label: "Oracles",
      items: [
        "develop/oracles/getting-started",
        "develop/oracles/chainlink",
        "develop/oracles/razor",
        "develop/oracles/bandchain",
        "develop/oracles/bandstandarddataset",
      ],
    },
    "develop/fiat-on-ramp",
    {
      type: "category",
      label: "Indexing Services",
      items: [
        "develop/graph",
        {
          type: "link",
          label: "Covalent",
          href: "https://www.covalenthq.com/docs/api/",
        },

      ],
    },
    {
      type: "category",
      label: "Realtime Updates",
      items: [
        "develop/dagger-webhooks",
        {
          type: "category",
          label: "Zapier - Mulitple Apps",
          items: ["develop/zapier/getting-started"],
        },
      ],
    },

    {
      type: "category",
      label: "Tutorials",
      items: [
        "develop/pos-using-metamask",
        "develop/plasma-using-metamask",
      ],
    },
    {
      type: "category",
      label: "Advanced",
      items: [
        "develop/advanced/calling-plasma-contracts",
        "develop/advanced/swap-assets",
        "develop/advanced/custom-restrictions",
      ],
    },
    {
      type: "category",
      label: "Architecture",
      items: [
        "contribute/matic-architecture",
        {
          type: "category",
          label: "Heimdall",
          items: [
            "contribute/heimdall/overview",
            {
              type: "category",
              label: "Core Concepts",
              items: [
                "contribute/heimdall/encoder",
                "contribute/heimdall/transactions",
                "contribute/heimdall/stdtx",
                "contribute/heimdall/types",
                "contribute/heimdall/validators",
                "contribute/heimdall/checkpoint",
                "contribute/heimdall/validator-key-management",
                "contribute/heimdall/antehandler",
              ],
            },
            {
              type: "category",
              label: "Modules",
              items: [
                "contribute/heimdall/modules/auth",
                "contribute/heimdall/modules/bank",
                "contribute/heimdall/modules/governance",
                "contribute/heimdall/modules/staking",
                "contribute/heimdall/modules/checkpoint",
                "contribute/heimdall/modules/bor",
                "contribute/heimdall/modules/topup",
                "contribute/heimdall/modules/clerk",
                "contribute/heimdall/modules/chainmanager",
              ],
            },
            "contribute/peppermint",
          ],
        },
        {
          type: "category",
          label: "Bor",
          items: [
            "contribute/bor/overview",
            "contribute/bor/bor",
            "contribute/bor/core_concepts",
            "contribute/bor/consensus",
          ],
        },
        {
          type: "category",
          label: "Contracts",
          items: [
            "contribute/contracts/stakingmanager",
            "contribute/contracts/delegation",
            {
              type: "category",
              label: "Plasma Contracts",
              items: [
                "contribute/contracts/plasma_contracts/account_based_plasma",
                "contribute/contracts/plasma_contracts/predicates",
                "contribute/contracts/plasma_contracts/important-contracts",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "State Sync",
          items: [
            "contribute/state-sync/state-sync",
            "contribute/state-sync/how-state-sync-works",

            
          ],
        },
        "home/architecture/security-models",
      ],
    },
  ],
  Integrate: [
    "integrate/quickstart",
    {
      type: "category",
      label: "Network Information",
      items: [
        "integrate/network",
        {
          type: "category",
          label: "Network Details",
          items: [
            "integrate/network-detail",
            {
              type: "link",
              label: "Matic-Mainnet",
              href:
                "https://github.com/maticnetwork/static/blob/master/network/mainnet/v1/index.json",
            },
            {
              type: "link",
              label: "Mumbai",
              href:
                "https://static.matic.network/network/testnet/mumbai/index.json",
            },
          ],
        },
        {
          type: "link",
          label: "Matic Faucet",
          href: "https://faucet.matic.network/",
        },
        {
          type: "link",
          label: "RPC Health",
          href: "https://status.matic.today",
        },
        {
          type: "link",
          label: "Checkpoint Status",
          href: "https://status.matic.today/#/checkpoints",
        },
      ],
    },
    {
      type: "category",
      label: "Advanced",
      items: ["integrate/full-node-deployment",
      "integrate/full-node-binaries"],
    },
  ],
  Validate: [
    "validate/orientation",
    {
      type: "category",
      label: "Basics",
      items: [
        "validate/basics/what-is-matic",
        "validate/basics/validator",
        "validate/basics/delegator",
        "validate/basics/pos_staking_delegation",
        "validate/economics",
        "validate/technical-requirements",
      ],
    },
    {
      type: "category",
      label: "Validator",
      items: [
        "validate/validator/introduction",
        "validate/validator/architecture",
        "validate/validator/responsibilities",
        {
          type: "category",
          label: "Core Components",
          items: [
            "validate/validator/heimdall-chain",
            "validate/validator/bor-chain",
            "validate/validator/checkpoint-mechanism",
            "validate/validator/proposer-producer-selection",
            "validate/validator/key_management",
            // "validate/validator/bridge",
            "validate/validator/staking",
            "validate/validator/delegation",
            "validate/validator/derivatives",
            "validate/validator/proposer_bonus",
            "validate/validator/transaction_fees",
            "validate/validator/state-sync-mechanism",
          ],
        },
      ],
    },
    "validate/delegator",
    "validate/delegator-faq",
    // "validate/port_management",
    {
      type: "category",
      label: "Mainnet",
      items: [
        "validate/mainnet/getting-started",
        "validate/mainnet/core-components",
        "validate/mainnet/validator-responsibilities",
        "validate/mainnet/validator-guide",
        "validate/mainnet/validator-guide-binaries",
        "validate/mainnet/stake-on-matic",
        "validate/mainnet/validator-replacement",
        "validate/mainnet/signer-change",
        "validate/mainnet/commission",
        "validate/mainnet/move-stake",
        "validate/mainnet/technical-faqs",
        "validate/mainnet/validator-knowledge-base",
      ],
    },
    "validate/faqs",
    "validate/bug-bounty-program",
    "validate/reporting-issues",
    "validate/validator/rewards",
  ],
  Contributors: [
    "contribute/orientation",
    "contribute/community-maintainers",
    "validate/bug-bounty-program",
    {
      type: "category",
      label: "Architecture",
      items: [
        "contribute/matic-architecture",
        {
          type: "category",
          label: "Heimdall",
          items: [
            "contribute/heimdall/overview",
            {
              type: "category",
              label: "Core Concepts",
              items: [
                "contribute/heimdall/encoder",
                "contribute/heimdall/transactions",
                "contribute/heimdall/stdtx",
                "contribute/heimdall/types",
                "contribute/heimdall/validators",
                "contribute/heimdall/checkpoint",
                "contribute/heimdall/validator-key-management",
                "contribute/heimdall/antehandler",
              ],
            },
            {
              type: "category",
              label: "Modules",
              items: [
                "contribute/heimdall/modules/auth",
                "contribute/heimdall/modules/bank",
                "contribute/heimdall/modules/governance",
                "contribute/heimdall/modules/staking",
                "contribute/heimdall/modules/checkpoint",
                "contribute/heimdall/modules/bor",
                "contribute/heimdall/modules/topup",
                "contribute/heimdall/modules/clerk",
                "contribute/heimdall/modules/chainmanager",
              ],
            },
            "contribute/peppermint",
          ],
        },
        {
          type: "category",
          label: "Bor",
          items: [
            "contribute/bor/overview",
            "contribute/bor/bor",
            "contribute/bor/core_concepts",
            "contribute/bor/consensus",
          ],
        },
        {
          type: "category",
          label: "Contracts",
          items: [
            "contribute/contracts/stakingmanager",
            "contribute/contracts/delegation",
            {
              type: "category",
              label: "Plasma Contracts",
              items: [
                "contribute/contracts/plasma_contracts/account_based_plasma",
                "contribute/contracts/plasma_contracts/predicates",
                "contribute/contracts/plasma_contracts/important-contracts",
              ],
            },
          ],
        },
        {
          type: "category",
          label: "State Sync",
          items: [
            "contribute/state-sync/state-sync",
            "contribute/state-sync/how-state-sync-works",

            
          ],
        },
        
        "home/architecture/security-models",
      ],
    },
  ],
  faq: [
    "faq/faq",
    // "faq/delegator-faq",
    "faq/commit-chain-multisigs",
    "faq/staking-faq",
    "faq/staking-tutorials",
    "faq/wallet-bridge-faq",
    "faq/technical-faqs",
    "faq/consensys-framework",

  ],
};
