---
id: validator-knowledge-base
title: Validator Knowledge Base
description: Knowledge Base
keywords:
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png 
---

1. **My Bor is showing logs like, "Failed to prepare mining for header". Is that an error?**

No. This is not an error. This is merely a log message indicating that your node isn't the one creating the blocks right now. When your node does create blocks, the message would be different.

2. **My Heimdall is showing "Failed Sanity Checks" after every few minutes. Should I be worried about it?**

`Addressbook` warnings can be ignored without an issue most of the time. If your node is connected to sufficient number of peers these kind of errors can be ignored. Your `pex` is just trying to re-establish it's connections with peers already present in `addrbook.json`

3. **My Bor is showing errors like, "Invalid Merkle root" and "Retrieved hash chain is Invalid". What should I do to resolve these errors?**

Typically, this issue occurs because of 2 reasons. One where your Bor has seemingly crashed and has started giving you these errors or it has lost out sync with Heimdall. To resolve this there are 2 ways to do this

1. Restart your Bor service and check if the issue is resolved. Usually restarting your Bor service should resolve the issue
2. Check if your Heimdall is running correctly.  If your Heimdall has stopped, please restart your Heimdall service and let your Bor starty syncing and it should resolve the issue.

Even after this if the issue is not resolved, then please contact @Delroy Bosco on Discord immediately for assistance

**4. My Node is not signing any checkpoints. What can I do to resolve this?**

First of all, your node not signing checkpoints could be for a multiple reasons. 

1. First check if your Heimdall service is running correctly on your Sentry and Validator node. If the service has stopped abruptly or see any errors, try restarting your Heimdall service and see it comes back to normal. If the issue still persists, then please contact the **Support Team** immediately.
2. Second best bet is to check your Bor service and see if it has halted abruptly or there are any errors on the logs. Try restarting your Bor service to resolve this issue. If the issue still persists, then please contact the **Support Team** immediately.
3. Check if your Heimdall Bridge is running or not or if it has any errors in the logs. Try restarting the service and see if the issue resolves. If the issue still persists, then please contact the **Support Team** immediately.

If none of this is the issue, then please contact the **Support Team** immediately for assistance.

**5. I want to setup my validator node on Matic mainnet. How do I do that?**

You can follow the instructions from the below 2 links:

