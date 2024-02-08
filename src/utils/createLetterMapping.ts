
export function createLetterMapping(word: string): Record<string, boolean> {
  return word
    .split('')
    .reduce((mapping: Record<string, boolean>, letter: string): Record<string, boolean> => {
      mapping[letter] ??= false;
      return mapping;
    }, {});
}
