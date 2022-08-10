## Linked Accounts

You may grant access to your account to other accounts, such as employees or peers within your organization. Linked accounts are granted view only access to your account, so they cannot change where your money goes or configure any of your preferences. The feature is ideal for accountants and managers who need to observe what is going on with your payments.

An account link may be either linking inbound or outbound. Outbound means you are granting access to your data to another account. Only outbound links may be created, but from the perspective of the other account they now have an Inbound link. Inbound links cannot be created but can be deleted by the receiver. Outbound links can be created and deleted by the creator.

### Linking An Account

You may grant read-only access to a linked account by creating that account link. To do so simply provide the email address of the Anypay account you would like to view your transaction records. Your account data will automatically appear in their dashboard as a linked account, where they can view but not modify the data.

### Un-linking an Account

If the account you grant permission to desires to reject your link, they may delete it at any time. You may also un-link the account at any time from your dashboard.

## API

```
interface AccountLink {
  id: number;
  source: number; // outbound account id
  target: number; // inbound account id
}
```

### Typescript

```
linkAccount({ account: Account, email: string }): Promise<AccountLink>

listAccountLinks({ account: Account }): Promise<AccountLink[]>

deleteLink({ id: number }): Promise<void>
```

### HTTP

```
POST /api/v1/account/links { email: string } => AccountLink

GET /api/v1/account/links => AccountLink[]

DELETE /api/v1/account/links/:id
```

## Events

Upon interaction with either API the system will emit events through various transports. Depending upon your configuration the events may be published to amqp, websockets, blockchain, or in-memory. 

The following events shall be published:

```
account.linked {"source": 1, "target" 2, id" 123123}

account.link.created {"account_id": 1, "id" 123123}

account.link.received {"account_id", "id": 123123}

account.link.removed {"id" 123123}

account.link.outbound.removed {"id": 123123, "account_id": 1}

account.link.inbound.removed {"id" 123123, "account_id": 2}

```
