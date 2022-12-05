import { getInput } from '../get-input';

const input = getInput('./12-2/input.txt');

enum Shape {
  rock = 1,
  paper = 2,
  scissors = 3,
}

enum Outcome {
  lose = 1,
  draw = 2,
  win = 3,
}

const myOutcomeLookup: Record<string, Outcome> = {
  X: Outcome.lose,
  Y: Outcome.draw,
  Z: Outcome.win,
}

const opponentShapeLookup: Record<string, Shape> = {
  A: Shape.rock,
  B: Shape.paper,
  C: Shape.scissors,
}

const outcomeScore = {
  lose: 0,
  draw: 3,
  win: 6,
}

interface WinLose {
  win: Shape,
  lose: Shape,
}

const myShapeLookup: Record<Shape, WinLose> = {
  [Shape.rock]: {
    win: Shape.paper,
    lose: Shape.scissors,
  },
  [Shape.paper]: {
    win: Shape.scissors,
    lose: Shape.rock,
  },
  [Shape.scissors]: {
    win: Shape.rock,
    lose: Shape.paper,
  },
}

const outcomeFnLookup: Record<Outcome, Function> = {
  [Outcome.lose]: (oppShape: Shape) => myShapeLookup[oppShape].lose,
  [Outcome.draw]: (oppShape: Shape) => oppShape + outcomeScore.draw,
  [Outcome.win]: (oppShape: Shape) => myShapeLookup[oppShape].win + outcomeScore.win, 
}

const total = input.reduce(
  (acc: number, curr: string) => {
    const [opponent, mine] = curr.split(' ');

    const oppShape = opponentShapeLookup[opponent];
    const myOutcome = myOutcomeLookup[mine];

    return acc += outcomeFnLookup[myOutcome](oppShape);
  },
  0
);

console.log(`Your total score is ${total}`);
