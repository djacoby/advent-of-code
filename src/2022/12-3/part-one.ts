import { getInput } from '../get-input';

const input = getInput('./12-3/input.txt');

/**
 * Convert letter to it's char code then subtract the corresponding number (if it's capitalized or not)
 * to convert the char code into the item priority.
 * 
 * e.g. Lowercase "a" is charcode 97, therefore we subtract 96 from it to get the correct priority number of 1
 * e.g. Uppercase "A" is charcode 65, therefore we subtract 38 from it to get the correct priority number of 27
 */
const getItemPriority = (rucksack: string[]): number[] => {
  const UPPERCASE_NUMBER = 38;
  const LOWERCASE_NUMBER = 96;

  return rucksack.map(
    (letter: string) => {
      if (letter === letter.toUpperCase()) {
        return letter.charCodeAt(0) - UPPERCASE_NUMBER;
      }
    
      return letter.charCodeAt(0) - LOWERCASE_NUMBER;
    }
  )
};

/**
 * Split rucksack into two compartments, and convert to priority values
 */
const splitRucksack = (rucksack: string[]): number[][] => {
  const splitPoint = rucksack.length / 2;
  const prioritySack = getItemPriority(rucksack);
  
  return [
    prioritySack.slice(0, splitPoint),
    prioritySack.slice(splitPoint),
  ];
};

const sum = input.reduce(
  (acc: number, rucksack: string) => {
    const [firstSack, secondSack] = splitRucksack(rucksack.split(''));

    return acc += firstSack.find((val: number) => secondSack.includes(val));
  },
  0,
);

console.log(`The sum of all duplicate values in the rucksacks is ${sum}`);