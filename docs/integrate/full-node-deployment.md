---
id: full-node-deployment
title: Full Node Deployment
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

# Full Node Deployment (Mumbai testnet)

We have created simple Ansible playbooks to setup a full node.

**Pre-requisite:**

- Minimum system requirements: https://docs.matic.network/docs/validate/technical-requirements/
- Install **Ansible with Python 3.x**: Ansible should be installed on local machine with **Python3.x**. The setup will not work if you have Python2.x.
    - To install ansible with Python 3.x you can use this command `pip3 install ansible`. This will install Python 3 dependencies as well as ansible.
- Check [https://github.com/maticnetwork/node-ansible#requirements](https://github.com/maticnetwork/node-ansible#requirements) for requirements
- You will also need to make sure that **Go is not installed on your VM / Machine**. Setting up your full node through ansible will run into issues if you have Go already installed, as ansible requires specific packages of Go to be installed.
- You will also need to make sure that your VM / Machine **does not have any previous setups for Matic Validator or Heimdall or Bor**. You will need to delete them as your setup will run into issues.

## Setup full node for Testnetv4/Mumbai testnet

- Ensure you have access to the remote machine or VM that the full node is being setup on. Refer [https://github.com/maticnetwork/node-ansible#setup](https://github.com/maticnetwork/node-ansible#setup) for more details.
- Clone the [`https://github.com/maticnetwork/node-ansible`](https://github.com/maticnetwork/node-ansible) repo
- `cd node-ansible`
- Edit the `inventory.yml` file and insert your IP(s) in the `sentry->hosts` section. Refer [https://github.com/maticnetwork/node-ansible#inventory](https://github.com/maticnetwork/node-ansible#inventory) for more details.
- Check if remote machine is reachable by running 

    ```js
    ansible sentry -m ping
    ```

- For a test run to confirm if the correct remote machine / VM is configured, run the following command:

    ```js
    ansible-playbook -l sentry playbooks/network.yml --extra-var="bor_branch=v0.2.5 heimdall_branch=v0.2.1-mumbai network_version=testnet-v4 node_type=sentry/sentry" --list-hosts
    ```

    It should output the remote machine IP(s) you have configured

    <img src={useBaseUrl("img/network/full-node-mumbai.png")} />

- Setup the full node with this command:

    ```js
    ansible-playbook -l sentry playbooks/network.yml --extra-var="bor_branch=v0.2.5 heimdall_branch=v0.2.1-mumbai network_version=testnet-v4 node_type=sentry/sentry"
    ```

- In case you run into any issues, delete and clean the whole setup using

    ```js
    ansible-playbook -l sentry playbooks/clean.yml
    ```

- Login to the remote machine
- Configure the following in `~/.heimdalld/config/config.toml`:
    ```js
    moniker=<enter unique identifier>
    ```
    
    ```js
    seeds="4cd60c1d76e44b05f7dfd8bab3f447b119e87042@54.147.31.250:26656"
    ```

Incase your Heimdall has stopped syncing you can add additional seeds to your `config.toml` file:

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

In case your Bor node has stopped syncing, you can add additional bootnodes to your `start.sh` file:

```js
--bootnodes enode://320553cda00dfc003f499a3ce9598029f364fbb3ed1222fdc20a94d97dcc4d8ba0cd0bfa996579dcc6d17a534741fb0a5da303a90579431259150de66b597251@54.147.31.250:30303,enode://f0f48a8781629f95ff02606081e6e43e4aebd503f3d07fc931fad7dd5ca1ba52bd849a6f6c3be0e375cf13c9ae04d859c4a9ae3546dc8ed4f10aa5dbb47d4998@34.226.134.117:30303
```

- In case you want to turn `trace` on for Bor, add the following flag to the `bor` start params in `~/node/bor/start.sh`:
    - `--gcmode 'archive'`

## Start nodes and services

- Run the full node with the following commands:
    - **To Start Heimdall**:

    ```js
    sudo service heimdalld start
    ```

    - **To start Heimdall Rest Server you can run the following command**:

    ```js
    sudo service heimdalld-rest-server start
    ```

    Once Heimdall is synced, run the following command: 

    ```js
    sudo service bor start
    ```

- Check logs:
    - **Check Heimdall logs:**
    ```js
    journalctl -u heimdalld.service -f
    ```

    - **Check Heimdall Rest Server logs**
    ```js
    journalctl -u heimdalld-rest-server.service -f
    ```

    - **Check Bor logs**
    ```js
    journalctl -u bor.service -f
    ```

- To check if Heimdall is synced
    - On the remote machine/VM, run `curl localhost:26657/status`
    - In the output, `catching_up` value should be `false`

- Ports / Firewall configuration
    - Open ports 22, 26656 and 30303 to world (0.0.0.0/0) on node firewall. All other ports should be closed.

</TabItem>
<TabItem value="mainnet">

# Full Node Deployment (Matic mainnet)
We have created simple Ansible playbooks to setup a full node.

Pre-requisite:

- Minimum system requirements: https://docs.matic.network/docs/validate/technical-requirements/
- Ansible should be installed on local machine with **Python3.x**. The setup will not work if you have Python2.x.
    - To install **ansible with Python 3.x** you can use this command `pip3 install ansible`. This will install Python 3 dependencies as well as ansible.
- Check [https://github.com/maticnetwork/node-ansible#requirements](https://github.com/maticnetwork/node-ansible#requirements) for requirements
- You will also need to make sure that **Go is not installed on your VM / Machine**. Setting up your full node through ansible will run into issues if you have Go already installed, as ansible requires specific packages of Go to be installed.
- You will also need to make sure that your VM / Machine does not have any **previous setups for Matic Validator or Heimdall or Bor**. You will need to delete them as your setup will run into issues.

## Setup full node for Matic mainnet

- Ensure you have access to the remote machine or VM that the full node is being setup on. Refer [https://github.com/maticnetwork/node-ansible#setup](https://github.com/maticnetwork/node-ansible#setup) for more details.
- Clone the [`https://github.com/maticnetwork/node-ansible`](https://github.com/maticnetwork/node-ansible) repo
- `cd node-ansible`
- Edit the `inventory.yml` file and insert your IP(s) in the `sentry->hosts` section. Refer [https://github.com/maticnetwork/node-ansible#inventory](https://github.com/maticnetwork/node-ansible#inventory) for more details.
- Check if remote machine is reachable by running `ansible sentry -m ping`
- For a test run to confirm if the correct remote machine / VM is configured, run the following command:

    ```js
    ansible-playbook -l sentry playbooks/network.yml --extra-var="bor_branch=v0.2.5 heimdall_branch=v0.2.1-mainnet  network_version=mainnet-v1 node_type=sentry/sentry" --list-hosts
    ```

    It should output the remote machine IP(s) you have configured

    <img src={useBaseUrl("img/network/full-node-mainnet.png")} />

- Setup the full node with this command:

    ```js
    ansible-playbook -l sentry playbooks/network.yml --extra-var="bor_branch=v0.2.5 heimdall_branch=v0.2.1-mainnet  network_version=mainnet-v1 node_type=sentry/sentry"
    ```

- In case you run into any issues, delete and clean the whole setup using

    ```js
    ansible-playbook -l sentry playbooks/clean.yml
    ```

- Login to the remote machine
- Configure the following in `~/.heimdalld/config/config.toml`:

    ```js
    moniker=<enter unique identifier>
    ```

    ```js
    seeds="f4f605d60b8ffaaf15240564e58a81103510631c@159.203.9.164:26656,4fb1bc820088764a564d4f66bba1963d47d82329@44.232.55.71:26656"
    ```

- Configure the following in `~/.heimdalld/config/heimdall-config.toml`:

    ```js
    eth_rpc_url =<insert Infura or any full node RPC URL to Ethereum>
    ```

- Add the following flag in `~/node/bor/start.sh` to the `bor` start params:

```bash
--bootnodes "enode://0cb82b395094ee4a2915e9714894627de9ed8498fb881cec6db7c65e8b9a5bd7f2f25cc84e71e89d0947e51c76e85d0847de848c7782b13c0255247a6758178c@44.232.55.71:30303,enode://88116f4295f5a31538ae409e4d44ad40d22e44ee9342869e7d68bdec55b0f83c1530355ce8b41fbec0928a7d75a5745d528450d30aec92066ab6ba1ee351d710@159.203.9.164:30303"
```

- In case you want to turn `trace` on for Bor, add the following flag to the `bor` start params in `~/node/bor/start.sh`:
    - `--gcmode 'archive'`

## Start nodes and services

- Run the full node with the following commands:
    - **To Start Heimdall**:

    ```js
    sudo service heimdalld start
    ```

    - **To start Heimdall Rest Server you can run the following command**:

    ```js
    sudo service heimdalld-rest-server start
    ```

    Once Heimdall is synced, run the following command: 

    ```js
    sudo service bor start
    ```
- Check logs:
    - **Check Heimdall logs:**
    ```js
    journalctl -u heimdalld.service -f
    ```

    - **Check Heimdall Rest Server logs**
    ```js
    journalctl -u heimdalld-rest-server.service -f
    ```

    - **Check Bor logs**
    ```js
    journalctl -u bor.service -f
    ```

- Ports / Firewall configuration
    - Open ports 22, 26656 and 30303 to world (0.0.0.0/0) on node firewall. All other ports should be closed.

</TabItem>
</Tabs>