# Harbor Testnet with Two Chains (Ethereum/Polygon) and One Off-Chain Actor (liquidationBot)

This is to demosntrate configuring, building and running a sample Testnet with two chains (ethereum and polygon) and one locally built actor (liquidation bot). Clone this repo and follow along.

## Copy API Key

On your home page, you should be able to copy your API key which is found on the top right of the page.

## Configure your API Key

Run the command:

```bash
harbor configure
```

This will ask you to add in your API Key, so paste it here and hit enter.

## Build your Testnet Image

After you have configured your API Key, `cd` into root folder of this repository and run the command:

```bash
harbor build
```

You should see this:

```bash
checking ~/.harbor for your apiKey
Validating configuration...
preparing your chains...
preparing your ethereum deployment
preparing health check scripts for your chains...
```

When it's done, you should see this:

```bash
Success! You may now run harbor run
```

## Start Testnet

To run the Testnet, we must first check for the Testnet Image ID. We can do this by running the command:

```bash
harbor list testnet-images
```

This shows us our Testnet images:

```bash
+--------------------------------------+--------------------------------+
|                  ID                  |              NAME              |
+--------------------------------------+--------------------------------+
| c744567d-ea6e-4665-9b46-bbdc9b447256 | testnet-image-1                |
| 36f6589d-35c9-4b54-a8ef-536b0408bb9c | testnet-image-2                |
+--------------------------------------+--------------------------------+
```

Find your Testnet Image ID, think of a name to call your Testnet, then run the following command:

```bash
harbor run <testnet_image_id> --name <unique_testnet_name>
```

You should see this:

```bash
Checking ~/.harbor for your apiKey
Validating testnet name...
Configuring chain...
Configuring off-chain actor liquidation-bot-1
```

At the end of the logs, you should see your chain and off-chain actors with endpoints:

```bash
These are your running processes and their ports
ethereum
3.91.12.13:4000

polygon
3.91.12.13:4001

liquidationBot
3.91.12.13:3000
```

You can now interact with them using the endpoints.
