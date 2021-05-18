---
id: validator-guide-binaries
title: Matic Mainnet Node - Sentry & Validator
sidebar_label: Node Setup Binaries
description: Build your next blockchain app on Matic.
keywords:
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png 
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Pre-requisites

### Minimum System Requirements

- Minimum system requirements are as follows:

    16 GiB of memory

    4 core CPU (t2 xLarge)

    Minimum 150GB disk (make sure it is extendable)

It is essential that you have **2 different Machines / VM** for your Sentry and Validator Node. Having a single Machine to run both, your Sentry and Validator nodes will run into issues

You can obviously opt for higher setup infra to future-proof your Node. However, anything below the minimum requirements, you will run into issues sooner than later. The minimum requirements set above is for both Sentry and Validator nodes.

### Install build essentials

***This is required for both your Sentry and Validator node***

```bash
sudo apt-get install build-essential
```

### **Install GO**

***This is required for both your Sentry and Validator node***

```bash
curl https://gist.githubusercontent.com/jdkanani/e18e14910652ad829fad994e4b89f0b9/raw/aecdd859f568848083b4db6cc1ee2bc1b8090ed3/go-install.sh
bash install_go.sh
```

> Note: Go version 1.11+ is recommended

### RabbitMq

***This is required for both your Sentry and Validator node***

RabbitMQ is a message-queueing software also known as a message broker or queue manager. Simply said; it is software where queues are defined, to which applications connect in order to transfer a message or messages.

A helper service called `bridge` which is embedded into heimdall codebase requires `rabbit-mq` to queue transactions to multiple networks. Installing it should be pretty straightforward. 

