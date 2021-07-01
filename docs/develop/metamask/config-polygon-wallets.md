---
id: config-polygon-on-wallets
title: Configure Polygon on Wallets
description: Build your next blockchain app on Matic.
keywords:
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png 
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Configure Polygon on Metamask

In order to view the flow of funds in your accounts, on the Polygon Network, you will need to configure Polygon `{testnet, mainnet}` URL on Metamask.

<Tabs
  defaultValue="mainnet"
  values={[
    { label: 'Polygon-Mainnet', value: 'mainnet', },
    { label: 'Mumbai-Testnet', value: 'mumbai', },
  ]
}>

<TabItem value="mumbai">
To add Poylgon's Mumbai-Testnet, click on the Network selection dropdown and then click on Custom RPC.

<img src={useBaseUrl("img/metamask/select-network.png")} />

It will open up a form with 2 tabs on the top, Settings and Info. In the Settings tab you can add the URL `https://rpc-mumbai.maticvigil.com/`.

<img src={useBaseUrl("img/metamask/metamask-settings-mumbai.png")} />

Once you’ve added the URL in the New Network field, click on Save. You will be directly switched to Polygon’s Mumbai-Testnet now in the network dropdown list. You can now close the dialog.
</TabItem>

<TabItem value="mainnet">
To add Polygon’s Mainnet, click on the Network selection dropdown and then click on Custom RPC. 

<img src={useBaseUrl("img/metamask/select-network.png")} />

It will open up a form with 2 tabs on the top, Settings and Info. In the Settings tab you can add `Matic Mainnet` in the Network Name field, URL `https://rpc-mainnet.maticvigil.com/` in the New RPC URL field, `137` in Chain ID field, `MATIC` in Currency Symbol field and `https://polygonscan.com/` in Block Explorer URL field.

<img src={useBaseUrl("img/metamask/metamask-settings-mainnet.png")} />

Once you’ve added the information click on Save. You will be directly switched to Polygon’s Mainnet now in the network dropdown list. You can now close the dialog.
</TabItem>
</Tabs>


## Configure Polygon on Walletlink

<Tabs
  defaultValue="mainnet"
  values={[
    { label: 'Polygon-Mainnet', value: 'mainnet', },
    { label: 'Mumbai-Testnet', value: 'mumbai', },
  ]
}>

<TabItem value="mainnet">

1. From the Walletlink home page, select the Settings button 

<img src={useBaseUrl("img/walletlink/config-polygon-walletlink-1.jpg")} width="30%" height="30%" />

2. From the setting page, under the Advanced section, select the Active network Option. 

<img src={useBaseUrl("img/walletlink/config-polygon-walletlink-2.jpg")} width="30%" height="30%"/>

3. From the Active Networks page, under the ETH section, select the Polygon Mainnet.

<img src={useBaseUrl("img/walletlink/config-polygon-walletlink-3.jpg")} width="30%" height="30%"/>

</TabItem>

<TabItem value="mumbai">

1. From the Walletlink home page, select the Settings button 

<img src={useBaseUrl("img/walletlink/config-polygon-walletlink-1.jpg")} width="30%" height="30%" />

2. From the setting page, under the Advanced section, select the Active network Option. 

<img src={useBaseUrl("img/walletlink/config-polygon-walletlink-2.jpg")} width="30%" height="30%"/>

3. From the Active Networks page, under the ETH section, select the Polygon Mumbai.

<img src={useBaseUrl("img/walletlink/config-polygon-walletlink-4.jpg")} width="30%" height="30%"/>
</TabItem>


</Tabs>