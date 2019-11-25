Step-by-step guide to run multiple services

### Run Heimdall

Starting Heimdall is fairly easy, the below command will start heimdall using the genesis file in `~/.heimdalld/config/genesis.json`

```js

$ heimdalld start 

```

This will output the logs saying blocks are being created onto the terminal, if you want to pipe logs into a file use the below command

```js

$ make start-heimdall

```

### Run rest-server

The rest server can be used by external services like explorer, faucets etc to connect to heimdall chain for fetching data and sending transactions.

```js

$ make run-server

```

This will output the logs onto the terminal, if you want to pipe logs into a file use the below command.

```js

$ make start-server

```

### Run Bridge

Bridge is a helper package that sends transactions to heimdall on behalf of validators. All interactions with other chains happens via this bridge. 

```js

$ make run-bridge

```

This will output the logs onto the terminal, if you want to pipe logs into a file use the below command.

```js

$ make start-bridge

```

> Note: Bridge won't run without `rabbitmq` and `rest-server` so ensure they are running before trying to run bridge

