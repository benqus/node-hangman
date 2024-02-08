
export function sayGoodBye(n: number, w: string): string {
  if (n === 0) {
    return `Unfortunately, you lost. The word was: ${w.toUpperCase()}`;
  }
  return 'Congratulations, you won!';
}
