import { getInput } from '../get-input';

const input = getInput('./12-6/input.txt', '');

let output;

const PACKET_MARKER_LENGTH = 4;

for (let i = 0; i < input.length; i++) {
  const arr = input.slice(i, i + PACKET_MARKER_LENGTH);
  const arrSet = [...new Set(arr)];

  if (arrSet.length === PACKET_MARKER_LENGTH) {
    output = i + PACKET_MARKER_LENGTH;

    break;
  }
}

console.log(`The location of the start start of packet marker is ${output}`);
