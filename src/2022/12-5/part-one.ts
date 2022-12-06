import { getInput } from '../get-input';

const input = getInput('./12-5/input.txt');

interface Direction {
  move: number,
  from: number,
  to: number,
};

// TODO: use reduce to generate this dynamically
const stackMapping: Record<number, number> = {
  1: 0,
  5: 1,
  9: 2,
  13: 3,
  17: 4,
  21: 5,
  25: 6,
  29: 7,
  33: 8
};

const getIndex = (index: number) => index - 1;

let stacks: string[][] = [[]];

let index = 1;

const regex = new RegExp(/(\s+([0-9]+\s+)+)/g);

for (let line of input) {
  index += 1;

  if (line.match(regex)) {
   break; 
  }

  line.split('');

  for (let i = 1; i < line.length; i += 4) {
    // Skip creating the first array, skip if there already is one
    if (i !== 1 && !stacks[stackMapping[i]]) {
      stacks.push([]);
    }

    if (line[i] !== ' ') {
      stacks[stackMapping[i]].push(line[i]);
    }
  }
}

const reversedStacks = stacks.map((stack: string[]) => stack.reverse());


const directions = input.slice(index).reduce(
  (acc: Direction[], curr: string): Direction[] => {
    const [_moveProp, move, _fromProp, from, _toProp, to] = curr.split(' ');
    
    const direction: Direction = {
      move: parseInt(move),
      from: parseInt(from),
      to: parseInt(to),
    }
    
    return [...acc, direction];
  },
  []
);

directions.forEach(
  (direction: Direction) => {
    const {move, from, to} = direction;

    const sourceLength = reversedStacks[getIndex(from)].length;

    reversedStacks[getIndex(from)]
      .splice(sourceLength - move)
      .reverse()
      .forEach(
        (cargo: string) => reversedStacks[getIndex(to)].push(cargo),
      );
  }
);

const topOfStack = reversedStacks.map(
  (stack: string[]) => stack[stack.length - 1]
).join('');

console.log(topOfStack);