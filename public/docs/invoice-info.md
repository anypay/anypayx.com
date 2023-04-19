# Invoice Info

See whether an invoice was paid and get payment details

-

**GET** https://api.anypayx.com**/invoices/{uid}**

## Check Invoice Status

In the case that your system is unable to receive webhook or websocket notification of payment and you would like to manually check for payment status, us this endpoint.

-

## Parameters

**Path**

| Code | Type | Description |
| --- | ----------- | ----- |
| `uid` | string | UID of invoice |

-

## Responses

| Code | Meaning |
| --- | ----------- |
| **200** | Invoice Not Yet Paid |

```json
{
  "invoice": {
    "amount": 10.71,
    "currency": "EUR",
    "uid": "LeO7itGT4",
    "status": "unpaid",  
    "uri": "pay:?r=https://api.anypayinc.com/r/LeO7itGT4",
    "redirect_url": "https://anypay.city/#/payments/LeO7itGT4"
  },
  "payment_options": [{
    "uri": "bitcoin:?r=https://api.anypayinc.com/r/fBW1cQw8h",
    "currency": "BTC",
    "currency_name": "Bitcoin BTC",
    "currency_logo_url": "https://anypayinc.s3.amazonaws.com/icons/btc.png"
    "amount": "0.000218"
  }, {
    "uri": "pay:?r=https://api.anypayinc.com/r/fBW1cQw8h",
    "currency": "BSV",
    "currency_name": "Bitcoin SV",
    "currency_logo_url": "https://anypayinc.s3.amazonaws.com/icons/bsv.png",
    "amount": "0.06333426"
  }]
}
```


| Code | Meaning |
| --- | ----------- |
| **404** | No invoice found with that UID |

```json
{
  "error": "Invoice LeO7itGT3 Not Found"
}
```