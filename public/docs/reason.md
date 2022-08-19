#Reason

---

We invented the Anypay Pay: Protocol as a simple way for wallets to streamline paying with digital currencies in retail businesses at point of sale.

Supported wallets include HandCash, Dash Wallet, Badger Wallet, Bitcoin.com Wallet, SimplyCash Wallet, Edge Wallet, ElectrumSV, and others. We aim to collaborate with all wallets whose users value spending at retail businesses to maximize the delighfulness of their payment experience.

#BIP70 Wallets

Wallets already supporting the BIP70 payment protocol have the least to do to support the pay: protocol.

Since we extend BIP70 you already have nearly everything you need.

###Bitcoin.com Wallet BCH

Bitcoin.com wallet needs only to treat URIs with prefix `pay:` as if they were URIs with prefix `bitcoincash:`. From there every detail of BIP70 protocol remains the same. No change to the protobuf binary format is necessary. No change to the request and response headers, nor changes to the digest and signatures.

Your wallet will need to implement the following changes:

1. When SCANNING A QR CODE, treat `pay:?r=https://anypayx.com/gg/IzNviXZEcj` as if it read `bitcoincash:?r=https://anypayx.com/ggIzNviXZEcj`

2. When OPENING A LINK with a payment URI, treat `pay:?r=https://anypayx.com/gg/IzNviXZEcj` as if it read `bitcoincash:?r=https://anypayx.com/ggIzNviXZEcj`

From there every step of the BIP70 protocol is exactly the same as the Anypay Pay: Protocol

###Bitcoin.com Wallet BTC

When the user has the BTC wallet open rather than BCH, simply replace `pay:` with `bitcoin:` and treat the scanned URI exactly like a normal bitcoin BIP70 payment.

##JSON Payment Protocol Wallets for BCH, DASH, BSV, BTC, etc

Wallets like that support the JSON Payment Protocol also only have a small number of modifications to make to give your users the power of the pay: protocol.

###Edge Wallet

Edge wallet needs to take one additional step to tell us which currency they would like to pay with. Unlike BIP70-compatible wallets, JSON Payment Protocol does not use headers to indicate which currency the wallet would like to use.

Your wallet will need to implement the following changes:

1. When SCANNING A QR CODE, treat `pay:?r=https://anypayx.com/gg/IzNviXZEcj` as if it read `bitcoincash:?r=https://anypayx.com/gg/IzNviXZecj`

2. When REQUESTING PAYMENT DETAILS include a header indicating which currency you would like to use. Keep all the same headers as the JSON Payment Protocol and include one additional header `x-currency: BCH` or `x-currency: DASH or x-currency: BTC` etc.

3. When OPENING A LINK with a payment URI, treat `pay:?r=https://anypayx.com/gg/IzNviXZEcj` by prompting the user to choose which coin they want to use. Then treat the URI as if it began with the coin's native URI prefix such as `bitcoincash:?r=https://anypayx.com/ggIzNviXZEcj`