# Cancel Invoice
-
**DELETE** https://api.anypayx.com**/invoices/{uid}**

### Cancel Invoice

Once an invoice is cancelled payments for that invoice will be rejected. Wallets will no longer be able to submit payment.

-

### Parameters

**Path**

| Code | Type | Description |
| --- | ----------- | ----- |
| `uid` | string | unique identifier of the particular invoice to be cancelled |

**Header**

| Code | Type | Description |
| --- | ----------- | ----- |
| `Authentication` | string | Basic auth with access token as auth username |

-

### Responses

| Code | Meaning |
| --- | ----------- | ----- |
| **200** | Invoice successfully cancelled |

```json
{
  "uid": "INVOICE_UID",
  "status": "cancelled"
}
```