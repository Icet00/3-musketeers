# cash

**Table of Contents**

- [Installation](#installation)
- [Utilisation](#utilisation)
  - [Index](#index)
  - [Currencies](#currencies)

## Installation

Having already install [npm](https://docs.npmjs.com/getting-started/installing-node), and use this command.

```
npm install
```

## Utilisation

### Index

Launch the executable with the first currencies being the currencies of the amount
```
node bin/index.js <amount> <currencies_abbrevation>
```

#### Example :
```
node bin/index.js 1 usd eur cad
```

Helper
```
node bin/index.js --help
```

Save in your temp local file your favorite currencies. With the first being the currencies of the amount (when not selected)
```
node bin/index.js --save <currencies_abbrevation>
```

#### Example :
Save 3 currencies
```
node bin/index.js --save usd eur cad
```

```
node bin/index.js 1
```
Will return the value in the eur and cad currencies from usd

```
node bin/index.js 1 eur
```
Will return the value in the eur and cad currencies from eur

## Currencies

Each currencies are stored in lib/currencies.json. They are 32 differents currencies. They can be written in capital letter or normal letter.

* "AUD": "Australian Dollar",
* "RUB": "Russian Rouble",
* "EUR": "Euro",
* "BGN": "Bulgarian Lev",
* "BRL": "Real Brazilian",
* "CAD": "Canadian Dollar",
* "CHF": "Swiss Franc",
* "CNY": "Chinese Yuan",
* "CZK": "Czech Koruna",
* "DKK": "Danish Krone",
* "GBP": "Pound Sterling",
* "HKD": "Hong Kong Dollar",
* "HRK": "Croatian Kuna",
* "HUF": "Hungarian Forint",
* "IDR": "Indonesian Rupiah",
* "ILS": "Israeli Shekel",
* "INR": "Indian Rupee",
* "JPY": "Japanes Yen",
* "KRW": "South Korean Won",
* "MXN": "Mexican Peso",
* "MYR": "Malaysian Ringgit",
* "NOK": "Norwegian Krone",
* "PHP": "Philippine Peso",
* "PLN": "Polish Zloty",
* "RON": "Romanian New Leu",
* "SEK": "Swedish Krona",
* "SGD": "Singapore Dollar",
* "THB": "Thai Baht",
* "TRY": "Turkish Lira",
* "USD": "US Dollar",
* "ZAR": "South African Rand",
* "NZD": "New Zealand Dollar"