**Ansible**: [https://docs.matic.network/docs/validate/mainnet/validator-guide/](https://docs.matic.network/docs/validate/mainnet/validator-guide/)

**Binaries**: [https://docs.matic.network/docs/validate/mainnet/validator-guide-binaries](https://docs.matic.network/docs/validate/mainnet/validator-guide-binaries)

**6. I want to setup a Full node (non-validator node) on Matic. How do I do that?**

You can follow the instructions from the below links:

**Ansible**:  [https://docs.matic.network/docs/integrate/full-node-deployment](https://docs.matic.network/docs/integrate/full-node-deployment)

**Binaries**: [https://docs.matic.network/docs/integrate/full-node-binaries/](https://docs.matic.network/docs/integrate/full-node-binaries/)

**7. Why do I have to keep ETH in my signer account?**

ETH is required on your signer account because for submitting checkpoints to Ethereum, all transactions require ETH to be used as Gas. Hence ETH is required on your Signer Account.

**8. I'm trying to setup my node using Ansbile and I'm getting a "Host not found" error**

This could be because your `inventory.yml` file may have some formatting issues. Correct them with proper indentation and then try again

**9. For a Matic Validator, do I need to setup a Sentry and Validator node or can I just run the Validator node only?**

For the Matic Validator, our ecosystem and architecture demands that you run a Sentry + Validator setup. This is to ensure that your Validator node is not exposed to the public and only your Sentry node is.

Your Sentry node gleans information / blocks from the network and then relays them to the validator for validation. 

**10. My Sentry Bor is still struggling with 'Looking for peers'. Peers are not succeeding**

This could happen when Bor has lost connectivity with other peers. Generally checking the `[start.sh](http://start.sh)` file (~/node/bor/start.sh) should show you your bootnodes. Check if the bootnodes are entered correctly without any formatting issues. If you have made any changes to the file, then please restart your Bor service and check if the issue is resolved.

If none of this works, then please contact the **Support Team** immediately for assistance.

**11. My Bor states this "Failed to prepare header mining at block 0" What do I in this case?**

This happens because of a formatting issue in your `static-nodes.json` file (~/.bor/data/bor/static-nodes.json). Ensure there are no space and no additional characters like < / > . If you have made any changes to the file then please restart your Bor service and you should see logs printing.

**12. I've been getting the error invalid command: "30303" or invalid command: `/home/ubuntu/.bor/password.txt` any reason why?**

This is because you haven’t created the bor keystore and the password file for it. Ensure that you follow all the steps from the guide setup.

**13. My Heimdall and Bor logs are fine and even my bridge is running correctly but my node still isn't signing any checkpoints. What can I do?**

This could happen if you have missed adding the `ETH_RPC_URL` in the `heimdall-config.toml` file. Please check if you have added it. If not, ensure that you add the correct URL and then restart your Heimdall service. 

**14. I'm getting such logs on my Bor, "Impossible reorg, please file an issue" what should I do?**

Let these logs be. Your node should ideally not suffer because of this and the issue should be automatically resolved.

If your node is suffering because of this, please contact the support team immdiately.

**15. What is the minimum disk space required to run a Validator node?**

The minimum disk space on your Sentry and Validator node is 100 Gb which should be expandable.

16. **My bridge shows these in the logs, ""Error while fetching mainchain receipt error=" Should I be worried?**

No. These are normal logs. Do not do anything to your bridge. Let it run as is

**17. My validator bor is stuck on block for a long time. How can I resolve this?**

This basically means that your Bor on your Sentry is also stuck because your Validator gets information from your Sentry. Please check your Bor logs on your sentry and see if everything is okay. Probably restart the Bor service one on your Bor and then simultaneously restart your Bor service on your Validator as well. Things should work out fine.

1**8. I'm trying to upgrade my Bor and I'm getting this error, "build [github.com/ethereum/go-ethereum/cmd/geth:](http://github.com/ethereum/go-ethereum/cmd/geth:) cannot load hash/maphash: malformed module path "hash/maphash": missing dot in first path element"**

This is because your Go Version is slightly outdated. The recommended Go version is 1.15.x and above

**19. Can I start by Bor before Heimdall is completely synced?**

No you cannot. If you start your Bor without Heimdall being completely synced, you face issues on your Bor.

**20. My Validator Heimdall is unable to connect to Peers. What should I do?**

This typically means that your Sentry Heimdall is running into issues. Check your Sentry Heimdall and see if the service is running fine. If the service is stopped then restarting the service on your Sentry should resolve this issue. Similarly, after fixing your sentry, a restart of your Heimdall service should also resolve the problem.

**21. Can I run multiple sentries for a Validator?**

Yes you can.

**22. Can I run multiple Validators using the same signer key?**

No. You cannot. Matic's architecture currently does not allow Validators running multiple validator nodes using the same signer key. 

**23. Is there a way to run a light node with bor? or only full node is available?**

There is no light node option as of now. If you want you can run a full node from here: [https://docs.matic.network/docs/integrate/full-node-deployment/](https://docs.matic.network/docs/integrate/full-node-deployment/)

**24. What is the uptime percentage calculation on the Staking UI**

It is calculated as per the last 200 checkpoints submitted to the ones you have actually signed.

**25. When I start bor I get this error, "Address is required as argument". How do I resolve this?**

This means that you have not added your Signer address in the Metadata. You can add it using this path `/etc/matic/metadata` . Once the address is added you can then restart the bor service and everything should be fine.

**26. What ports are to be kept open on the Sentry Node?**

You will need to make sure that you open ports 22, 26656 and 30303 to world (0.0.0.0/0) on sentry node firewall

**27. What is the command to check the latest block height on Heimdall**

You can run this command `curl localhost:26657/status`

**28. What is the command to check the latest block height on Bor**

```jsx
curl  http://<your ip>:8545 -X POST -H "Content-Type: application/json" -d '
  {"jsonrpc":"2.0", "id":1, "method":"bor_getSigners", "params":["0x98b3ea"]}
'
```

**29. My Heimdall is giving me this error,** 

```jsx
E[2021-03-01|13:19:12.252] Connection failed @ sendRoutinemodule=p2ppeer=3d1f71344c2d3262eac724c22f8266d9b3e41925@3.217.49.94:26656 conn=MConn{3.217.49.94:26656} err="pong timeout"
```

Usually restarting the Heimdall service should resolve the problem for you.

**30. My Bor is giving me this issue, "ERROR[03-01|13:22:55.320] Block receipts missing, can't freezenumber=9397329 hash="2c38b0...cb41e7"**

This is generally not an error and should resolve on its own.

**31. Standard upgrade commands for your Heimdall**

```jsx
cd ~/heimdall
git pull
git checkout <branch tag>
make install
sudo service heimdalld restart
```

**32. Standard upgrade commands for your Bor**

```jsx
cd ~/bor
git pull
git checkout <branch tag>
sudo service bor stop
make bor-all
sudo service bor start
```