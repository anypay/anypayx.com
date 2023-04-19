![](https://bico.media/ea8205469186c12f6b23866d3ef50ab84f6f6b82dab43075e0229ab32ca6f5bc)

# Anypay Wallet Bot Documentation

The Anypay Wallet Bot is a cryptocurrency wallet management tool that allows users to manage their cryptocurrency wallets and make payments directly from the Anypay Wallet Bot interface.

 - Self-custody
 - Manages private keys 
 - Enables apps to securely send payments
 - Headless (runs as daemon process in your data center) 

## Getting Started

The application runs as a long-running process which should be managed by k8s, docker, or your system service manager such as systemd or similar. It may be run in a node.js environment or as an isolated docker container. The single process requires no additional services such as database servers to be run.

To get started with the Anypay Wallet Bot, follow these steps:

### Docker:
```
docker pull anypay/wallet-bot
```

### Without Docker:

1. Clone the Anypay Wallet Bot repository from https://github.com/anypay/wallet-bot
2. Install the required dependencies by running the following command:
   ```
   npm install
   ```
3. Start the wallet bot server by running the following command:
   ```
   npm start
   ```
4. Follow the prompts to create an Anypay account and link your cryptocurrency wallets.



## Setting Up Wallet Keys

Rather than managing your own private key generation and backup, allow wallet bot to generate keys offline and automatically output a wallet-bot.json config file for you. Simply save a copy of this file to your organizations' vaults to restore funds in case of a machine failure.



```
docker run anypay/wallet-bot new_wallet > wallet-bot.json
```

You may view with `cat wallet-bot.json` that one private key has been created for each of the supported coins.

Alternatively you may provide your own wallet keys using the Wallet Import Format (WIF) inside wallet-bot.json.

## Running the Service

To run with wallet-bot.json config file:


```
docker run \

  -v /path/to/wallet-bot.json:/etc/wallet-bot/wallet-bot.json \
  
  anypay/wallet-bot start
```

To run with environment variables:

```
docker run --env-file=/path/to/.env anypay/wallet-bot start
```

You may also combine some variables from one method with others from the other method.

## Configuration

Wallets and system settings may be configured by a combination of json config files, environment variables, and command line flags. All variables may be provided by either of the config variations.

## Environment Variables

*required

| Variable name                         | Description                   |
|---------------------------------------|-------------------------------|
| ANYPAY_API\_TOKEN *                     | https://anypayx.com/dashboard/developer/wallet-bot |
| SLACK_WEBHOOK\_URL							| Will receive Slack-formatted messages on certain events |
| WEBHOOK_URL									| Will receive messages on certain events |
| LOG_LEVEL									| [error, debug, info, warn] defaults to info |
| BSV_PRIVATE\_KEY                       | Private signing key to BSV wallet      |
| BTC_PRIVATE\_KEY      						| Private signing key to BTC wallet            |
| BCH_PRIVATE\_KEY      						| Private signing key to BCH wallet           |
| DASH_PRIVATE\_KEY      					| Private signing key to DASH wallet           |
| DOGE_PRIVATE\_KEY      					| Private signing key to DOGE wallet           |
| LTC_PRIVATE\_KEY      						| Private signing key to LTC wallet           |
| ZEC_PRIVATE\_KEY      						| Private signing key to ZEC wallet           |  

  


## Commands

The Anypay Wallet Bot supports the following commands:

- `/balance`: Check the balance of a specific cryptocurrency wallet.
- `/send`: Send cryptocurrency to a specific address.
- `/receive`: Receive cryptocurrency by generating a unique wallet address.
- `/history`: View the transaction history of a specific cryptocurrency wallet.


## Security

The Anypay Wallet Bot is designed to be secure and protect your cryptocurrency. Here are some security features of the bot:

- Offline storage of cryptocurrency private keys to prevent them from being hacked.
- Two-factor authentication (2FA) to confirm certain actions, such as sending cryptocurrency or changing account settings.
- Multi-signature technology to protect against unauthorized access to your cryptocurrency.

## Support

If you have any questions or issues with the Anypay Wallet Bot, please visit the Anypay support page at https://anypayx.com/faq or contact support@anypayx.com or message on Telegram https://t.me/anypayx .

## License

The Anypay Wallet Bot is open source software released under the MIT License. See the LICENSE file for more details.