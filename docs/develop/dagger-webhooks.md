---
id: dagger-webhooks
title: Dagger Webhooks
sidebar_label: Dagger Webhooks
description: Build your next blockchain app on Matic.
keywords:
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Dagger provides your applications with realtime data feed from blockchain. It's a simple client that you use to connect to dagger endpoint, maintained by us & get data feed on subscribed topics using industry standard MQTT protocol. 

But we were receiving lots of request for incorporating webhooks support in dagger, and we did it. Now you can request data feed from dagger while specifying HTTP endpoint where we will send all events for your subscribed topic. Then you can do a lot of interesting things with that data feed. Read more about webhooks [here](https://zapier.com/blog/what-are-webhooks/).

Now we're going to walk you through a simple NodeJS application which is running on your machine & we'll create webhook subscriptions for different topics. For that we're also going to use [ngork](https://ngrok.com/), for tunneling purpose. 

## example

### obtain access token

As dagger webhook uses JWT based authentication mechanism, we need to first obtain a JWT token, which needs to be passed along with all of subsequent requests.

Sending a HTTP POST request [here](https://webhooks.dagger.matic.network/api/token), generates a JWT token for you. _Please keep it secret._

<Tabs
  defaultValue="curl"
  values={[
    { label: 'cURL', value: 'curl', },
    { label: 'Python', value: 'python', },
  ]
}>
<TabItem value="curl">

```bash
curl -H 'Content-Type: application/json' -X POST https://webhooks.dagger.matic.network/api/token
```

</TabItem>
<TabItem value="python">

```python
import requests
requests.post('https://webhooks.dagger.matic.network/api/token').json()
```

</TabItem>
</Tabs>