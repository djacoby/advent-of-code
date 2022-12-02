import * as fs from 'fs';
import * as path from 'path';

/**
 * Read input.txt file and return input as array
 */
export const getInput = (filePath: string, delimiter: string = '\n', ): string[] => {
  return fs.readFileSync(path.join(__dirname, filePath), 'utf-8').split(delimiter);
}
