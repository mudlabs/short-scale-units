import { strict as assert }  from "assert";
import { trimName } from "../index";
import { test } from "./test";

enum Unit {
  "one" = 0,
  "ten" = 1,
  "hundred" = 2,
  "thousand" = 3,
  "million" = 6,
  "billion" = 9,
  "trillion" = 12,
  "quadrillion" = 15,
  "quintillion" = 18,
  "sextillion" = 21,
  "septillion" = 24,
  "octillion" = 27,
  "nonillion" = 30,
  "decillion" = 33,
  "undecillion" = 36,
  "duodecillion" = 39,
  "tredecillion" = 42,
  "quattuordecillion" = 45,
  "quindecillion" = 48,
  "sexdecillion" = 51,
  "septendecillion" = 54,
  "octodecillion" = 57,
  "novemdecillion" = 60,
  "vigintillion" = 63
}

enum UnitAbbreviation {
  "O" = Unit.one,
  "T" = Unit.ten,
  "H" = Unit.hundred,
  "K" = Unit.thousand,
  "M" = Unit.million,
  "B" = Unit.billion,
  "Tr" = Unit.trillion,
  "Qd" = Unit.quadrillion,
  "Qt" = Unit.quintillion,
  "Sxt" = Unit.sextillion,
  "Spt" = Unit.septillion,
  "Ot" = Unit.octillion,
  "Nn" = Unit.nonillion,
  "Dc" = Unit.decillion,
  "Ud" = Unit.undecillion,
  "Dd" = Unit.duodecillion,
  "Td" = Unit.tredecillion,
  "Qtd" = Unit.quattuordecillion,
  "Qnd"  = Unit.quindecillion,
  "Sxd" = Unit.sexdecillion,
  "Std" = Unit.septendecillion,
  "Od" = Unit.octodecillion,
  "Nd" = Unit.novemdecillion,
  "V" = Unit.vigintillion
}

export class testTrimName {  
  static buildTests() {
    const powers = Object.keys(Unit);
    powers.forEach(power => {
      if (!isNaN(parseInt(power))) {
        const name = Unit[power];
        const abbreviation = UnitAbbreviation[power];
        return test(`"${name}" should return "${abbreviation}"`, () => {
          assert.equal(trimName(name), abbreviation)
        }, "trimName");
      }
    });
  }
}