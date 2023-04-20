
# Awaiting Payment Confirmations

While businesses may reliably accept instant transactions from many of the payments networks on the market, many of them
have been engineered to optimize for other aspects of security, scalability, etc and thus require additional waiting for
payments to confirm before releasing customer funds. Depending on the merchant's needs and appetite for risk in payments
they may choose to wait for transactions to be confirmed before releasing the product to their customers or otherwise.

As of the writing of this document Anypay tracks invoices in three states but none of them can correctly represent the
state when a payment has been transmitted and broadcast to the network but has not yet been confirmed with high enough
certainty. The current states are:


## Invoice Statuses

- unpaid
- paid
- cancelled
- confirming (new: specified in this document)

All invoices begin as unpaid, await a transaction that matches its requirements. A client may cancel an invoice at any time
via the API which causes the invoice to go into the cancelled state. All payments submitted once an invoice has been can-
celled will be immediately rejected and not allowed to be broadcast. When a payment is received and has not yet been cancelled
it can now go in to one of two states: paid or confirming.

A paid invoice always has a txid hash associated with it, however it will be ideal to be able to distinguish between invoices
that have a status of paid but also went through the confirming process, versus paid invoices that never had the requirement
for the confirmation process. This information may be derived from a new set of events around confirming transactions. These
events will be emitted and saved on the invoice's event log so that clients may determine the history of the invoice.

## Invoice Events

Several new invoice events shall be introduced to model this flow:

- payment.received
- payment.confirming
- payment.confirmed
- payment.expired

All invoices shall have a `payment.received` event emitted to begin the flow regardless of support for confirmation states, though this may be redundant with an existing event. 

The `payment.confirming` event will be triggered for all invoices that require confirmation (or at least for those coins that have implemented the confirmation concept and for which it is activated).

That event may set in motion a process for specifically tracking that transaction as it progresses through the network consensus process.

Once payment is confirmed according to the rules set forth by the business a `payment.confirmed` event will be emitted, which may cause a number of additional actions to be performed by the system to correctly record the payment confirmation details data structure. At this point if the invoice was in the confirming state it will be fully transitioned to `paid`.

An invoice will not change state again after being marked as `paid`.

There exists a possibility that a payment is broadcast and received by Anypay in the confirming state but the payment never confirms. This could happen if the transaction itself contains a maximum timestamp, max block height, ledger index, etc and thus becomes invalid within the broader consensus network. Such transactions will never be confirmed and can never be made to be valid, and so the payment must be rejected finally. In the case of such a failure the `payment.expired` event will be emitted. At that point the invoice shall be able to accept additional payment attempts assuming it itself is not yet expired. The invoice's status should be updated to be 'unpaid' and that point.

## Webhooks Notification

For each of these events a webhook should be sent including the event and the payload. These messages must be documented so that clients understand the data payload that is to be received and can handle them properly.

## Websocket Notification

For each of these events a websocket message should be published including the event and the payload. These messages must be documented so that clients understand the data payload that is to be received and can handle them properly.

## Typescript Notification

The typescript sdk should be updated to include typings for these new events and states that an invoice may exhibit.

## BTC Core Block Notifications

The quickest and most reliable way to detect new confirmations is to run a full node and trigger a program on the new block using either the zmq subscription interface or the blocknotify mechanism that runs a program on the local host of the same bitcoin instance. When a new block is discovered its hash, height and timestamp should be published as a message to the AMQP broker and be routed ultimately to an actor that then checks to see if any of the confirming payments were included in
that block. It could also simply run this check every minute or every so often in case a block is missed, but block notify is definitely the fastest way to discover confirmations without the user having to wait any additional time.

## Recording Confirmations in Database

Payments may already offer a block_height and block_hash property which indicate in which block the payment was ultimately confirmed. This structure could be sufficient to maintain all confirmation data necessary. 

## Waiting for More Than 1 Confirmation

It is entirely conceivable that businesses will want to use payments systems that only work reliably under a larger number of confirmations, for instance an exchange service where the products are not recoverable in the case that a deposit becomes reversed. Other use cases for this include high value items that cannot be trusted with even one confirmation. If a business chooses to configure they block confirmation threshold to be greater than 1 then the same process applies but must wait and check to see the height of the block in which the transaction was confirmed versus the current block height. When the threshold is reached notifications are triggered that include the number of confirmations received.



