import { PARTS } from '../../src/constants';
import { renderHangmanLines } from '../../src/utils/renderHangmanLines';

describe('renderHangmanLines', () => {

  test('render hangman with empty array', () => {
    const input = [];
    const output = renderHangmanLines(input);

    expect(output).toEqual([
      ' +------+',
      ' |/     |',
      ` |      o`,
      ` |     /|\\`,
      ` |     /^\\`,
      ` |\\`,
      `-+--------`,
    ]);
  });
  
  test('render hangman with empty array', () => {
    const input = new Array(PARTS.length).fill('.');
    const output = renderHangmanLines(input);

    expect(output).toEqual([
      ' +------+',
      ' |/     |',
      ` |      .`,
      ` |     ...`,
      ` |     ...`,
      ` |\\`,
      `-+--------`,
    ]);
  });
  
});
