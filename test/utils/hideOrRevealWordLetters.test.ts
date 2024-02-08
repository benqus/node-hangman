import { hideOrRevealWordLetters } from '../../src/utils/hideOrRevealWordLetters';

describe('hideOrRevealWordLetters', () => {
  test('hides all letters', () => {
    const output = hideOrRevealWordLetters('randomword', []);

    expect(output).toBe('__________');
  });

  test('hides some letters', () => {
    const output = hideOrRevealWordLetters('randomword', [ 'a', 'd', 'o' ]);

    expect(output).toBe('_a_do__o_d');
  });
});
