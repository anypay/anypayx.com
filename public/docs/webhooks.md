#Webhooks

-

##Instant Back End Notifications Direct To Your Server

As soon as a payment is received you will receive a webhook message to your server if you specify webhook_url upon creating an invoice.

The following is POSTed to your invoice's `webhook_url`:

```json
{
  "uid": "INVOICE_UID",
  "status": "paid",
  "hash": "TRANSACTION_ID"
}
```

If you prefer you may manually check the invoice status through the API after receiving a webhook.

```
GET https://api.anypayx.com/invoices/INVOICE_UID
```