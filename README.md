[npm]: https://img.shields.io/npm/v/short-scale-units.svg?color=949393
[install size]: https://badgen.net/packagephobia/install/short-scale-units?color=949393
[support]: https://img.shields.io/static/v1.svg?logo=paypal&label=Support&message=Mudlabs&style=for-the-badge&color=0c67b5&labelColor=afb0b9
<!-- Badges -->
[![npm]](https://www.npmjs.com/package/short-scale-units)
[![install size]](https://www.npmjs.com/package/short-scale-units)
<br/>
[![support]](https://paypal.me/mudlabs)

# Short Scale Units

A simple package providing helper functions for matching numbers with their _short scale unit_.

### Table of Context
 - [Installation](#Installation)
 - [Import/Require](#Import/Require)
 - [API](#API)
    - [unitNameFromNumber](#unitNameFromNumber)
    - [numberFromUnitName](#numberFromUnitName)
    - [trimNumber](#trimNumber)
    - [trimName](#trimName)
    - [getUnitPower](#getUnitPower)
    - [getPower](#getPower)
 - [Supported Units](#Supported-Units)

### Installation
```
npm install short-scale-units
```

---

### Import/Require
```js
// TypeScript
import * as ssu from "short-scale-units";

// JavaScript
const ssu = require("short-scale-units");
```

---

### API

#### unitNameFromNumber
Provides the English unit name for the given number.
```js
const name = ssu.unitNameFromNumber(17388);
// name = "thousand"
```

#### numberFromUnitName
Provides the base unit number for the given unit name.
```js
const number = ssu.numberFromUnitName("thousand");
// number = 1000
```

#### trimNumber
Provides the short-hand abbreviation of a number, relative to its unit.
```js
const trimmed = ssu.trimNumber(17388);
// trimmed = 17 (because 17388 is 17 thousands)
```

#### trimName
Provides an abbreviation of the unit name;
```js
const abbreviation = trimName("thousand");
// abbreviation = "K"
```

#### getUnitPower
Provides the power for the given number, relative to its unit.
- If you want the numbers real power use `getPower`.
```js
const unitPower = ssu.getUnitPower(17388);
// unitPower = 3
```

#### getPower
Provides the power for the given number.
- If you want the power relative the its unit use `getUnitPower`.
```js
const powerRound = ssu.getPower(17388, true);
const power = ssu.getPower(17388);
// powerRound = 4
// power = 4.240249631518799
```

---

### Supported Units

| Unit Name | Unit Power | Unit Abbreviation |
| --------- | ---------- | ----------------- |
| one | 0 | O |
| ten | 1 | T |
| hundred | 2 | H |
| thousand | 3 | K |
| million | 6 | M |
| billion | 9 | B |
| trillion | 12 | Tr |
| quadrillion | 15 | Qd |
| quintillion | 18 | Qt |
| sextillion | 21 | Sxt |
| septillion | 24 | Spt |
| octillion | 27 | Ot |
| nonillion | 30 | Nn |
| decillion | 33 | Dc |
| undecillion | 36 | Ud |
| duodecillion | 39 | Dd |
| tredecillion | 42 | Td |
| quattuordecillion | 45 | Qtd |
| quindecillion | 48 | Qnd |
| sexdecillion | 51 | Sxd |
| septendecillion | 54 | Std |
| octodecillion | 57 | Od |
| novemdecillion | 60 | Nd |
| vigintillion | 63 | V |