
export function hideOrRevealWordLetters(word: string, lettersToReveal: Array<string>): string {
  return word.split('').map(c => lettersToReveal.includes(c) ? c : '_').join('');
}
