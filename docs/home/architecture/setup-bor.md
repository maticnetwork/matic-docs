---
id: setup-bor
title: Setup Bor
description: Build your next blockchain app on Matic.
keywords:
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png 
---
### Setup Bor

Use the `master` or `develop` branch, which contains the latest stable release.

    $ mkdir -p $GOPATH/src/github.com/maticnetwork
    $ cd $GOPATH/src/github.com/maticnetwork
    $ git clone https://github.com/maticnetwork/bor
    $ cd bor
    $ make bor-all

Now, you have bor installed on your local system and the binary is available in the path `./build/bin/bor`

**Connecting to console (optional)**

This is an optional step. You need not connect to a console. You can do so only if you are interested in other details.

Just like Geth you can connect to bor console to execute various types of queries! From your `dataDir` run the following command.

**Genesis contracts**

    $ cd ~/matic/tesnets
    $ git submodule init
    $ git submodule update

    $ cd ~/matic/tesnets/genesis-contracts
    $ npm install

    $ git submodule init
    $ git submodule update
    $ cd ~/matic/tesnets/genesis-contracts/matic-contracts
    $ npm install
    $ node scripts/process-templates.js --bor-chain-id 15001
    $ npm run truffle:compile

Once templates are processed, we need to set validators in `tesnets/genesis-contracts/validators.js` file. This file should look like this:

    const validators = [
      {
        address: "0x6c468CF8c9879006E22EC4029696E005C2319C9D",
        stake: 10, // without 10^18
        balance: 1000 // without 10^18
      }
    ]

Generate Bor validator set using `validators.js` file:

    $ cd ~/matic/testnets/genesis-contracts
    $ node generate-borvalidatorset.js --bor-chain-id 15001 --heimdall-chain-id heimdall-P5rXwg

This command will generate `genesis-contracts/contracts/BorValidatorSet.sol`.

Generate genesis.json, once `BorValidatorSet.sol` is generated: 

    $ cd ~/matic/testnets/genesis-contracts
    $ node generate-genesis.js --bor-chain-id 15001 --heimdall-chain-id heimdall-P5rXwg

This will generate `genesis-contracts/genesis.json`

**Start bor**

Once genesis file is generated at `~/matic/tesnets/genesis-contracts/genesis.json`

Prepare bor node:

    $ cd ~/matic/testnets/bor-devnet
    $ bash setup.sh

Start bor using following command:

    $ cd ~/matic/testnets/bor-devnet
    $ bash start.sh 1

You will Bor running at 8545.

If you want to clean Bor and start again:

    $ bash clean.sh
    $ bash setup.sh
    $ bash start.sh 1

### To test Bor and Heimdall

To test both Bor and Heimdall, you need run Bor and Heimdall, Heimdall's rest-server and Bridge all in parallel.

### [Optional] Run heimdall rest-server behind nginx proxy for front-end

Follow this [https://kirillplatonov.com/2017/11/12/simple_reverse_proxy_on_mac_with_nginx/](https://kirillplatonov.com/2017/11/12/simple_reverse_proxy_on_mac_with_nginx/) instructions to run nginx on local machine (mac osx).

Add following content into `/usr/local/etc/nginx/nginx.conf` and restart nginx:

    worker_processes  1;
    
    events {
        worker_connections 1024;
    }
    
    http {
        server {
            listen 80;
            server_name localhost;
    
            location / {
              add_header 'Access-Control-Allow-Origin' * always;
              add_header 'Access-Control-Allow-Credentials' 'true';
              add_header 'Access-Control-Allow-Headers' 'Authorization,Accept,Origin,DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Range';
              add_header 'Access-Control-Allow-Methods' 'GET,POST,OPTIONS,PUT,DELETE,PATCH';
    
              if ($request_method = 'OPTIONS') {
                add_header 'Access-Control-Allow-Origin' * always;
                add_header 'Access-Control-Allow-Credentials' 'true';
                add_header 'Access-Control-Allow-Headers' 'Authorization,Accept,Origin,DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Content-Range,Range';
                add_header 'Access-Control-Allow-Methods' 'GET,POST,OPTIONS,PUT,DELETE,PATCH';
                add_header 'Access-Control-Max-Age' 1728000;
                add_header 'Content-Type' 'text/plain charset=UTF-8';
                add_header 'Content-Length' 0;
                return 204;
              }
    
              proxy_redirect off;
              proxy_set_header host $host;
              proxy_set_header X-real-ip $remote_addr;
              proxy_set_header X-forward-for $proxy_add_x_forwarded_for;
              proxy_pass http://127.0.0.1:1317;
            }
        }
    }

Reload nginx using new config changes:

    sudo nginx -s reload