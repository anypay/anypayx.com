# Anypay Web3 Checkout Documentation

The Anypay Web3 Checkout is a Javascript library that enables developers to easily integrate cryptocurrency payments into their web applications.

## Getting Started

To get started with Anypay Web3 Checkout, follow these steps:

1. Clone the Anypay Web3 Checkout repository from Github: https://github.com/anypay/web3-checkout.git
2. Include the `anypay.js` and `web3-checkout.js` scripts in your HTML file.
3. Initialize the Anypay Web3 Checkout by calling the `anypayCheckout.init()` function with your API key and secret.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Anypay Web3 Checkout Example</title>
    <script src="https://cdn.anypayinc.com/anypay.js"></script>
    <script src="web3-checkout.js"></script>
  </head>
  <body>
    <button id="checkout-button">Pay with Anypay</button>
    <script>
      anypayCheckout.init({
        apiKey: 'YOUR_API_KEY',
        apiSecret: 'YOUR_API_SECRET',
      });
    </script>
  </body>
</html>
```

## Functions and Methods

The Anypay Web3 Checkout library provides the following functions and methods:

### `anypayCheckout.init(options)`

Initializes the Anypay Web3 Checkout with the specified API key and secret.

### `anypayCheckout.openCheckout(options)`

Opens the Anypay Web3 Checkout dialog with the specified options.

### `anypayCheckout.closeCheckout()`

Closes the Anypay Web3 Checkout dialog.

### `anypayCheckout.setCheckoutCallback(callback)`

Sets the callback function to be called after a payment has been made.

## Examples

Here are some examples of how to use the Anypay Web3 Checkout library:

```javascript
anypayCheckout.openCheckout({
  amount: 100,
  currency: 'USD',
  description: 'Test payment',
  cryptoCurrency: 'BTC',
  successUrl: 'https://example.com/success',
  cancelUrl: 'https://example.com/cancel',
});
```

```javascript
anypayCheckout.setCheckoutCallback(function(payment) {
  console.log('Payment made:', payment);
});
```

## Support

If you have any questions or issues with the Anypay Web3 Checkout, please visit the Anypay support page at https://anypayx.com/faq or create a Github issue at https://github.com/anypay/web3-checkout/issues.

## License

The Anypay Web3 Checkout library is open source software released under the MIT License. See the LICENSE file for more details.