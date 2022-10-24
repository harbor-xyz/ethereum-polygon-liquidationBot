# Harbor Testnet with Two Chains (Ethereum/Polygon) and One Off-Chain Actor (liquidationBot)

This is to demosntrate configuring, building and running a sample Testnet with two chains (ethereum and polygon) and one locally built actor (liquidation bot). Clone this repo and follow along.

## Copy credentials

### User Key
On your home page, you should be able to copy your User Key which is found on the top right of the page.

### Project Key
In your projects page, each project has a Project Key that you can copy.

## Configure your credentials

Run the command:

```bash
harbor configure keys
```

This will ask you to add in your credentials, which includes your User Key and Project Key. Find them in the app and paste them here.

## Start Testnet

To run the Testnet, execute the following command in the same directory as this project:

```bash
harbor apply
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
