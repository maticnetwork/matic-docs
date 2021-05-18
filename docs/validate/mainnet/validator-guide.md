---
id: validator-guide
title: Matic Mainnet Node - Sentry & Validator
sidebar_label: Node Setup Ansible
description: Setup your validator node on Matic Mainnet
keywords:
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png 
---
import useBaseUrl from '@docusaurus/useBaseUrl';


We have created a simple Ansible playbooks to setup a full node on Matic Mainnet

### Minimum System Requirements

- Minimum system requirements are as follows:

    16 GiB of memory

    4 core CPU (t2 xLarge)

    Minimum 150GB disk (make sure it is extendable)

It is essential that you have **2 different Machines / VM** for your Sentry and Validator Node. Having a single Machine to run both, your Sentry and Validator will cause issues.

You can obviously opt for higher setup infra to future-proof your Node. However, anything below the minimum requirements, you will run into issues sooner than later. The minimum requirements set above is for both, Sentry and Validator nodes.

### Pre-Requisite

- Ansible should be installed on local machine with **Python3.x**. The setup will not work if you have Python2.x.
    - To install **ansible with Python 3.x** you can use this command `pip3 install ansible`. This will install Python 3 dependencies as well as ansible.
- Check [https://github.com/maticnetwork/node-ansible#requirements](https://github.com/maticnetwork/node-ansible#requirements) for requirements
- You will also need to make sure that **Go is not installed on your VM / Machine**. Setting up your full node through ansible will run into issues if you have Go already installed, as ansible requires specific packages of Go to be installed.
- You will also need to make sure that your **VM / Machine does not have any previous setups for Matic Validator or Heimdall or Bor**. You will need to delete them as your setup will run in to issues.

## Setup Sentry Node for Matic mainnet

You have to make sure that you setup your Sentry Node first than your Validator node as your Validator Node will only be connected to the Sentry Node. So it is essential that you setup your Sentry Node first

- Ensure you have access to the remote machine or VM that the full node is being setup on. Refer [https://github.com/maticnetwork/node-ansible#setup](https://github.com/maticnetwork/node-ansible#setup) for more details.
- Clone the [`https://github.com/maticnetwork/node-ansible`](https://github.com/maticnetwork/node-ansible) repo on your local machine.
- `cd node-ansible`
- Edit the `inventory.yml` file and insert your IP(s) in the `sentry->hosts` section. Refer [https://github.com/maticnetwork/node-ansible#inventory](https://github.com/maticnetwork/node-ansible#inventory) for more details.

<img src={useBaseUrl("img/mainnet/inventory.png")} />

- Check if remote machine is reachable by running `ansible sentry -m ping` You should be getting such an output

<img src={useBaseUrl("img/mainnet/ping.png")} />

- For a test run to confirm if the correct remote machine / VM is configured, run the following command:

    ```jsx
    ansible-playbook -l sentry playbooks/network.yml --extra-var="bor_branch=v0.2.4 heimdall_branch=v0.2.1-mainnet  network_version=mainnet-v1 node_type=sentry/sentry" --list-hosts
    ```

It should output the remote machine IP(s) you have configured.

<img src={useBaseUrl("img/mainnet/list-hosts.png")} />

- Setup the full node with this command:

    ```jsx
    ansible-playbook -l sentry playbooks/network.yml --extra-var="bor_branch=v0.2.4 heimdall_branch=v0.2.1-mainnet  network_version=mainnet-v1 node_type=sentry/sentry"
    ```

Once you run this command, it will first run a series a checks to make sure your system is connected and all things are in place to start setup and install. You should see something like this

<img src={useBaseUrl("img/mainnet/setup-process.png")} />

Once the setup is complete, you will see a message of completion on the terminal. 

- In case you run into any issues, delete and clean the whole setup using

    ```jsx
    ansible-playbook -l sentry playbooks/clean.yml
    ```

## Validator Node Setup for Matic Mainnet

Now once your Sentry node is completely setup you can then start setting up your Validator node. You will have to use ansible again to deploy all the comp

- Ensure you have access to the remote machine or VM that the full node is being setup on. Refer [https://github.com/maticnetwork/node-ansible#setup](https://github.com/maticnetwork/node-ansible#setup) for more details.
- Clone the [`https://github.com/maticnetwork/node-ansible`](https://github.com/maticnetwork/node-ansible) repo on your local machine.
- `cd node-ansible`
- Edit the `inventory.yml` file and insert your IP(s) in the `validator->hosts` section. Refer [https://github.com/maticnetwork/node-ansible#inventory](https://github.com/maticnetwork/node-ansible#inventory) for more details.

<img src={useBaseUrl("img/mainnet/inventory.png")} />

Check if remote machine is reachable by running `ansible validator -m ping`. You should be getting such an output

<img src={useBaseUrl("img/mainnet/ping.png")} />

For a test run to confirm if the correct remote machine / VM is configured, run the following command:

```jsx
ansible-playbook -l validator playbooks/network.yml --extra-var="bor_branch=v0.2.4 heimdall_branch=v0.2.1-mainnet network_version=mainnet-v1 node_type=sentry/validator" --list-hosts
```

It should output the remote machine IP(s) you have configured

<img src={useBaseUrl("img/mainnet/list-hosts.png")} />

- Setup the full node with this command:

```jsx
ansible-playbook -l validator playbooks/network.yml --extra-var="bor_branch=v0.2.4 heimdall_branch=v0.2.1-mainnet  network_version=mainnet-v1 node_type=sentry/validator"
```

Once you run this command, it will first run a series a checks to make sure your system is connected and all things are in place to start setup and install. You should see something like this

- Setup the full node with this command:

    ```jsx
    ansible-playbook -l validator playbooks/network.yml --extra-var="bor_branch=v0.2.4 heimdall_branch=v0.2.1-mainnet  network_version=mainnet-v1 node_type=sentry/validator"
    ```

Once you run this command, it will first run a series a checks to make sure your system is connected and all things are in place to start setup and install. You should see something like this

<img src={useBaseUrl("img/mainnet/setup-process.png")} />

Once the setup is complete, you will see a message of completion on the terminal.

In case you run into any issues, delete and clean the whole setup using

```jsx
ansible-playbook -l sentry playbooks/clean.yml
```

### **Configuring your Sentry Node**

- Login to the remote machine / VM
- You will need to add a few details in the `config.toml` file. To open the `config.toml` file run the following command `vi ~/.heimdalld/config/config.toml`

    Now in the config file you will have to change `Moniker` and add `seeds` information

    ```jsx
    moniker=<enter unique identifier> For example, moniker=my-sentry-node
    ```

    ```jsx
    seeds="f4f605d60b8ffaaf15240564e58a81103510631c@159.203.9.164:26656,4fb1bc820088764a564d4f66bba1963d47d82329@44.232.55.71:26656"
    ```

    - Check for the parameter `private_peer_ids`. You will need to add your **Validator NodeID** here. To get your **Validator NodeID**, you will need to run this command on your Validator node instance: `heimdalld tendermint show-node-id`. After you add your NodeID it should look something like this `private_peer_ids = "2170800c8a57c5e09b59992902f39ba350f1c0ff"`
    - Change the value of **Pex** to `true`
    - Change the value of **Prometheus** to `true`
    - Set the `max_open_connections` value to `100`

    Make sure you keep the proper formatting when you make the changes above.

- Next you need to make changes in the `start.sh` file for Bor. Add the following flag in `~vi ~/node/bor/start.sh` to the `bor` start params:

```jsx
--bootnodes "enode://0cb82b395094ee4a2915e9714894627de9ed8498fb881cec6db7c65e8b9a5bd7f2f25cc84e71e89d0947e51c76e85d0847de848c7782b13c0255247a6758178c@44.232.55.71:30303,enode://88116f4295f5a31538ae409e4d44ad40d22e44ee9342869e7d68bdec55b0f83c1530355ce8b41fbec0928a7d75a5745d528450d30aec92066ab6ba1ee351d710@159.203.9.164:30303"
```

You will need to add the `EnodeID` of your **Validator Node** to the sentry node config. 

**To get your EnodeID, Run this command on your Validator Node to get the enodeID**

```jsx
 bootnode -nodekey ~/.bor/data/bor/nodekey -writeaddress 
```

- Now you will need to update the `static-nodes.json` file on your Validator node. To open the file run`vi ~/.bor/data/bor/static-nodes.json` **on your Sentry node**. You should see an output like this:

```jsx
[
"<replace with enode://validator_machine_enodeID@validator_machine_ip:30303>"
]
```

Before you start Heimdall and other services on your Sentry node, do note that Heimdall usually takes a day to sync to the latest block. We do have an option where you can import a snapshot of the Blockchain state of Heimdall and Bor and using that your Heimdall and Bor won't need to sync from scratch and thus will only take a couple of hours to sync to the latest block

For more information, you can read our forum post here: https://forum.matic.network/t/snapshots-for-blockchain-state-17th-november/553

**Starting Services for Heimdall and Bor**

- Run the full node with the following commands:
    - **To Start Heimdall Service**

    ```jsx
    sudo service heimdalld start
    ```

    - **To start Heimdall Rest-server**

    ```jsx
    sudo service heimdalld-rest-server start
    ```

    You check logs for Heimdall and rest-server here:

    - **Heimdall Logs**

    ```jsx
    journalctl -u heimdalld.service -f
    ```

    - **Heimdall Rest Server**

    ```jsx
    journalctl -u heimdalld-rest-server.service -f
    ```

    - To check if Heimdall is synced
        - On the remote machine/VM, run `curl localhost:26657/status`
        - In the output, `catching_up` value should be `false`

Now you need to make sure that Heimdall is synced completely and only then Start Bor. If you start Bor without Heimdall syncing completely, you will run into issues frequently.

Now once Heimdall is synced, run 

**Start Bor**

```jsx
sudo service bor start
```

You can check Bor logs here:

**Bor**

```jsx
journalctl -u bor.service -f
```

- **Firewall Configuration.**

You will need to make sure that you open ports 22, 26656 and 30303 to world (0.0.0.0/0) on sentry node firewall.

### Configuring your Validator Node

- Login to the remote machine / VM
- You will need to add a few details in the `config.toml` file. To open the `config.toml` file run the following command

    ```jsx
    vi ~/.heimdalld/config/config.toml
    ```

    Now in the config file you will have to change `Moniker`  information

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

You will also need to make changes in the `heimdall-config.toml` file. Here you would be adding the RPC for your Ethereum full node. To open the `heimdall-config.toml`file you can run the command

```jsx
vi ~/.heimdalld/config/heimdall-config.toml
```

Here you need to add the URL for your Ethereum Full Node.

```jsx
eth_rpc_url =<insert Infura or any full node RPC URL to Ethereum>
```

### Configuring Bor changes on your Validator Node

You will need to add the `EnodeID` of your **Sentry Node** to the validator node config. 

To get your EnodeID, Run this command on your Sentry Node to get the enodeID

```jsx
    bootnode -nodekey ~/.bor/data/bor/nodekey -writeaddress 
```

Now you will need to update the `static-nodes.json` file on your Validator node. To open the file run`vi ~/.bor/data/bor/static-nodes.json` **on your Validator node**. You should see an output like this:

```jsx
[
"<replace with enode://sentry_machine_enodeID@sentry_machine_ip:30303>"
]
```

### Owner & Signer Keys

On Matic you do have the option to set your Owner Key and Signer Key. Your signer address is the one that stays on the Node, this will be considered your Signer Key and this address would be used to Signing Checkpoints, etc. You need to make sure that you have at least 1 ETH on the Signer address. Whereas Owner key will have the Matic Tokens. This address will be used when completing the staking transactions. On Matic, it is recommended that you keep your Owner and Signer keys different for security reasons.

### **Generate Heimdall private key**

*Note this is only needed for the Validator Bor node, and not for the Sentry Bor node.*

This step is only required for your **Validator Node**. The Sentry node does not require generating `validatorkey`.

The private key required as the input is your Ethereum wallet's Private key. Remember that you need to have different keys for your Owner and Signer keys. You Signer key is the one that needs to be added to your Validator node. Your owner key is ideally the one which holds your Matic tokens.

```jsx
heimdallcli generate-validatorkey <Your Ethereum wallet *private* key>
```

This will create **`priv_validator_key.json`** in the same folder. Move this validator key file to heimdall config folder. 

```jsx
mv ./priv_validator_key.json ~/.heimdalld/config
```

### **Generate Bor keystore file**

*Note this is only needed for the Validator Bor node, and not for the Sentry Bor node*

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

- Run the full node with the following commands:

**To Start Heimdall Service**

```jsx
sudo service heimdalld start
```

**To start Heimdall Rest-server**

```jsx
sudo service heimdalld-rest-server start
```

**To start Heimdall bridge**

```jsx
sudo service heimdalld-bridge start
```

You check logs for Heimdall and rest-server here:

- Heimdall - `journalctl -u heimdalld.service -f`
- Heimdall Rest Server - `journalctl -u heimdalld-rest-server.service -f`
- Heimdall Bridge - `journalctl -u heimdalld-bridge.service -f`

Now you need to make sure that Heimdall is synced completely and only then Start Bor. If you start Bor without Heimdall syncing completely, you will run into issues frequently.

- To check if Heimdall is synced
            - On the remote machine/VM, run `curl localhost:26657/status`
            - In the output, `catching_up` value should be `false`

Now once Heimdall is synced, run 

```jsx
sudo service bor start
```

You can check Bor logs here:

    - Bor - `journalctl -u bor.service -f`

Now, you have successfully setup your Sentry and Validator Node. Now all that you have to do is Stake by using the Matic Staking UI. However, you need to ensure that you perform a health check of your Node before you proceed to staking. You can ask for a health check on our Discord Server: https://discord.gg/4E2XMVC

You can follow this step-by-step guide to understand how you can stake on Matic: https://docs.matic.network/docs/validate/mainnet/stake-on-matic
