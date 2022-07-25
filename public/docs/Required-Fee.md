# Required Fee for Payment

Users can choose what priority fee they would like to require of payees. There are fives options:

1. High Priority Fee (Fastest)
2. Half Hour Fee
3. Hour Fee
4. Economy Fee
5. Minimum Fee (Slowest)

## Code

These are represented in the code with:

```
{
  "fastestFee": 11,
  "halfHourFee": 5,
  "hourFee": 1,
  "economyFee": 1,
  "minimumFee": 1
}
```

## Why Use This

The mining fees to process transactions on a network change from minute to minute. Rather than hard-code a particular fee rate, Anypay enables users to set their desired priority. 

When Anypay generates an invoice, it checks to see what priority fee you want the user to pay, and then finds the appropriate amount at that time.

### Example

If you want to be sure your transactions confirm quickly, it is best to use `fastestFee`. 

If you want to pay the lowest fee possible and do not care when it confirms, then `minimumFee` is best.