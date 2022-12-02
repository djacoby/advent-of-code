import * as fs from 'fs';
import * as path from 'path';

/**
 * Read input.txt file and return input as array
 */
export const getInput = (): string[] => {
  return fs.readFileSync(path.join(__dirname, './input.txt'), 'utf-8').split('\n');
}