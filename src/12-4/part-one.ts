import { getInput } from '../get-input';

const input = getInput('./12-4/input.txt');

const fullyContainedSets = input.reduce(
  (acc: number, set: string) => {
    const [firstAssignment, secondAssignment] = set.split(',');

    const [firstAssignmentVal1, firstAssignmentVal2] = firstAssignment.split('-').map((val: string) => parseInt(val));
    const [secondAssignmentVal1, secondAssignmentVal2] = secondAssignment.split('-').map((val: string) => parseInt(val));

    if (
      (secondAssignmentVal1 >= firstAssignmentVal1 && secondAssignmentVal2 <= firstAssignmentVal2) ||
      (firstAssignmentVal1 >= secondAssignmentVal1 && firstAssignmentVal2 <= secondAssignmentVal2)
    ) {
      return acc += 1;
    }

    return acc;
  },
  0,
);

console.log(`There are ${fullyContainedSets} sets where one of the assignments fully contain the other.`);