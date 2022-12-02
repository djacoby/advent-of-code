import { getInput } from '../get-input';

const input = getInput('./12-1/input.txt');

let mostCal = 0;

input.reduce(
  (acc: number, curr: string) => {
    if (Number.isNaN(parseInt(curr))) {
      if (acc > mostCal) {
        mostCal = acc;
      }

      return 0;
    }

    return acc += parseInt(curr);
  },
  0,
);

console.log(`The elf with the most calories has ${mostCal} calories`);
