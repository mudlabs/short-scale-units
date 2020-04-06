import { strict as assert }  from "assert";
import { numberFromUnitName } from "../index";
import { test } from "./test";

export class testNumberFromUnitName {  
  static buildTests() {
    test(`"one" should return 1`, () => {
      assert.equal(numberFromUnitName("one"), 1)
    }, "numberFromUnitName");
    test(`"ten" should return 10`, () => {
      assert.equal(numberFromUnitName("ten"), 10)
    });
    test(`"hundred" should return 100`, () => {
      assert.equal(numberFromUnitName("hundred"), 100)
    });
    test(`"thousand" should return 1000`, () => {
      assert.equal(numberFromUnitName("thousand"), 1000)
    });
    test(`"million" should return 1000000`, () => {
      assert.equal(numberFromUnitName("million"), 1000000)
    });
    test(`"billion" should return 1000000000`, () => {
      assert.equal(numberFromUnitName("billion"), 1000000000)
    });
    test(`"trillion" should return 1000000000000`, () => {
      assert.equal(numberFromUnitName("trillion"), 1000000000000)
    });
    test(`"quadrillion" should return 1000000000000000`, () => {
      assert.equal(numberFromUnitName("quadrillion"), 1000000000000000)
    });
    test(`"quadrillion" should return 1000000000000000`, () => {
      assert.equal(numberFromUnitName("quadrillion"), 1000000000000000)
    });
    test(`"quintillion" should return 1000000000000000000`, () => {
      assert.equal(numberFromUnitName("quintillion"), 1000000000000000000)
    });
    test(`"sextillion" should return 1000000000000000000000`, () => {
      assert.strictEqual(numberFromUnitName("sextillion",true), "1000000000000000000000")
    });
    test(`"septillion" should return 1000000000000000000000000`, () => {
      assert.strictEqual(numberFromUnitName("septillion",true), "1000000000000000000000000")
    });
    test(`"octillion" should return 1000000000000000000000000000`, () => {
      assert.strictEqual(numberFromUnitName("octillion",true), "1000000000000000000000000000")
    });
    test(`"nonillion" should return 1000000000000000000000000000000`, () => {
      assert.strictEqual(numberFromUnitName("nonillion",true), "1000000000000000000000000000000")
    });
    test(`"decillion" should return 1000000000000000000000000000000000`, () => {
      assert.strictEqual(numberFromUnitName("decillion", true),"1000000000000000000000000000000000")
    });
    test(`"undecillion" should return 1000000000000000000000000000000000000`, () => {
      assert.strictEqual(numberFromUnitName("undecillion",true), "1000000000000000000000000000000000000")
    });
    test(`"duodecillion" should return 1000000000000000000000000000000000000000`, () => {
      assert.strictEqual(numberFromUnitName("duodecillion",true), "1000000000000000000000000000000000000000")
    });
    test(`"tredecillion" should return 1000000000000000000000000000000000000000000`, () => {
      assert.strictEqual(numberFromUnitName("tredecillion",true), "1000000000000000000000000000000000000000000")
    });
    test(`"quattuordecillion" should return 1000000000000000000000000000000000000000000000`, () => {
      assert.strictEqual(numberFromUnitName("quattuordecillion",true), "1000000000000000000000000000000000000000000000")
    });
    test(`"quindecillion" should return 1000000000000000000000000000000000000000000000000`, () => {
      assert.strictEqual(numberFromUnitName("quindecillion",true), "1000000000000000000000000000000000000000000000000")
    });
    test(`"sexdecillion" should return 1000000000000000000000000000000000000000000000000000`, () => {
      assert.strictEqual(numberFromUnitName("sexdecillion",true), "1000000000000000000000000000000000000000000000000000")
    });
    test(`"septendecillion" should return 1000000000000000000000000000000000000000000000000000000`, () => {
      assert.strictEqual(numberFromUnitName("septendecillion",true), "1000000000000000000000000000000000000000000000000000000")
    });
    test(`"octodecillion" should return 1000000000000000000000000000000000000000000000000000000000`, () => {
      assert.equal(numberFromUnitName("octodecillion",true), "1000000000000000000000000000000000000000000000000000000000")
    });
    test(`"novemdecillion" should return 1000000000000000000000000000000000000000000000000000000000000`, () => {
      assert.equal(numberFromUnitName("novemdecillion",true), "1000000000000000000000000000000000000000000000000000000000000")
    });
    test(`"vigintillion" should return 1000000000000000000000000000000000000000000000000000000000000000`, () => {
      assert.strictEqual(numberFromUnitName("vigintillion",true), "1000000000000000000000000000000000000000000000000000000000000000")
    });
    test(`"fakezillion" should return NaN`, () => {
      assert.strictEqual(numberFromUnitName("fakezillion"), NaN)
    });
  }
}