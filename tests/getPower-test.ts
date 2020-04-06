import { strict as assert }  from "assert";
import { getPower } from "../index";
import { test } from "./test";

const power = (number:number) => (round:boolean) => {
  const value = Math.max(number, 1);
  return round 
    ? Math.round(Math.log(value) / Math.log(10))
    : Math.log(value) / Math.log(10);
}

export class testGetPower {
  static buildTests() {
    [
      3,
      31,
      199,
      1000,
      21000,
      837490,
      7689347,
      10897644,
      233756898,
      8930039282,
      18930039282,
      768930039282,
      9768930039282,
      19768930039282,
      919768930039282,
      1919768930039282,
      81919768930039282,
      281919768930039282,
      5281919768930039282,
      15281919768930039282,
      415281919768930039282,
      2415281919768930039282,
      22415281919768930039282,
      422415281919768930039282,
      7422415281919768930039282,
      67422415281919768930039282,
      567422415281919768930039282,
      2567422415281919768930039282,
      32567422415281919768930039282,
      302567422415281919768930039282,
      1302567422415281919768930039282,
      11302567422415281919768930039282,
      111302567422415281919768930039282,
      8111302567422415281919768930039282,
      87111302567422415281919768930039282,
      872111302567422415281919768930039282,
      3872111302567422415281919768930039282,
      93872111302567422415281919768930039282,
      993872111302567422415281919768930039282,
      8993872111302567422415281919768930039282,
      80993872111302567422415281919768930039282,
      280993872111302567422415281919768930039282,
      3280993872111302567422415281919768930039282,
      34280993872111302567422415281919768930039282,
      543280993872111302567422415281919768930039282,
      7543280993872111302567422415281919768930039282,
      67543280993872111302567422415281919768930039282,
      263543280993872111302567422415281919768930039282,
      1263543280993872111302567422415281919768930039282,
      81263543280993872111302567422415281919768930039282,
      748263543280993872111302567422415281919768930039282,
      5748263543280993872111302567422415281919768930039282,
      55748263543280993872111302567422415281919768930039282,
      565748263543280993872111302567422415281919768930039282,
      2565748263543280993872111302567422415281919768930039282,
      23565748263543280993872111302567422415281919768930039282,
      234565748263543280993872111302567422415281919768930039282,
      9234565748263543280993872111302567422415281919768930039282,
      80234565748263543280993872111302567422415281919768930039282,
      490234565748263543280993872111302567422415281919768930039282,
      1490234565748263543280993872111302567422415281919768930039282,
      71490234565748263543280993872111302567422415281919768930039282,
      173490234565748263543280993872111302567422415281919768930039282,
      7173490234565748263543280993872111302567422415281919768930039282,
      34173490234565748263543280993872111302567422415281919768930039282,
      321173490234565748263543280993872111302567422415281919768930039282
    ].forEach(number => {
      test(`(${number}, true) should return ${power(number)(true)}`, () => {
        assert.equal(getPower(number, true), power(number)(true));
      }, "getPower");
      test(`(${number}, false) should return ${power(number)(false)}`, () => {
        assert.equal(getPower(number), power(number)(false))
      })
    });
  }
}

