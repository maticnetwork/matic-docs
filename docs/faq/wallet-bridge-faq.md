---
id: wallet-bridge-faq
title: Wallet and Bridge FAQ 
description: Build your next blockchain app on Matic.
keywords:
  - docs
  - matic
  - wallet
image: https://matic.network/banners/matic-network-16x9.png 
---

## Where can I use the Matic Web Wallet?

[https://wallet.matic.network/](https://wallet.matic.network/)

## Which wallets are currently supported?

- Metamask
- Coinbase Wallet
- Trust Wallet

We will soon add more wallets.

## How is Plasma different from PoS?

Plasma comes with a additional security where your funds are locked in a challenge period , post 7 day period user can withdraw tokens. [https://docs.matic.network/docs/develop/ethereum-matic/getting-started](https://docs.matic.network/docs/develop/ethereum-matic/getting-started)

## What tokens are only available on Plasma?

MATIC tokens

## How do I deposit to Matic Wallet and also withdraw?

These blogs and videos are a perfect guide to start with depositing and withdrawing: [https://docs.matic.network/docs/develop/wallets/matic-web-wallet/web-wallet-v2-guide/#depositing-funds-from-ethereum-to-matic](https://docs.matic.network/docs/develop/wallets/matic-web-wallet/web-wallet-v2-guide/#depositing-funds-from-ethereum-to-matic)[https://www.youtube.com/playlist?list=PLslsfan1R_z0Epvnqsj29V1LBAh99dzu9](https://www.youtube.com/playlist?list=PLslsfan1R_z0Epvnqsj29V1LBAh99dzu9)

## How to switch to Polygon mainnet in Metamask?

Assuming that you have already added the network and custom RPC for Matic mainnet in your Metamask wallet here is how you can switch:

1. Open your Metamask wallet and click on the network dropdown to expand as shown in figure:

[https://lh5.googleusercontent.com/0Od3W3sy7nxQDY06EN22SjqdMuwzJBnF4I5zVPTSLkOZ2ycjLTri048ttVnzFTmya6IHKzlm3cYH9Zv-zN5cWmcwdK2e4Uq1OVfUPof24-5imaRju1uz1skGWDjSbBy4yrgY1Aoo](https://lh5.googleusercontent.com/0Od3W3sy7nxQDY06EN22SjqdMuwzJBnF4I5zVPTSLkOZ2ycjLTri048ttVnzFTmya6IHKzlm3cYH9Zv-zN5cWmcwdK2e4Uq1OVfUPof24-5imaRju1uz1skGWDjSbBy4yrgY1Aoo)

2. Once the window expands you can select Matic Network to switch.

[https://lh6.googleusercontent.com/wEW3bZ8F_MowOEJ1qyZT7vjBbb4H6pzU9Xnr9kEzJKmp8TXxqOox-ONmebCQSg4Ebvpogc0lscG9yi11yY_lHbcy_Xz0yVpA_mkimzAEUYI15NWSsM8OA9KqHxTZ2gVhVV-gDndz](https://lh6.googleusercontent.com/wEW3bZ8F_MowOEJ1qyZT7vjBbb4H6pzU9Xnr9kEzJKmp8TXxqOox-ONmebCQSg4Ebvpogc0lscG9yi11yY_lHbcy_Xz0yVpA_mkimzAEUYI15NWSsM8OA9KqHxTZ2gVhVV-gDndz)

You have now switched to Polygon mainnet.

You can refer to this link if you are looking for instructions on how to add the network to Metamask: [https://docs.matic.network/docs/develop/metamask/config-polygon-on-wallets#configure-polygon-on-metamask](https://docs.matic.network/docs/develop/metamask/config-polygon-on-wallets#configure-polygon-on-metamask)

## How to choose Polygon mainnet in Walletlink?

Please follow the guide provided [here](https://docs.matic.network/docs/develop/metamask/config-polygon-on-wallets#configure-polygon-on-walletlink)


## I have deposited WETH but I don’t see it on Metamask. What do I do?

You need to manually add the custom token address of WETH to Metamask.

Open Metamask and scroll down to click on add tokens.

[https://lh6.googleusercontent.com/KXBiSkXtLJaP6f1uEeYOOU6Suj7II6g3Nw5EXLklIWujd7_Q56Bn5yfsRpZD5ouB87-qzUHNVmcGWche1G5A2zif0VTZ3rH9GTeuJR2fzi6YvUDCDsGEPWTukjNJbid7klNJwug8](https://lh6.googleusercontent.com/KXBiSkXtLJaP6f1uEeYOOU6Suj7II6g3Nw5EXLklIWujd7_Q56Bn5yfsRpZD5ouB87-qzUHNVmcGWche1G5A2zif0VTZ3rH9GTeuJR2fzi6YvUDCDsGEPWTukjNJbid7klNJwug8)

Then, select Custom Token to add the relevant contract address, symbol and the decimal precision. Contract addresses (PoS-WETH in this case) can be found on this link: [https://docs.matic.network/docs/develop/network-details/mapped-tokens/](https://docs.matic.network/docs/develop/network-details/mapped-tokens/)

You will need to add the child token address to view balances on Matic mainnet.

Decimal of precision is 18 for WETH (generally, for most tokens decimal of precision is 18).

Once you fill in all the fields, you can click on next and your token will be added.

[https://lh3.googleusercontent.com/xlHZO9N35Y7qRHVHoYdoXLHrGpDRCkd6ZM7bBD3mwi24lbwjJBW3AVWCRYMTRKem-vsj-3h0C1Hs1HpWHWlcAfGlpjZCXoEWYETYT3MXGCukqGhmDc2uOtr3LlOoPSJFJt_RfQ__](https://lh3.googleusercontent.com/xlHZO9N35Y7qRHVHoYdoXLHrGpDRCkd6ZM7bBD3mwi24lbwjJBW3AVWCRYMTRKem-vsj-3h0C1Hs1HpWHWlcAfGlpjZCXoEWYETYT3MXGCukqGhmDc2uOtr3LlOoPSJFJt_RfQ__)

## Can I send my tokens from Matic to any other wallet/exchange ?

You cannot directly send tokens from Matic UI to Exchange/wallets. You have to first withdraw from Matic to Ethereum and then send it to your exchange address (unless your exchange/wallet explicitly supports the network).

## I made a mistake of sending funds to an exchange/wallet directly. Can you help?

Unfortunately, we can not assist in such cases. Please don't send funds directly to exchanges that support only Ethereum, you have to first withdraw from Matic to Ethereum and then send it to your exchange address.

## My transaction is pending for too long, what can i do?

Transactions on the blockchain might be dropped due to a low gas price being set when submitting the transaction. They may also be dropped when there is a sudden surge in the gas price due to congestion on Ethereum. Another possibility is that you might have canceled the transaction from your wallet or replaced the transaction. In all these cases, the wallet web will show you a transaction in progress message and this will cause you to you wait longer.

If your transaction is stuck for more than an hour, a "Try Again" button will be shown. This is good, it means you can prompt the network to retry the transaction for you. What you can do next is click on the "Try Again" button to retry the same transaction. If your deposit transaction was stuck, your deposit process will be re-initiated and if your withdrawal transaction was stuck, you will be able to continue your withdrawal from where you successfully completed the last step.

In case you face problems in going ahead with the "Try Again" button and you are using the Metamask wallet, you might need to check if there are lot of queued up transactions clogging your metamask's activity section. In this case, it may be helpful to re-install the metamask wallet and then proceed with your transaction. Alternatively, you may try to initiate the transaction from a separate browser.

Watching the video below can give more clarity on how to use the "Try Again" feature

[https://youtu.be/0b4yjR_naEQ](https://youtu.be/0b4yjR_naEQ)

## What are the list of Supported Exchanges on Polygon?

Below is a list of centralised exchanges that currently support Polygon and also the tokens that these exchanges support.

Bitmax- USDC, EASY, MATIC

MXC - MATIC, QUICK, PlotX, Dfyn

Okcoin -  ETH, USDT, LINK, MKR, USDC, DAI, USDK, COMP, YFI, SNX, YFII, and UNI. ( Tokens can only be moved from Okcoin to Polygon chain. Transferring tokens from Polygon to Okcoin is not currently supported)

Okex - BAL, BAT, CEL, COMP, CRV, DAI, ETH, GHST, GUSD, LINK, MKR, PAX, SNX, SUSHI, TUSD, UNI, USDC-ERC20, USDT-ERC20, USDK, wBTC, YFI, YFII, ZRX ( Tokens can only be moved from Okex to Polygon chain. Transferring tokens from Polygon to Okex is not currently supported)

Bitforex - MATIC

Sending Tokens to any other exchange that is not mentioned explicitly in the above list can lead to a loss of funds. If you want to withdraw funds to any exchange that does not support Polygon, you will have to first withdraw the token to Ethereum and then send it to the exchange using your Ethereum wallet. This video demonstrates how to withdraw funds from Matic to Ethereum - [https://www.youtube.com/watch?v=DgpHY95qrbQ&list=PLslsfan1R_z0Epvnqsj29V1LBAh99dzu9&index=5](https://www.youtube.com/watch?v=DgpHY95qrbQ&list=PLslsfan1R_z0Epvnqsj29V1LBAh99dzu9&index=5)

Alternatively, you can follow this guide [here](/docs/develop/wallets/matic-web-wallet/web-wallet-v2-guide/).

## I am not able to login, what do I do?

[https://docs.matic.network/docs/validate/delegator-faq/#my-metamask-is-stuck-at-confirming-after-login-what-do-i-do-or-nothing-happens-when-i-try-to-login](https://docs.matic.network/docs/validate/delegator-faq/#my-metamask-is-stuck-at-confirming-after-login-what-do-i-do-or-nothing-happens-when-i-try-to-login)

## Does Matic support hardware wallets?

Yes, hardware wallets are supported.

## What can I do with my Matic wallet?
- Send funds to any account on Matic.
- Deposit funds from Ethereum to Matic (using the bridge).
- Withdraw funds back to Ethereum from Matic (also using the bridge).

## My token is not visible in the list. Who should I contact?

Reach out to the Polygon team on Discord or Telegram and get your token listed. Before that, ensure your token is mapped. If it is not mapped, please raise a request at [https://mapper.matic.today/](https://mapper.matic.today/)

## What are some best practices to follow?
- When you want to send funds from Matic to Ethereum, use the withdraw functionality. Do not use the send functionality. This will lead to loss of funds.
- Do not deposit to the Matic mainnet if you wish to participate in staking only.
- Do not change the gas limit from Metamask.

## What do I do if the deposit is confirmed but the balance is not getting updated?

It takes 7-8 minutes for the deposit transaction to complete. Please wait for some time and click on "refresh balance".

## What should I do if the checkpoint is not happening?

Checkpoints sometimes take more that 45 minutes to 1 hour based on network congestion on Ethereum, we suggest waiting for a while before raising a ticket.

## I am trying to withdraw, but the challenge period is taking more than 7 days, how long should I wait?

It can take a bit more than 7 days sometimes. Kindly wait or reach out to the Polygon team if its taking too long at [](https://desk.zoho.in/portal/maticsupport/en/home)[https://support.polygon.technology/support/home](https://support.polygon.technology/support/home)

## Is it possible to cancel a withdraw transaction?

No, you have to complete the next steps. If the current gas price is too high, then please wait and try later when the price goes down.

## Why is there a 7 day challenge period?

Plasma bridge comes with a plasma security challenge period of 7 days in which anyone can challenge the transaction that has happened on Matic.

## Why is the MATIC token is not supported on PoS?

MATIC is the native token of Matic network and it has a contract address - 0x0000000000000000000000000000000000001010 on the Matic chain. It is also used to pay gas. Mapping the MATIC token on the PoS bridge will lead to MATIC having an additional contract address on the MATIC chain. This will collide with the existing contract address as this new token address can not be used to pay for gas and will have to remain as a normal ERC20 token on the matic chain. Hence, to avoid this confusion, it was decided to retain MATIC only on Plasma.

## How do I map tokens?

Please raise a mapping request at [https://mapper.matic.today/](https://mapper.matic.today/)

## What do I do if the transaction is taking too long or if the gas price is too high?

Transaction time and gas price varies based on network congestion. If a high gas price is paid, then transaction gets confirmed faster.

## Can I change the gas limit or the gas price?

Gas limit is estimated and set by the application according to certain requirements of the function being called in the contract. This should not be edited. Only gas price can be changed in order to increase or decrease the transaction fees.

## What should I do if the transaction was cancelled but the web wallet shows transaction is completed?

Please reach out to our support team.

## Where do I raise a support ticket?

[https://support.polygon.technology/support/home](https://support.polygon.technology/support/home)