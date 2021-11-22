# QR-Code

This react app creates a valid QR-Code for a Bitcoin payment.

**This is an educational project, do not use in the Bitcoin mainnet**.

## Scripts

* `start`: Starts the project (see `localhost:3000`);

## How to use it

* Enter the ammount of the payment
* Enter the address of the recipient
* Click in generate
* Scan the address with your wallet of choice and check the result

## About Bitcoin Payments

* Suppose Alice wants to buy a coffe at Bob's Coffe store using bitcoin.
* Bob creates an QR Code that encodes:
  * The address of the recipient (Bob).
  * The ammount to be transfered.

* The QR Code encodes the following URL, as in BIP-21 (proposes a URI scheme for making Bitcoin payments).

```
bitcoin:tb1q8uvhc838247jnx9jp9t3ajp6kw5agaljxm684y?amount=0.015
```

* BIP-21: "Bitcoin URIs follow the general format for URIs as se forth in RFC 3986".
* Query Keys
  * `label`: Label for that address (e.g. name of receiver)
  * `address`: bitcoin address
  * `message`: message that describes the transaction to the user (see examples below)
  * `size`: amount of base bitcoin units (see below)
  * (others): optional, for future extensions
