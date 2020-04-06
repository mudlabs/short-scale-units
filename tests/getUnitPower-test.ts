import { strict as assert }  from "assert";
import { getUnitPower } from "../index";
import { test } from "./test";

export class testGetUnitPower {
  static buildTests() {
    [
      [3,0],
      [31,1],
      [199,2],
      [1000,3],
      [21000,3],
      [837490,3],
      [7689347,6],
      [10897644,6],
      [233756898,6],
      [8930039282,9],
      [18930039282,9],
      [768930039282,9],
      [9768930039282,12],
      [19768930039282,12],
      [919768930039282,12],
      [1919768930039282,15],
      [81919768930039282,15],
      [281919768930039282,15],
      [5281919768930039282,18],
      [15281919768930039282,18],
      [415281919768930039282,18],
      [2415281919768930039282,21],
      [22415281919768930039282,21],
      [422415281919768930039282,21],
      [7422415281919768930039282,24],
      [67422415281919768930039282,24],
      [567422415281919768930039282,24],
      [2567422415281919768930039282,27],
      [32567422415281919768930039282,27],
      [302567422415281919768930039282,27],
      [1302567422415281919768930039282,30],
      [11302567422415281919768930039282,30],
      [111302567422415281919768930039282,30],
      [8111302567422415281919768930039282,33],
      [87111302567422415281919768930039282,33],
      [872111302567422415281919768930039282,33],
      [3872111302567422415281919768930039282,36],
      [93872111302567422415281919768930039282,36],
      [993872111302567422415281919768930039282,36],
      [8993872111302567422415281919768930039282,39],
      [80993872111302567422415281919768930039282,39],
      [280993872111302567422415281919768930039282,39],
      [3280993872111302567422415281919768930039282,42],
      [34280993872111302567422415281919768930039282,42],
      [543280993872111302567422415281919768930039282,42],
      [7543280993872111302567422415281919768930039282,45],
      [67543280993872111302567422415281919768930039282,45],
      [263543280993872111302567422415281919768930039282,45],
      [1263543280993872111302567422415281919768930039282,48],
      [81263543280993872111302567422415281919768930039282,48],
      [748263543280993872111302567422415281919768930039282,48],
      [5748263543280993872111302567422415281919768930039282,51],
      [55748263543280993872111302567422415281919768930039282,51],
      [565748263543280993872111302567422415281919768930039282,51],
      [2565748263543280993872111302567422415281919768930039282,54],
      [23565748263543280993872111302567422415281919768930039282,54],
      [234565748263543280993872111302567422415281919768930039282,54],
      [9234565748263543280993872111302567422415281919768930039282,57],
      [80234565748263543280993872111302567422415281919768930039282,57],
      [490234565748263543280993872111302567422415281919768930039282,57],
      [1490234565748263543280993872111302567422415281919768930039282,60],
      [71490234565748263543280993872111302567422415281919768930039282,60],
      [173490234565748263543280993872111302567422415281919768930039282,60],
      [7173490234565748263543280993872111302567422415281919768930039282,63],
      [34173490234565748263543280993872111302567422415281919768930039282,63],
      [321173490234565748263543280993872111302567422415281919768930039282,63]
    ].forEach(unit => 
      test(
        `${unit[0]} should return ${unit[1]}`, 
        () => assert.equal(getUnitPower(unit[0]), unit[1]),
        "getUnitPower"
      )
    )
  }
}