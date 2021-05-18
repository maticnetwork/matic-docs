---
id: full-node-binaries
title: Full Node Binaries
description: Build your next blockchain app on Matic.
keywords:
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

<Tabs
  defaultValue="mainnet"
  values={[
    { label: 'Matic-Mainnet', value: 'mainnet', },
    { label: 'Mumbai-Testnet', value: 'mumbai', },
  ]
}>

<TabItem value="mumbai">

## Pre-requisites

### Minimum System Requirements

https://docs.matic.network/docs/validate/technical-requirements/

### Install build essentials

```bash
sudo apt-get install build-essential
```

### **Install GO**

```bash
curl https://gist.githubusercontent.com/jdkanani/e18e14910652ad829fad994e4b89f0b9/raw/aecdd859f568848083b4db6cc1ee2bc1b8090ed3/go-install.sh
bash install_go.sh
```

> Note: Go version 1.11+ is recommended

### RabbitMq

RabbitMQ is a message-queueing software also known as a message broker or queue manager. Simply said; it is software where queues are defined, to which applications connect in order to transfer a message or messages.

A helper service called `bridge` which is embedded into heimdall codebase requires `rabbit-mq` to queue transactions to multiple networks. Installing it should be pretty straightforward. 

**Checkout the download instructions here: [https://www.rabbitmq.com/download.html](https://www.rabbitmq.com/download.html)**

```bash
rabbitmq-server
```

## Install Binaries

### Heimdall

Next, install the latest version of Heimdall and services. Make sure you git checkout the correct [released version](https://github.com/maticnetwork/heimdall/releases)

```bash
cd ~/
git clone https://github.com/maticnetwork/heimdall
cd heimdall

# Checkout to a proper version
# For eg: git checkout v0.2.1-mumbai
git checkout <TAG OR BRANCH>
make install
```

That will install the `heimdalld` and `heimdallcli` binaries. Verify that everything is OK:

```bash
heimdalld version --long
```

### Bor

Next, install the latest version of Bor. Make sure you git checkout the correct [released version](https://github.com/maticnetwork/bor/releases)

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

Available networks: `mainnet-v1` and `testnet-v4` 

Node types: `sentry` and `validator` 

```bash
cp -rf launch/<network-name>/sentry/<node-type> ~/node

# To setup sentry node for mumbai (testnet-v4) testnet
# cp -rf launch/testnet-v4/sentry/sentry ~/node
```

### Setup network directories

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

Generate services files and copy them into system directory

```bash
cd ~/node
bash service.sh
sudo cp *.service /etc/systemd/system/
```

## Setup config files

**For Mumbai Testnet**

- Configure the following in `~/.heimdalld/config/config.toml`:
    - `moniker=<enter unique identifier>`

```js
 seeds="4cd60c1d76e44b05f7dfd8bab3f447b119e87042@54.147.31.250:26656,b18bbe1f3d8576f4b73d9b18976e71c65e839149@34.226.134.117:26656"
```
- Configure the following in `~/.heimdalld/config/heimdall-config.toml`:

    ```js
    eth_rpc_url =<insert Infura or any full node RPC URL to Goerli>
    ```

- Add the following flag in `vi ~/node/bor/start.sh` to the `bor` start params:

```bash
--bootnodes "enode://320553cda00dfc003f499a3ce9598029f364fbb3ed1222fdc20a94d97dcc4d8ba0cd0bfa996579dcc6d17a534741fb0a5da303a90579431259150de66b597251@54.147.31.250:30303"
```

## Start services

Run the full Heimdall node with the following commands:

```bash
sudo service heimdalld start
sudo service heimdalld-rest-server start
```

Once Heimdall is synced, start Bor:

```bash
sudo service bor start
```

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

### **Ports and firewall setup**

Open following ports 22, 26656 and 30303 to world (0.0.0.0/0) on sentry node firewall.

You can use VPN to restrict access for 22 port as per your requirement and security guidelines.


</TabItem>

<TabItem value="mainnet">

# Matic Full Node Setup Using Binaries

## Pre-requisites

### Minimum System Requirements

- Minimum system requirements are as follows:

    16 GiB of memory

    4 core CPU (t2 xLarge)

    Minimum 60GB disk (make sure it is extendable)

It is essential that you have **2 different Machines / VM** for your Sentry and Validator Node. Having a single Machine to run both, your Sentry and Validator nodes will run into issues

You can obviously opt for higher setup infra to future-proof your Node. However, anything below the minimum requirements, you will run into issues sooner than later. The minimum requirements set above is for both Sentry and Validator nodes.

### Install build essentials

***This is required for both your Sentry and Validator node***

```bash
sudo apt-get install build-essential
```

### Install GO

***This is required for both your Sentry and Validator node***

```bash
curl https://gist.githubusercontent.com/jdkanani/e18e14910652ad829fad994e4b89f0b9/raw/aecdd859f568848083b4db6cc1ee2bc1b8090ed3/go-install.sh
bash install_go.sh
```

> Note: Go version 1.11+ is recommended

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

```bash
cp -rf launch/<network-name>/sentry/<node-type> ~/node

# To setup sentry node for matic mainnet
# cp -rf launch/mainnet-v1/sentry/sentry ~/node
```

### Setup network directories

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

Generate services files and copy them into system directory

```bash
cd ~/node
bash service.sh
sudo cp *.service /etc/systemd/system/
```

## Setup config files

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

To enable Archive mode you can add the following flags in the `[start.sh](http://start.sh)` file

```jsx
--gcmode 'archive' \
--ws --wsport 8546 --wsaddr 0.0.0.0 --wsorigins '*' \
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




</TabItem>

</Tabs>