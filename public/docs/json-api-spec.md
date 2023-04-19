# JSON API Spec

Perfect Payments Every Time With Pay: Protocol

---

**GET** https://api.anypayx.com**/r/LeO7itGT4**

## Get Payment Request

Get a small template describing the required output of various amounts to various addresses.

-

## Parameters


**Path**

| Code | Type | Description |
| --- | ----------- | ----- |
| `uid` | string | unique id of payment request code |

**Header**

| Code | Type | Description |
| --- | ----------- | ----- |
| `x-currency` | string | Name of the currency to use, i.e. DASH, BCH, or BSV |
| `Accept` | string | application/payment-request |

-

## Responses

| Code | Meaning |
| --- |  ----- |
| **200** | Payment Request Successfully Retrieved |

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
    "paymentUrl": "https://api.anypayinc.com/payments/json/BCH/LeO7itGT4",
    "paymentId": "LeO7itGT4",
    "merchantData": "{'a_json': 'string'}"
}
```

| Code | Meaning |
| --- |  ----- |
| **404** | Payment request by unique id not found |

```
{
  "error": "Not Found"
}
```

---

**POST** https://api.anypayx.com**/r/LeO7itGT4**

###Submit Transaction

Submit signed transaction to Anypay for validation and broadcasting. You broadcast only after a success.

-

## Parameters

**Query**

| Code | Type | Description |
| --- | ----------- | ----- |
| `uid` | string | UID of payment request, included in paymentUrl above 

**Body**

| Code | Type | Description |
| --- | ----------- | ----- |
| `transactions` | array | List of raw transactions in hex string format | 
| `currency` | string | Coin you are submitting (BCH, DASH, etc) |

-

## Responses

| Code | Meaning |
| ---- | ------- | 
| **200** | Transaction successfully submitted |


```
{
  "success: true"
  "transactions": [""]
}
```
-
| Code | Meaning |
| ---- | ------- | 
| **400** | The server rejected your transaction because something about it was invalid. Your transaction was not broadcast and you should not broadcast the transaction either. Try again. |

```
{
  "success": "false",
  "error": "Output 3 Not Found"
}
```
-
| Code | Meaning |
| ---- | ------- | 
| **500** | The server failed to process your transaction due to an issue with Anypay not with your transaction. The transaction was not broadcast, do not broadcast your transaction. You may retry. |

```
{
  "success": "false",
  "error": "Cannot Connect To Bitcoin Cash Network"
}
```