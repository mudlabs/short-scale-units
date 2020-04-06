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

/**
 * Provides the English unit name for the given number.
 * @param number The number you want to match a unit to.
 * @returns The matched unit name.
 */
export function unitNameFromNumber(number:number):string {
  const power: number = getUnitPower(number);
  return Unit[power];
}

/**
 * Provides the base unit number for the given unit name.
 * @param name The unit name you want the base number of.
 * @param raw Specify `true` if you want the **raw unit integer**. Otherwise large numbers will be in scientific notation `1e+X`.
 * @returns The unit value as a `number`, or a `string` if `raw` was specified true.
 */
export function numberFromUnitName(
  name:string, 
  raw?: boolean
): number | string {
  const power: number = Unit[name.toLowerCase()];
  const unitNumber = Math.pow(10, power);
  const isScientific = new RegExp(/e\+\d+$/).test(unitNumber.toString());
  
  if (raw && isScientific) {
    let string = "1";
    const power = parseInt(unitNumber.toString().split("+")[1]);
    for(let i=0; i<power; i++) {
      string += "0";
    }
    return string;
  } else if (raw) {
    return unitNumber.toString();
  } else {
    return unitNumber;
  }
}

/**
 * Provides an abbreviation of the short unit name;
 * @param name The full unit name.
 * @returns The abbreviated unit name.
 */
export function trimName(name:string): string {
  const power = Unit[name];
  return UnitAbbreviation[power]
}

/**
 * Provides the short-hand abbreviation of a number, relative to its unit.
 * @param number The number you want abbreviated to its unit value.
 * @returns The shortend number.
 */
export function trimNumber(number:number): number {
  const power = getPower(number);
  const base = Math.round(Math.max(power, 1));
  const value = power > 3
    ? Math.floor(power/3)*3
    : Math.round(power/base)*base;
  
  return Math.floor(number / eval(`1e+${value}`));
}

/**
 * Provides the power for the given number, relative to its unit.
 * - If you want the real power see `getPower`.
 * @param number The number for which you want the unit power.
 * @returns The numbers unit power.
 */
export function getUnitPower(number: number): number {
  const power: number = Math.fround(getPower(number));
  const base = Math.floor(Math.max(power, 1));
  const value = power > 3 
    ? Math.floor(power/3)*3 
    : Math.floor(power/base)*base;
  
  return value; 
}

/**
 * Provides the power for the given number.
 * - If you want the power relative to its unit use `getUnitPower`.
 * @param number The number for which you want the power.
 * @param round A boolean specifing the power should be rounded.
 * @returns The numbers power
 */
export function getPower(number: number, round?: boolean): number {
  const target = Math.max(number, 1);
  return round
    ? Math.round(Math.log(target) / Math.log(10))
    : Math.log(target) / Math.log(10);
}
