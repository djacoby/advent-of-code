import { getInput } from '../get-input';

const input = getInput('./12-3/input.txt');

/**
 * Convert letter to it's char code then subtract the corresponding number (if it's capitalized or not)
 * to conver the char code into the item priority.
 * 
 * e.g. A is charcode 65, therefore we subtract 38 from it to get the correct priority number of 27
 */
const getItemPriority = (rucksack: string): number[] => {
  const UPPERCASE_NUMBER = 38;
  const LOWERCASE_NUMBER = 96;

  return rucksack.split('').map(
    (letter: string) => {
      if (letter === letter.toUpperCase()) {
        return letter.charCodeAt(0) - UPPERCASE_NUMBER;
      }
    
      return letter.charCodeAt(0) - LOWERCASE_NUMBER;
    },
  );
};

// Find letter that is common between n...n + 2 rucksacks
let sum = 0;

for (let i = 0; i < input.length; i += 3) {
  const [firstSack, secondSack, thirdSack] = input.slice(i, i + 3);

  const priorityFirstSack = getItemPriority(firstSack);
  const prioritySecondSack = getItemPriority(secondSack);
  const priorityThirdSack = getItemPriority(thirdSack);


  const commonValue = priorityFirstSack.find(
    (val: number) => {
      return prioritySecondSack.includes(val) && priorityThirdSack.includes(val);
    },
  );

  sum += commonValue;
}

console.log(`The sum of all common values between the groups is ${sum}`);