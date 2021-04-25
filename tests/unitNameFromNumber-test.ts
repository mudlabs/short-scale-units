import { strict as assert }  from "assert";
import { unitNameFromNumber } from "../index";
import { test } from "./test";

export class testUnitNameFromNumber {  
  static buildTests() {
    test(`0 should return 'one'`, () => {
      assert.equal(unitNameFromNumber(0), "one");
    }, "unitNameFromNumber", );
    test(`4 should return 'one'`, () => {
      assert.equal(unitNameFromNumber(4), "one");
    });
    test(`8 should return 'one'`, () => {
      assert.equal(unitNameFromNumber(8), "one");
    });
    test(`21 should return "ten"`, () => {
      assert.equal(unitNameFromNumber(21), "ten")
    });
    test(`76 should return "ten"`, () => {
      assert.equal(unitNameFromNumber(76), "ten")
    });
    test(`99 should return "ten"`, () => {
      assert.equal(unitNameFromNumber(99), "ten")
    });
    test(`100 should return "hundred"`, () => {
      assert.equal(unitNameFromNumber(100), "hundred")
    });
    test(`342 should return "hundred"`, () => {
      assert.equal(unitNameFromNumber(342), "hundred")
    });
    test(`999 should return "hundred"`, () => {
      assert.equal(unitNameFromNumber(999), "hundred")
    });
    test(`1000 should return "thousand"`, () => {
      assert.equal(unitNameFromNumber(1000), "thousand")
    });
    test(`83632 should return "thousand"`, () => {
      assert.equal(unitNameFromNumber(83632), "thousand")
    });
    test(`724632 should return "thousand"`, () => {
      assert.equal(unitNameFromNumber(724632), "thousand")
    });
    test(`1724632 should return "million"`, () => {
      assert.equal(unitNameFromNumber(1724632), "million")
    });
    test(`21724632 should return "million"`, () => {
      assert.equal(unitNameFromNumber(1724632), "million")
    });
    test(`321724632 should return "million"`, () => {
      assert.equal(unitNameFromNumber(321724632), "million")
    });
    test(`1321724632 should return "billion"`, () => {
      assert.equal(unitNameFromNumber(1321724632), "billion")
    });
    test(`21321724632 should return "billion"`, () => {
      assert.equal(unitNameFromNumber(21321724632), "billion")
    });
    test(`421321724632 should return "billion"`, () => {
      assert.equal(unitNameFromNumber(421321724632), "billion")
    });
    test(`1421321724632 should return "trillion"`, () => {
      assert.equal(unitNameFromNumber(1421321724632), "trillion")
    });
    test(`11421321724632 should return "trillion"`, () => {
      assert.equal(unitNameFromNumber(11421321724632), "trillion")
    });
    test(`711421321724632 should return "trillion"`, () => {
      assert.equal(unitNameFromNumber(711421321724632), "trillion")
    });
    test(`1711421321724632 should return "quadrillion"`, () => {
      assert.equal(unitNameFromNumber(1711421321724632), "quadrillion")
    });
    test(`52711421321724632 should return "quadrillion"`, () => {
      assert.equal(unitNameFromNumber(52711421321724632), "quadrillion")
    });
    test(`852711421321724632 should return "quadrillion"`, () => {
      assert.equal(unitNameFromNumber(852711421321724632), "quadrillion")
    });
    test(`1852711421321724632 should return "quintillion"`, () => {
      assert.equal(unitNameFromNumber(1852711421321724632), "quintillion")
    });
    test(`31852711421321724632 should return "quintillion"`, () => {
      assert.equal(unitNameFromNumber(31852711421321724632), "quintillion")
    });
    test(`331852711421321724632 should return "quintillion"`, () => {
      assert.equal(unitNameFromNumber(331852711421321724632), "quintillion")
    });
    test(`7331852711421321724632 should return "sextillion"`, () => {
      assert.equal(unitNameFromNumber(7331852711421321724632), "sextillion")
    });
    test(`77331852711421321724632 should return "sextillion"`, () => {
      assert.equal(unitNameFromNumber(77331852711421321724632), "sextillion")
    });
    test(`777331852711421321724632 should return "sextillion"`, () => {
      assert.equal(unitNameFromNumber(777331852711421321724632), "sextillion")
    });
    test(`1777331852711421321724632 should return "septillion"`, () => {
      assert.equal(unitNameFromNumber(1777331852711421321724632), "septillion")
    });
    test(`83777331852711421321724632 should return "septillion"`, () => {
      assert.equal(unitNameFromNumber(83777331852711421321724632), "septillion")
    });
    test(`342777331852711421321724632 should return "septillion"`, () => {
      assert.equal(unitNameFromNumber(342777331852711421321724632), "septillion")
    });
    test(`1342777331852711421321724632 should return "octillion"`, () => {
      assert.equal(unitNameFromNumber(1342777331852711421321724632), "octillion")
    });
    test(`21342777331852711421321724632 should return "octillion"`, () => {
      assert.equal(unitNameFromNumber(21342777331852711421321724632), "octillion")
    });
    test(`621342777331852711421321724632 should return "octillion"`, () => {
      assert.equal(unitNameFromNumber(621342777331852711421321724632), "octillion")
    });
    test(`8621342777331852711421321724632 should return "nonillion"`, () => {
      assert.equal(unitNameFromNumber(8621342777331852711421321724632), "nonillion")
    });
    test(`18621342777331852711421321724632 should return "nonillion"`, () => {
      assert.equal(unitNameFromNumber(18621342777331852711421321724632), "nonillion")
    });
    test(`672621342777331852711421321724632 should return "nonillion"`, () => {
      assert.equal(unitNameFromNumber(672621342777331852711421321724632), "nonillion")
    });
    test(`3672621342777331852711421321724632 should return "decillion"`, () => {
      assert.equal(unitNameFromNumber(3672621342777331852711421321724632), "decillion")
    });
    test(`13672621342777331852711421321724632 should return "decillion"`, () => {
      assert.equal(unitNameFromNumber(13672621342777331852711421321724632), "decillion")
    });
    test(`134672621342777331852711421321724632 should return "decillion"`, () => {
      assert.equal(unitNameFromNumber(134672621342777331852711421321724632), "decillion")
    });
    test(`8134672621342777331852711421321724632 should return "undecillion"`, () => {
      assert.equal(unitNameFromNumber(8134672621342777331852711421321724632), "undecillion")
    });
    test(`87134672621342777331852711421321724632 should return "undecillion"`, () => {
      assert.equal(unitNameFromNumber(87134672621342777331852711421321724632), "undecillion")
    });
    test(`711134672621342777331852711421321724632 should return "undecillion"`, () => {
      assert.equal(unitNameFromNumber(711134672621342777331852711421321724632), "undecillion")
    });
    test(`6711134672621342777331852711421321724632 should return "duodecillion"`, () => {
      assert.equal(unitNameFromNumber(6711134672621342777331852711421321724632), "duodecillion")
    });
    test(`32711134672621342777331852711421321724632 should return "duodecillion"`, () => {
      assert.equal(unitNameFromNumber(32711134672621342777331852711421321724632), "duodecillion")
    });
    test(`109711134672621342777331852711421321724632 should return "duodecillion"`, () => {
      assert.equal(unitNameFromNumber(109711134672621342777331852711421321724632), "duodecillion")
    });
    test(`2109711134672621342777331852711421321724632 should return "tredecillion"`, () => {
      assert.equal(unitNameFromNumber(2109711134672621342777331852711421321724632), "tredecillion")
    });
    test(`34109711134672621342777331852711421321724632 should return "tredecillion"`, () => {
      assert.equal(unitNameFromNumber(34109711134672621342777331852711421321724632), "tredecillion")
    });
    test(`656109711134672621342777331852711421321724632 should return "tredecillion"`, () => {
      assert.equal(unitNameFromNumber(656109711134672621342777331852711421321724632), "tredecillion")
    });
    test(`3656109711134672621342777331852711421321724632 should return "quattuordecillion"`, () => {
      assert.equal(unitNameFromNumber(3656109711134672621342777331852711421321724632), "quattuordecillion")
    });
    test(`32656109711134672621342777331852711421321724632 should return "quattuordecillion"`, () => {
      assert.equal(unitNameFromNumber(32656109711134672621342777331852711421321724632), "quattuordecillion")
    });
    test(`989656109711134672621342777331852711421321724632 should return "quattuordecillion"`, () => {
      assert.equal(unitNameFromNumber(989656109711134672621342777331852711421321724632), "quattuordecillion")
    });
    test(`1989656109711134672621342777331852711421321724632 should return "quindecillion"`, () => {
      assert.equal(unitNameFromNumber(1989656109711134672621342777331852711421321724632), "quindecillion")
    });
    test(`73989656109711134672621342777331852711421321724632 should return "quindecillion"`, () => {
      assert.equal(unitNameFromNumber(73989656109711134672621342777331852711421321724632), "quindecillion")
    });
    test(`878989656109711134672621342777331852711421321724632 should return "quindecillion"`, () => {
      assert.equal(unitNameFromNumber(878989656109711134672621342777331852711421321724632), "quindecillion")
    });
    test(`6878989656109711134672621342777331852711421321724632 should return "sexdecillion"`, () => {
      assert.equal(unitNameFromNumber(6878989656109711134672621342777331852711421321724632), "sexdecillion")
    });
    test(`35878989656109711134672621342777331852711421321724632 should return "sexdecillion"`, () => {
      assert.equal(unitNameFromNumber(35878989656109711134672621342777331852711421321724632), "sexdecillion")
    });
    test(`111878989656109711134672621342777331852711421321724632 should return "sexdecillion"`, () => {
      assert.equal(unitNameFromNumber(111878989656109711134672621342777331852711421321724632), "sexdecillion")
    });
    test(`7111878989656109711134672621342777331852711421321724632 should return "septendecillion"`, () => {
      assert.equal(unitNameFromNumber(7111878989656109711134672621342777331852711421321724632), "septendecillion")
    });
    test(`33111878989656109711134672621342777331852711421321724632 should return "septendecillion"`, () => {
      assert.equal(unitNameFromNumber(33111878989656109711134672621342777331852711421321724632), "septendecillion")
    });
    test(`424111878989656109711134672621342777331852711421321724632 should return "septendecillion"`, () => {
      assert.equal(unitNameFromNumber(424111878989656109711134672621342777331852711421321724632), "septendecillion")
    });
    test(`9424111878989656109711134672621342777331852711421321724632 should return "octodecillion"`, () => {
      assert.equal(unitNameFromNumber(9424111878989656109711134672621342777331852711421321724632), "octodecillion")
    });
    test(`27424111878989656109711134672621342777331852711421321724632 should return "octodecillion"`, () => {
      assert.equal(unitNameFromNumber(27424111878989656109711134672621342777331852711421321724632), "octodecillion")
    });
    test(`932424111878989656109711134672621342777331852711421321724632 should return "octodecillion"`, () => {
      assert.equal(unitNameFromNumber(932424111878989656109711134672621342777331852711421321724632), "octodecillion")
    });
    test(`4932424111878989656109711134672621342777331852711421321724632 should return "novemdecillion"`, () => {
      assert.equal(unitNameFromNumber(4932424111878989656109711134672621342777331852711421321724632), "novemdecillion")
    });
    test(`77932424111878989656109711134672621342777331852711421321724632 should return "novemdecillion"`, () => {
      assert.equal(unitNameFromNumber(77932424111878989656109711134672621342777331852711421321724632), "novemdecillion")
    });
    test(`378932424111878989656109711134672621342777331852711421321724632 should return "novemdecillion"`, () => {
      assert.equal(unitNameFromNumber(378932424111878989656109711134672621342777331852711421321724632), "novemdecillion")
    });
    test(`4378932424111878989656109711134672621342777331852711421321724632 should return "vigintillion"`, () => {
      assert.equal(unitNameFromNumber(4378932424111878989656109711134672621342777331852711421321724632), "vigintillion")
    });
    test(`55378932424111878989656109711134672621342777331852711421321724632 should return "vigintillion"`, () => {
      assert.equal(unitNameFromNumber(55378932424111878989656109711134672621342777331852711421321724632), "vigintillion")
    });
    test(`515378932424111878989656109711134672621342777331852711421321724632 should return "vigintillion"`, () => {
      assert.equal(unitNameFromNumber(515378932424111878989656109711134672621342777331852711421321724632), "vigintillion")
    });
    test(`1284518732469826598347598347569348750275984567983467593486598734659834798347984357693146759734816598347598341765943817659847659843765934876594387593487659843765984375984375983475943879438759834759843759843759834798437598341759831475984317 should return octoseptuagintillion`, () => {
      const int = BigInt(1284518732469826598347598347569348750275984567983467593486598734659834798347984357693146759734816598347598341765943817659847659843765934876594387593487659843765984375984375983475943879438759834759843759843759834798437598341759831475984317);
      assert.equal(unitNameFromNumber(int.toString()), "octoseptuagintillion");
    })
  }
}