**Checkout the download instructions here: [https://www.rabbitmq.com/download.html](https://www.rabbitmq.com/download.html)**

```bash
rabbitmq-server
```

## Install Binaries

### Heimdall

***This is required for both your Sentry and Validator node***

Next, install the latest version of Heimdall and services. Make sure you checkout the correct [released version](https://github.com/maticnetwork/heimdall/releases) on Git

```bash
cd ~/
git clone https://github.com/maticnetwork/heimdall
cd heimdall

# Checkout to a proper version
# For eg: git checkout v0.2.1-mainnet 
git checkout <TAG OR BRANCH>
make install
```

That will install the `heimdalld` and `heimdallcli` binaries. Verify that everything is OK:

```bash
heimdalld version --long
```

### Bor

***This is required for both your Sentry and Validator node***

Next, install the latest version of Bor. Make sure you checkout the correct [released version](https://github.com/maticnetwork/bor/releases) via Git

```bash
cd ~/
git clone https://github.com/maticnetwork/bor
cd bor

# Checkout to a proper version
# For eg: git checkout v0.2.4
git checkout <TAG OR BRANCH>
make all
```

That will install the `bor` binary and `bootnode` binary:

```bash
bor version
```

## Setup node files

### Fetch launch repo

```bash
cd ~/
git clone https://github.com/maticnetwork/launch
```

### Setup launch directory

To setup network directory, network name and type of node are required.

Available networks: `mainnet-v1` 

Node types: `sentry` and `validator` 

**For Sentry**:

```bash
cp -rf launch/<network-name>/sentry/<node-type> ~/node

# To setup sentry node for matic mainnet
# cp -rf launch/mainnet-v1/sentry/sentry ~/node
```

**For Validator:**

```jsx
cp -rf launch/<network-name>/sentry/<node-type> ~/node

# To setup sentry node for matic mainnet
# cp -rf launch/mainnet-v1/sentry/validator ~/node
```

### Setup network directories

***This is required for both your Sentry and Validator node***

**Heimdall data setup**

```bash
cd ~/node/heimdall
bash setup.sh
```

**Bor data setup**

```bash
cd ~/node/bor
bash setup.sh
```

## Setup service files

***This is required for both your Sentry and Validator node***

Generate services files and copy them into system directory

```bash
cd ~/node
bash service.sh
sudo cp *.service /etc/systemd/system/
```

## Setup config files

**For Sentry Node**

- Login to the remote machine / VM
- You will need to add a few details in the `config.toml` file. To open the `config.toml` file run the following command `vi ~/.heimdalld/config/config.toml`

    Now in the config file you will have to change `Moniker` and add `seeds` information

    ```jsx
    moniker=<enter unique identifier> For example, moniker=my-sentry-node
    ```

    ```jsx
    seeds="f4f605d60b8ffaaf15240564e58a81103510631c@159.203.9.164:26656,4fb1bc820088764a564d4f66bba1963d47d82329@44.232.55.71:26656"
    ```

    - Check for the parameter `private_peer_ids`. You will need to add your **Validator NodeID** here. To get your **Validator NodeID**, you will need to run this command on your Validator node instance: `heimdalld tendermint show-node-id`. After you add your NodeID it should look something like this `private_peer_ids = "2170800c8a57.....a350f1c0ff"`
    - Change the value of **Pex** to `true`
    - Change the value of **Prometheus** to `true`
    - Set the `max_open_connections` value to `100`

    Make sure you keep the proper formatting when you make the changes above.

- Next you need to make changes in the `[start.sh](http://start.sh)` file for Bor. Add the following flag in `vi ~/node/bor/start.sh` to the `bor` start params:

```bash
--bootnodes "enode://0cb82b395094ee4a2915e9714894627de9ed8498fb881cec6db7c65e8b9a5bd7f2f25cc84e71e89d0947e51c76e85d0847de848c7782b13c0255247a6758178c@44.232.55.71:30303,enode://88116f4295f5a31538ae409e4d44ad40d22e44ee9342869e7d68bdec55b0f83c1530355ce8b41fbec0928a7d75a5745d528450d30aec92066ab6ba1ee351d710@159.203.9.164:30303"
```

## Start services

Run these commands on your Sentry Node:

**To Start Heimdall Service**

```jsx
sudo service heimdalld start
```

**To start Heimdall Rest-server**

```jsx
sudo service heimdalld-rest-server start
```

You check logs for Heimdall and rest-server here:

- Heimdall - `journalctl -u heimdalld.service -f`
- Heimdall Rest Server - `journalctl -u heimdalld-rest-server.service -f`

Now you need to make sure that **Heimdall is synced** completely and only then Start Bor. If you start Bor without Heimdall syncing completely, you will run into issues frequently.

- To check if Heimdall is synced
    - On the remote machine/VM, run `curl localhost:26657/status`
    - In the output, `catching_up` value should be `false`

Now once Heimdall is synced, run 

```jsx
sudo service bor start
```

You can check Bor logs here:

- Bor - `journalctl -u bor.service -f`

### **Setup Config Changes For Validator Node**

- Login to the remote machine / VM
- You will need to add a few details in the `config.toml` file. To open the `config.toml` file run the following command

    ```jsx
    vi ~/.heimdalld/config/config.toml
    ```

    Now in the config file you will have to change `Moniker` and add `seeds` information

    ```jsx
    moniker=<enter unique identifier> 
    ```

    - Now in this file, check for the parameter `pex`. The value for this parameter should be `false`.
    - Check for the parameter `private_peer_ids`. This should be commented out or there should be a "#" at the start of the line. Or you could leave it as is.
    - In the `persistent_peers`, you will need to add your Sentry NodeID here. To get your Sentry NodeID, **you will need run this command on the Sentry node instance**:

    ```jsx
    heimdalld tendermint show-node-id 
    ```

    and add it in the following format as mentioned below

    ```jsx
    persistent_peers = "sentry_machineNodeID@sentry_instance_ip:26656"
    ```

    - Change the value of **Prometheus** to `true`

    Make sure you keep the proper formatting when you make the changes above.

    - You will also need to make changes in the `heimdall-config.toml` file. Here you would be adding the RPC for your Ethereum full node. To open the `heimdall-config.toml`file you can run the command

        ```jsx
        vi ~/.heimdalld/config/heimdall-config.toml
        ```

        Here you need to add the URL for your Ethereum Full Node.

        ```jsx
        eth_rpc_url =<insert Infura or any full node RPC URL to Ethereum>
        ```

    ### **Configuring Bor changes on your Validator Node**

    You will need to add the `EnodeID` of your **Sentry Node** to the validator node config. 

    To get your EnodeID, Run this command on your Sentry Node to get the enodeID

    ```jsx
     bootnode -nodekey ~/.bor/data/bor/nodekey -writeaddress 
    ```

    - Now you will need to update the `static-nodes.json` file on your Validator node. To open the file run`vi ~/.bor/data/bor/static-nodes.json` **on your Validator node**. You should see an output like this:

    ```jsx
    [
    "<replace with enode://sentry_machine_enodeID@sentry_machine_ip:30303>"
    ]
    ```

    ### **Generate Heimdall private key**

    ***Note this is only needed for the Validator node, and not for the Sentry node.***

    This step is only required for your **Validator Node**. The Sentry node does not require generating `validatorkey`.

    The private key required as the input is your Ethereum wallet's Private key, where you have the Matic tokens. You will be able to locate it in the wallet settings, depending on the Ethereum wallet you use. You can 

    ```jsx
    heimdallcli generate-validatorkey <Your Ethereum wallet *private* key>
    ```

    This will create **`priv_validator_key.json`** in the same folder. Move this validator key file to heimdall config folder. 

    ```jsx
    mv ./priv_validator_key.json ~/.heimdalld/config
    ```

    ### **Generate Bor keystore file**

    ***Note this is only needed for the Validator node, and not for the Sentry node***

    To generate a Bor keystore for your validator, you can run the following command. The private key required as the input is your Ethereum wallet Private key. This would be the same private key that you used for generating your `validator-key`.

    ```jsx
    heimdallcli generate-keystore <Your Ethereum wallet private key>
    ```

    Once you run this command you will be requested for a passphrase. A passphrase can be considered as password too. This passphrase will be used to encrypt the keystore file.

    This will create a keystore file in UTC format. For example:

    ```jsx
    UTC--2020-02-10T10-11-48.027180000Z--6c468cf8c9879006e22ec4029696e005c2319c9d
    ```

    Do `ls` here and you will see the file name in the above format.

    Now you will have to move the keystore file to bor data directory.

    ```jsx
    mv ./UTC-<time>-<address> ~/.bor/keystore/
    ```

    **Add password.txt**

    Add the password that you entered in the password.txt file

    ```jsx
    vi ~/.bor/password.txt
    ```

    Add phrase you choose during generating key store file in `password.txt`

    Lastly, you will need to add Metadata information

    You can open the metadata file from here:

    ```jsx
    vi /etc/matic/metadata
    ```

    And then add your Address that is associated with your Private Key

    ```jsx
    VALIDATOR_ADDRESS=<Enter your Ethereum Address here>
    ```

    ### **Starting Services for Heimdall and Bor**

    - Run these commands on your Validator Node:

    **To Start Heimdall Service**

    ```js
    sudo service heimdalld start
    ```

    **To start Heimdall Rest-server**

    ```js
    sudo service heimdalld-rest-server start
    ```

    **To start Heimdall bridge**

    ```js
    sudo service heimdalld-bridge start
    ```

**You check logs for Heimdall and rest-server here**:

- Heimdall - `journalctl -u heimdalld.service -f`
- Heimdall Rest Server - `journalctl -u heimdalld-rest-server.service -f`
- Heimdall Bridge - `journalctl -u heimdalld-bridge.service -f`

Now you need to make sure that Heimdall is synced completely and only then Start Bor. If you start Bor without Heimdall syncing completely, you will run into issues frequently.

- To check if Heimdall is synced
    - On the remote machine/VM, run `curl localhost:26657/status`
    - In the output, `catching_up` value should be `false`

Now once Heimdall is synced, run 

```js
sudo service bor start
```

You can check Bor logs here:

- Bor - `journalctl -u bor.service -f`

Now, you have successfully setup your Sentry and Validator Node. Now all that you have to do is Stake by using the Matic Staking UI.

You can follow this step-by-step guide to understand how you can stake on Matic: [https://www.notion.so/maticnetwork/Staking-on-Matic-Mainnet-5ad50f58fad348fc89c6dcf3a729f260](https://www.notion.so/maticnetwork/Staking-on-Matic-Mainnet-5ad50f58fad348fc89c6dcf3a729f260)

## Logs

Logs are managed by `journalctl` linux tool. Here is a link for advanced usage: [https://www.digitalocean.com/community/tutorials/how-to-use-journalctl-to-view-and-manipulate-systemd-logs](https://www.digitalocean.com/community/tutorials/how-to-use-journalctl-to-view-and-manipulate-systemd-logs)

**Check Heimdall node logs**

```bash
journalctl -u heimdalld.service -f
```

**Check Heimdall rest server logs**

```bash
journalctl -u heimdalld-rest-server.service -f
```

**Check Bor rest server logs**

```bash
journalctl -u bor.service -f
```

### To check if Heimdall is synced

1. On the remote machine/VM, run `curl localhost:26657/status`
2. In the output, `catching_up` value should be `false`

### **Ports and firewall setup for Sentry**

Open following ports 22, 26656 and 30303 to world (0.0.0.0/0) on sentry node firewall.

You can use VPN to restrict access for 22 port as per your requirement and security guidelines.

### **Validator node firewall configuration**

On your validator node, open ports **22**, **26656** and **30303** and point it to your sentry node.

*Note: Don't open above ports in validator node to world/public (0.0.0.0/0). These ports should be open to sentry node only.*
