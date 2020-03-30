/**
 * Provides the English unit name for the given integer.
 * - _(i.e. 10273 returns the string "thousand")_.
 */
export function unitNameFromNumber(integer:number): string;

/**
 * Provides an abbreviation of the short unit name;
 * - _(i.e. "thousand" returns "K")_.
 */
export function trimName(name:string): string;

/**
 * Provides the base unit integer for the given unit name.
 * - _(i.e. "thousand" returns the integer 1000)_.
 */
export function numberFromUnitName(name:string): number;

/**
 * Provides the short-hand abbreviation of an integer, relative to its unit.
 * - _(i.e. 10273 returns the integer 10, because it is ten thousands)_.
 */
export function trimNumber(integer:number): number;

/**
 * Provides the power of ten for the given integer, relative to its unit.
 * - _(i.e. 10273 returns the power 3, because its unit is thousand)_.
 * - If you want its real power use `getPower`.
 */
export function getUnitPower(integer: number): number;

/**
 * Provides the power of ten for the given integer.
 * - _(i.e. 10273 returns the power 4)_.
 * - If you want the power relative the its unit use `getUnitPower`.
 */
export function getPower(
  integer: number, 
  round?: boolean
): number;