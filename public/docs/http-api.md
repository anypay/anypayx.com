# HTTP API

Request Payment With HTTP

-

## Requesting Payment Directly From Anypay Payments API

request_payment.sh

```
curl --location --request POST 'https://api.anypayx.com/r' \
-u YOUR_PLATFORM_KEY: \
--data-raw '{
  "template": [{
    "currency": "DASH",
    "to": [{
      "currency": "USD",
      "amount": 150,
      "address": "XhEh7yEzbJtViSrmJEiJ73CVp1C37j8eW7"
    }, {
      "currency": "USD",
      "amount": 10,
      "address": "XnEw2KjfLVAy1hSXMFWLCcod5X7rLM581p"
    }]
  }],
  "options": {
    "webhook": "https://paypow.com/anypay/webhooks/payments",
    "redirect": "https://paypow.com/anypay/payments"
  }
}'
```

## Payment For Multiple Coin Options

```
const ANYPAY_API_SECRET = 'YOUR_API_KEY_HERE'

const http = require('superagent')

const requestJSON = {
  template: [{
    currency: 'DASH',
    to: [{
      currency: 'USD',
      amount: 150,
      address: 'XhEh7yEzbJtViSrmJEiJ73CVp1C37j8eW7'
    }, {
      currency: 'USD',
      amount: 10,
      address: 'XnEw2KjfLVAy1hSXMFWLCcod5X7rLM581p'
    }]
  }, {
    currency: 'BCH',
    to: [{
      currency: 'USD',
      amount: bill,
      address: 'bitcoincash:qztlw4ft8euq9wvzk27hh6lxtac2z4clay0w8v79zm'
    }, {
      currency: 'USD',
      amount: tip,
      address: 'bitcoincash:qp3cjuygakccjvq4k3ge3jjfmcalhz8a2sq2e0yum3'
    }]
  }],
  options: {
    webhook: 'https://paypow.com/anypay/webhooks/payments',
    redirect: 'https://paypow.com/anypay//payments'
  }
  
}

let response = await http
  .post('https://api.anypayx.com/r')
  .send(requestJSON)
  .auth(ANYPAY_API_KEY, '')  
```
