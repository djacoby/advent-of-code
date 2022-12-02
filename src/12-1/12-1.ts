import { getInput } from '../get-input';

const input = getInput('./12-1/input.txt');

let mostCal = 0;
let secondMostCal = 0;
let thirdMostCal = 0;

input.reduce(
  (acc: number, curr: string) => {
    if (Number.isNaN(parseInt(curr))) {
      if (acc > mostCal) {
        thirdMostCal = secondMostCal;
        secondMostCal = mostCal;
        mostCal = acc;
      }

      else if (acc > secondMostCal) {
        thirdMostCal = secondMostCal;
        secondMostCal = acc;
      }

      else if (acc > thirdMostCal) {
        thirdMostCal = acc;
      }

      return 0;
    }

    return acc += parseInt(curr);
  },
  0,
);

const totalCal = mostCal + secondMostCal + thirdMostCal;

console.log(`The elf with the most calories has ${mostCal} calories.`);
console.log(`The total calories of the top three elves is ${totalCal} calories.`);
