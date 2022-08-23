#Wallet Overview

Wallets communicate with Pay: Protocol servers to coordinate perfect payments with scalable efficiency.

---

##Detecting `pay:` Codes

`pay:` Protocol codes may be differentiated from other forms of QR codes or links by its signature parameter regardless of the protocol prefix.

###Always look for URIs that include ?r=https

Whenever you encounter a code like the one above, consider it is likely a payment request.

```
pay:?r=https://api.anypayx.com/r/LeO7itGT4
```

> By making your app respond to pay: as a URI prefix it can handly multi-currency payment requests without bothering your users.
> 
Anypay currently supports six coins at our pay: protocol server (BTC, BCH, BSV, DASH, LTC, DOGE)


One you find a Pay Protocol URI download the contents by specifying your desired coin in the `x-currency` header, including an `Accept` header telling the server to return a payment request.

---

##Downloading the Payment Request Template

fetch\_payment\_request.sh

```
# One single URL serves payment requests for multiple coins
# Always include these two headers, switching BCH for you coin.
curl -H 'Accept: application/payment-request' \
     -H 'x-currency: BCH' \
     https://api.anypayx.com/r/LeO7itGT4
```

The Payment Request Template will include one or more outputs, which are comprised of an amount and an address.

```
{
    "network": "main",
    "currency": "BCH",
    "requiredFeeRate": 1,
    "outputs": [
        {
            "amount": 17400,
            "address": "qztlw4ft8euq9wvzk27hh6lxtac2z4clay0w8v79zm"
        },
        {
            "amount": 3000,
            "address": "qrggz7d0sgv4v3d0jl7lj4mv2vdnv0vqjsq48qtvt6"
        }
    ],
    "time": "2020-08-12T21:21:03.034Z",
    "expires": "2020-08-12T21:36:03.034Z",
    "memo": "Payment request for Anypay invoice LeO7itGT4",
    "paymentUrl": "https://api.anypayx.com/payments/json/BCH/LeO7itGT4",
    "paymentId": "LeO7itGT4"
}
```
---
##Submitting Your Transaction

Each Payment Request Template includes a paymentUrl property to which your app will submit the signed transaction built with the required outputs.

**submit\_payment\_request**

```
# One single URL serves payment requests for multiple coins
# Always include these two headers, switching BCH for you coin.
curl -X POST -H 'Content-Type: application/json' \
     -d '{"currency": "BCH", "transactions":["0100000001cf787c9d2fdd2fefc6e7088793832c8e3878177d283f469f24d27148c68b1640020000006a473044022019aa76373fd2780333705196ef36cf073bae6f7ccdf6bbaa99353fc7679bf18002204de998f9d751bd6d782026248f9840c845419c392640fe158dc7788a27c75b854121023e9d690dd349aa4fe9b972db21995f55c68744555950d4f714d3f9fd7b74a26bffffffff03f8430000000000001976a91497f7552b3e7802b982b2bd7bebe65f70a1571fe988acb80b0000000000001976a914d08179af82195645af97fdf9576c531b363d809488ac8ab71000000000001976a914b50c540608e9e54e83afb6c9666c33568d2d407188ac00000000"]}' \
     https://api.anypayx.com/payments/json/BCH/LeO7itGT4
     # One single URL serves payment requests for multiple coins
```

Anypay's server will first verify the correctness of your transaction and broadcast it to the validation network (miners). Finally the server returns a successful response and your wallet app may broadcast the transaction to your network of validators.

```
{
    "success": true,
    "transactions": ["0100000001cf787c9d2fdd2fefc6e7088793832c8e3878177d283f469f24d27148c68b1640020000006a473044022019aa76373fd2780333705196ef36cf073bae6f7ccdf6bbaa99353fc7679bf18002204de998f9d751bd6d782026248f9840c845419c392640fe158dc7788a27c75b854121023e9d690dd349aa4fe9b972db21995f55c68744555950d4f714d3f9fd7b74a26bffffffff03f8430000000000001976a91497f7552b3e7802b982b2bd7bebe65f70a1571fe988acb80b0000000000001976a914d08179af82195645af97fdf9576c531b363d809488ac8ab71000000000001976a914b50c540608e9e54e83afb6c9666c33568d2d407188ac00000000"]
}
```
---
##Handling Error Responses

Sometimes your transaction may be rejected by your peer for one or more reasons. Anypay's servers may reject the transaction if it does not contain the correct amounts, or has an insufficient fee, or if the coins are already spent.

The server may also reject your transaction for one or more app-specific reasons such as an invoice that was already paid or manually cancelled or the exchange rate was expired.

**Any HTTP Status Code Other Than 2xx Is An Error**

**400 Bad Request**
```
{
    "success": false,
    "error": "Insufficient Amount to Output 0"
}
```

**500 Internal Server Error**
```
{
    "success": false,
    "error": "No Connection To The Validation Network"
}
```

***IN THE CASE OF AN ERROR DO NOT BROADCAST THE TRANSACTION***

Your app may try again to pay the invoice, but do not broadcast the transaction. **Only transactions sent directly to the Anypay server will be noticed and processed by our system.**