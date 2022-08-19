#Browser Payment Popup

The Anypay Platform Makes It Super Easy To Profit By Bitcoin In Your App Or Website

-

Include the Anypay.js browser SDK in your website.

```
<script src="https://anypayinc.s3.amazonaws.com/anypay.0.2.0.min.js"></script>
```

Then request payment to one or more recipients, for one or more coins including BTC, BCH, BSV, LTC, DASH. Your app will be automatically notified when payment is complete.

##Collecting Payment To Your Anypay Account Addresses

```json
anypay.collectPayment({                                                                                               
  accountId: '1177',                                                                                                  
  amount: 2.00                                                                                                        
})                                                                                                                    
.once('paid', () => {                                                                                                                                                                                                                         
  console.log('Invoice paid');                                                                                        
                                                                                                                       
  setTimeout(() => {                                                                                                                                                                                                                           
    anypay.close();                                                                                                   
                                                                                                                            
  }, 2000);                                                                                                           

})                                                                                                                    
```

##Collecting Payment For Existing Invoice

If you already have created an invoice using the Anypay Payments API you can provide its uid to the Anypay.js Web SDK to display the pop up user interface to the user like so:

```json
// modeal display QR code payment screen to user

anypay.showInvoice(INVOICE_UID).on('paid', console.log)
```

##Multi-Output Payments To Any Addresses

```
<script>
  let invoice = anypay.newPayment({
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
    }],
    options: {
      webhook: 'https://paypow.com/anypay/webhooks/payments',
      redirect: 'https://paypow.com/anypay//payments'
    }
  
  })
  
  invoice.once('paid', paidInvoice => {
    // the invoice was paid, guaranteed perfectly correct!
    anypay.close() // close iframe popup
  })
</script>
```