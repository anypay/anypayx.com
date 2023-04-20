# Create Invoice

Generating payment requests for all coins accepted

-
**POST** https://api.anypayx.com**/invoices**

###Create Invoice

The most important operative action to take in Anypay as a business, request payment from customers.

### Parameters

**Header**

| Code | Type | Description |
| --- | ----------- | ----- |
| `Authentication` | string | Basic auth with access token uid as username

**Body**

| Body | Type | Description |
| --- | ----------- | --- |
| `amount` | number | Amount in terms of denomination ie USD, AUS, TBH |
| `business_id` | string | For accounts with multiple businesses. The value is chosen by you |
| `location_id` | string | For businesses with multiple physical stores or locations. The value is chosen by you. |
| `register_id` | string | For stores with multiple cash registers. |
| `redirect_url` | string | redirect web app users to this URL after payment | 
| `webhook_url` | string | URL to receive webhook POST notification on payment |
| `external_id` | string | external identifier to coordinate with your system |

**Responses**

| Code      | Meaning |
| ---        |    ---   |   
| **200**      | Invoice Created |

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
Invalid request parameters such as a negative amount or other client issue
{
  "error": "amount must be greater than zero"
}
```

| Code      | Meaning |
| ---        |    ---   |   
| 400      | Invalid request parameters such as a negative amount or other client issue |

```json
{
 "error": "amount must be greater than zero"
}
```