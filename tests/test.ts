import { testTrimNumber } from "./trimNumber-test";
import { testGetUnitPower } from "./getUnitPower-test";
import { testGetPower } from "./getPower-test";
import { testTrimName } from "./trimName-test";
import { testUnitNameFromNumber } from "./unitNameFromNumber-test";
import { testNumberFromUnitName } from "./numberFromUnitName-test";

type test = { name: string, fn: Function, title?: string, };

const tests: test[] = [];

export function test(name:string , fn: Function, title?:string, ) {
  tests.push({ title, name, fn });
}


function run() {
  let displayTitle = "";

  const logTitle = (testTitle) => {
    if (testTitle && testTitle !== displayTitle) {
      displayTitle = testTitle;
      console.log(
        "\n---------------------------------\n" +
        displayTitle +
        "\n---------------------------------"
      );
    }
  }

  tests.forEach((test,index) => {
    try {
      logTitle(test.title)
      test.fn();
      console.log('✅', test.name)
    } catch (error) {
      console.log('❌', test.name);
      for( let i in error) {
        console.log(`\t ${i}: ${error[i]}`)
      }
    } finally {
      if (index === tests.length - 1) {
        console.log("\n")
      }
    }
  })
}


testTrimName.buildTests();
testTrimNumber.buildTests();

testGetPower.buildTests();
testGetUnitPower.buildTests();

testUnitNameFromNumber.buildTests();
testNumberFromUnitName.buildTests();


run();
