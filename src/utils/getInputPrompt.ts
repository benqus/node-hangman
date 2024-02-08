
export function getInputPrompt(n: number): string {
  if (n === 1) {
    return 'Make a guess (last guess): ';
  }
  return `Make a guess (${n} guesses remain): `;
}
