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

export function unitNameFromNumber(int:number):string {
  const power: number = getUnitPower(int);
  return Unit[power];
}

export function numberFromUnitName(name:string):number {
  const power: number = Unit[name.toLowerCase()];
  return Math.pow(10, power);
}

export function trimName(name:string): string {
  const power = Unit[name];
  return UnitAbbreviation[power]
}

export function trimNumber(int:number): number {
  const power = getUnitPower(int);
  const numbers: string[] = int.toString().split("");
  const short = numbers.splice(0, numbers.length - power).join("");
  return parseInt(short)
}

export function getUnitPower(int: number): number {
  const power: number = getPower(int, true);
  return power > 3 ? Math.floor(power/3)*3 : power;
}

export function getPower(int: number, round?: boolean): number {
  return round
    ? Math.round(Math.log(int) / Math.log(10))
    : Math.log(int) / Math.log(10);
}
