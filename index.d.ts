/**
 * Provides the English unit name for the given number.
 * - _(i.e. 17388 returns the string "thousand")_.
 */
export function unitNameFromNumber(number:number): string;
/**
 * Provides an abbreviation of the short unit name;
 * - _(i.e. "thousand" returns "K")_.
 */
export function trimName(name:string): string;
/**
 * Provides the base unit number for the given unit name.
 * - _(i.e. "thousand" returns the number 1000)_.
 */
export function numberFromUnitName(name:string): number;

/**
 * Provides the short-hand abbreviation of a number, relative to its unit.
 * - _(i.e. 17388 returns the number 17, because it is 17 thousands)_.
 */
export function trimNumber(number:number): number;

/**
 * Provides the power for the given number, relative to its unit.
 * - _(i.e. 17388 returns the power 3, because its unit is thousand)_.
 * - If you want its real power use `getPower`.
 */
export function getUnitPower(number: number): number;

/**
 * Provides the power for the given number.
 * - _(i.e. 17388 returns the power 4)_.
 * - If you want the power relative the its unit use `getUnitPower`.
 */
export function getPower(
  number: number, 
  round?: boolean
): number;