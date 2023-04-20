# Node.js SDK

Requesting Payment with Node.js

-

In this example we request payment in either DASH or BCH. 

Each payment request requires two different outputs:

1. One for five dollars
2. One for one dollar

```
import { app } from 'anypay'

anypay = app(process.env.ANYPAY_API_SECRET)

let bill = 15
let tip = 3

let dashOption = {
  currency: 'DASH',
  to: [{
    currency: 'USD',
    amount: bill,
    address: 'XhEh7yEzbJtViSrmJEiJ73CVp1C37j8eW7'
  }, {
    currency: 'USD',
    amount: tip,
    address: 'XnEw2KjfLVAy1hSXMFWLCcod5X7rLM581p'
  }]
}

let bitcoincashOption = {
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
}

let request = await anypay.request([
  dashOption, bitcoincashOption
], {
  webhook: 'https://paypow.com/anypay/webhooks/payments',
  redirect: 'https://paypow.com/anypay/webhooks/payments'
})

console.log(request)
```