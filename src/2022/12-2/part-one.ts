import { getInput } from '../get-input';

const input = getInput('./12-2/input.txt');

enum Shape {
  rock = 1,
  paper = 2,
  scissors = 3,
}

const myShapeLookup: Record<string, Shape> = {
  X: Shape.rock,
  Y: Shape.paper,
  Z: Shape.scissors,
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

const outcomeFnLookup: Record<Shape, Function> = {
  [Shape.rock]: (oppShape: Shape) => oppShape === Shape.scissors ? outcomeScore.win : outcomeScore.lose,
  [Shape.paper]: (oppShape: Shape) => oppShape === Shape.rock ? outcomeScore.win : outcomeScore.lose,
  [Shape.scissors]: (oppShape: Shape) => oppShape === Shape.paper ? outcomeScore.win : outcomeScore.lose, 
}

const getMatchScore = (oppShape: Shape, myShape: Shape): number => {
  if (oppShape === myShape) {
    return outcomeScore.draw;
  }

  return outcomeFnLookup[myShape](oppShape);
}

const total = input.reduce(
  (acc: number, curr: string) => {
    const [opponent, mine] = curr.split(' ');

    const oppShape = opponentShapeLookup[opponent];
    const myShape = myShapeLookup[mine];

    return acc += getMatchScore(oppShape, myShape) + myShape;
  },
  0
);

console.log(`Your total score is ${total}`);
