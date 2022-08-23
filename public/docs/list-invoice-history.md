#List Invoice History

**GET** https://api.anypayx.com**/invoices**

###List Invoice History

-

###Parameters

**Query**

| Code | Type | Description |
| --- | ----------- | ----- |
| `orderDirection` | string | asc or desc |
| `orderBy` | string | column to order by |
| `offset` | string | number of items to skip |
| `limit` | string | number of items to return |

**Header**

| Code | Type | Description |
| --- | ----------- | ----- |
| `Authentication` | string | Basic auth access token uid as username, no password |

-

###Responses

| Code | Meaning |
| --- | ----------- | ----- |
| **200** | List of invoices for your account |

```json
{"invoices": [{
  "invoice": {
    "amount": 10.71,
    "currency": "EUR",
    "uid": "LeO7itGT4",
    "status": "unpaid",  
    "uri": "pay:?r=https://api.anypayinc.com/r/LeO7itGT4",
    "redirect_url": "https://anypay.city/#/payments/LeO7itGT4"
  },
  "payment_options": [{
    "currency": DASH",
    "uri": "dash:?r=https://api.anypayinc.com/r/LeO7itGT4"
  }, {
    "currency": "BSV",
    "uri": "pay:?r=https://api.anypayinc.com/r/LeO7itGT4"
  }, {
    "currency": "BCH",
    "uri": "bitcoincash:?r=https://api.anypayinc.com/r/LeO7itGT4"
  }]
}] }
```