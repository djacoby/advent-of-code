import { getInput } from '../get-input';

const input = getInput('./12-6/input.txt', '');

let output;

const MESSAGE_MARKER_LENGTH = 14;

for (let i = 0; i < input.length; i++) {
  const arr = input.slice(i, i + MESSAGE_MARKER_LENGTH);
  const arrSet = [...new Set(arr)];

  if (arrSet.length === MESSAGE_MARKER_LENGTH) {
    output = i + MESSAGE_MARKER_LENGTH;

    break;
  }
}

console.log(`The location of the start of message marker is ${output}`);
