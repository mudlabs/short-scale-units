[npm]: https://img.shields.io/npm/v/short-scale-units.svg?labelColor=cb3837&color=faebeb&style=for-the-badge
[size]: https://img.shields.io/github/languages/code-size/mudlabs/short-scale-units?labelColor=146490&color=e9f6fc&style=for-the-badge
[support]: https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/mudlabs/shieldsio/endpoint/badges/github-sponsor.json
<!-- Badges -->
[![npm]](https://www.npmjs.com/package/short-scale-units)
[![size]](https://www.npmjs.com/package/short-scale-units)
<br/>
[![support]](https://github.com/sponsors/mudlabs)

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
```ts
// TypeScript
import * as ssu from "short-scale-units";
```
```js
// JavaScript
const ssu = require("short-scale-units");
```

---

### API

#### unitNameFromNumber
Provides the English unit name for the given number.
```ts
const name = ssu.unitNameFromNumber(17388);
// name = "thousand"
```

#### numberFromUnitName
Provides the base unit number for the given unit name.
```ts
const integer = ssu.numberFromUnitName("thousand");
const notation = ssu.numberFromUnitName("sextillion");
const raw = ssu.numberFromUnitName("sextillion", true);
// number = 1000
// notation = 1e+21
// raw = "1000000000000000000000"
```

#### trimNumber
Provides the short-hand abbreviation of a number, relative to its unit.
```ts
const trimmed = ssu.trimNumber(17388);
// trimmed = 17 (because 17388 is 17 thousands)
```

#### trimName
Provides an abbreviation of the unit name;
```ts
const abbreviation = trimName("thousand");
// abbreviation = "K"
```

#### getUnitPower
Provides the power for the given number, relative to its unit.
- If you want the numbers real power use `getPower`.
```ts
const unitPower = ssu.getUnitPower(17388);
// unitPower = 3
```

#### getPower
Provides the power for the given number.
- If you want the power relative the its unit use `getUnitPower`.
```ts
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
| unvigintillion | 66 | Uv |
| duovigintillion | 69 | Dv
| trevigintillion | 72 | Tv |
| quattuorvigintillion | 75 | Qtv |
| quinvigintillion | 78 | Qnv |
| sexvigintillion | 81 | Sxv |
| septenvigintillion | 84 | Stv |
| octovigintillion | 87 | Ov |
| novemvigintillion | 90 | Nv |
| trigintillion | 93 | Tg |
| untrigintillion | 96 | Utg |
| duotrigintillion | 99 | Dtg |
| tretrigintillion | 102 | Ttg |
| quattuortrigintillion | 105 | Qttg |
| quintrigintillion | 108 | Qntg |
| sextrigintillion | 111 | Sxtg |
| septentrigintillion | 114 | Sttg |
| octotrigintillion | 117 | Otg |
| novemtrigintillion | 120 | Ntg |
| quadragintillion | 123 | Qdr |
| unquadragintillion | 126 | Uqdr |
| duoquadragintillion | 129 | Dqdr |
| trequadragintillion | 132 | Tqdr |
| quattuorquadragintillion | 135 | Qtqdr |
| quinquadragintillion | 138 | Qnqdr |
| sexquadragintillion | 141 | Sxqdr |
| septenquadragintillion | 144 | Stqdr |
| octoquadragintillion | 147 | Oqdr |
| novemquadragintillion | 150 | Nqdr |
| quinquagintillion | 153 | Qng |
| unquinquagintillion | 156 | Uqng |
| duoquinquagintillion | 159 | Dqng |
| trequinquagintillion | 162 | Tqng |
| quattuorquinquagintillion | 165 | Qtqng |
| quinquinquagintillion | 168 | Qnqng |
| sexquinquagintillion | 171 | Sxqng |
| septenquinquagintillion | 174 | Stqng |
| octoquinquagintillion | 177 | Oqng |
| novemquinquagintillion | 180 | Nqng |
| sexagintillion | 183 | Sxa |
| unsexagintillion | 186 | Usxa |
| duosexagintillion | 189 | Dsxa |
| tresexagintillion | 192 | Tsxa |
| quattuorsexagintillion | 195 | Qtsxa |
| quinsexagintillion | 198 | Qnsxa
| sexsexagintillion | 201 | Sxsxa |
| septsexagintillion | 204 | Stsxa |
| octosexagintillion | 207 | Osxa |
| novemsexagintillion | 210 | Nsxa |
| septuagintillion | 213 | Spg |
| unseptuagintillion | 216 | Uspg |
| duoseptuagintillion | 219 | Dspg |
| treseptuagintillion | 222 | Tspg |
| quattuorseptuagintillion | 225 | Qtspg |
| quinseptuagintillion | 228 | Qnspg |
| sexseptuagintillion | 231 | Sxspg |
| septseptuagintillion | 234 | Stspg |
| octoseptuagintillion | 237 | Ospg |
| novemseptuagintillion | 240 | Nspg |
| octogintillion | 243 | Og |
| unoctogintillion | 246 | Uog |
| duooctogintillion | 249 | Dog |
| treoctogintillion | 252 | Tog |
| quattuoroctogintillion | 255 | Qtog |
| quinoctogintillion | 258 | Qnog |
| sexoctogintillion | 261 | Sxog |
| septoctogintillion | 264 | Stog |
| octooctogintillion | 267 | Oog |
| novemoctogintillion | 270 | Nog |
| nonagintillion | 273 | Ng |
| unnonagintillion | 276 | Ung |
| duononagintillion | 279 | Dng |
| trenonagintillion | 282 | Tng |
| quattuornonagintillion | 285 | Qtng |
| quinnonagintillion | 288 | Qnng |
| sexnonagintillion | 291 | Sxng |
| septnonagintillion | 294 | Stng |
| octononagintillion | 297 | Ong |
| novemnonagintillion | 300 | Nng |
| centillion | 303 | C |
