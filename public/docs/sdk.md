# Anypay SDK Documentation

The Anypay SDK is a software development kit that provides developers with a set of tools and resources to easily integrate payments into their applications.

## Getting Started

To get started with the Anypay SDK, follow these steps:

1. Clone the Anypay SDK repository from Github: https://github.com/anypay/anypay-sdk.git
2. Install the dependencies by running `npm install` in the root directory of the project.
3. Set up your API credentials by creating a `.env` file and adding your API key and secret. See the `.env.example` file for reference.
4. Import the Anypay SDK into your project and start using the available functions and methods.

## Functions and Methods

The Anypay SDK provides the following functions and methods:

### `createCharge(chargeData)`

Creates a new charge using the specified charge data. The charge data should include the amount, currency, description, and any other relevant details.

### `captureCharge(chargeId)`

Captures a previously authorized charge using the specified charge ID.

### `refundCharge(chargeId)`

Refunds a previously captured charge using the specified charge ID.

### `getCharge(chargeId)`

Retrieves the details of a charge using the specified charge ID.

### `getCharges()`

Retrieves a list of all charges that have been created using the Anypay SDK.

## Examples

Here are some examples of how to use the Anypay SDK in your application:

```javascript
const anypay = require('anypay-sdk');

anypay.createCharge({
  amount: 100,
  currency: 'USD',
  description: 'Test charge',
  card: {
    number: '4111111111111111',
    exp_month: 12,
    exp_year: 2023,
    cvc: '123'
  }
}).then(charge => {
  console.log('Charge created:', charge);
}).catch(error => {
  console.error('Error creating charge:', error);
});
```

```javascript
const anypay = require('anypay-sdk');

anypay.captureCharge('ch_123456789').then(charge => {
  console.log('Charge captured:', charge);
}).catch(error => {
  console.error('Error capturing charge:', error);
});
```

## Support

If you have any questions or issues with the Anypay SDK, please visit the Anypay support page at https://anypayx.com/faq or create a Github issue at https://github.com/anypay/anypay-sdk/issues.

## License

The Anypay SDK is open source software released under the MIT License. See the LICENSE file for more details.