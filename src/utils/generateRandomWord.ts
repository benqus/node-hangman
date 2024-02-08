import { generate } from 'random-words';

const exactly = 1;
const minLength = 6;

export function generateRandomWord(): string {
  const [ word ] = generate({ exactly, minLength }) as Array<string>;
  // console.log(word);
  return word;
}
