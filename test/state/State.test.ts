import { State, IState } from '../../src/state';
import { PARTS } from '../../src/constants';

jest.mock('../../src/utils/generateRandomWord', () => ({
  generateRandomWord: jest.fn(),
}));

jest.mock('../../src/utils/createLetterMapping', () => ({
  createLetterMapping: jest.fn(),
}));

jest.mock('../../src/utils/hideOrRevealWordLetters', () => ({
  hideOrRevealWordLetters: jest.fn(),
}));

describe('State', () => {
  let state: IState;
  let generateRandomWord: jest.Mock;
  let createLetterMapping: jest.Mock;
  let hideOrRevealWordLetters: jest.Mock;

  beforeEach(() => {
    generateRandomWord = jest.requireMock('../../src/utils/generateRandomWord').generateRandomWord;
    generateRandomWord.mockReturnValue('randomword');
  
    createLetterMapping = jest.requireMock('../../src/utils/createLetterMapping').createLetterMapping;
    createLetterMapping.mockReturnValue({
      a: false,
      d: false,
      m: false,
      n: false,
      o: false,
      r: false,
      w: false,
    });

    hideOrRevealWordLetters = jest.requireMock('../../src/utils/hideOrRevealWordLetters').hideOrRevealWordLetters;
    hideOrRevealWordLetters.mockReturnValue('__________');
  
    state = new State();
    state.onupdate = jest.fn();
    state.onreset = jest.fn();
});

  test('instance', () => {
    expect(state.word).toBe('randomword');
    expect(state.hidden).toBe('__________');
    expect(state.remaining).toBe(PARTS.length);
    expect(state.ended).toBe(false);
    expect(state.guesses).toBe('');

    expect(typeof state.getRightGuesses).toBe('function');
    expect(typeof state.getWrongGuesses).toBe('function');
    expect(typeof state.guess).toBe('function');
    expect(typeof state.reset).toBe('function');
  });

  describe('guess', () => {
    test('guess invokes onupdate', () => {
      state.guess('x');
  
      expect(state.onupdate).toHaveBeenCalledTimes(1);
      expect(state.onupdate).toHaveBeenCalledWith(state);
      expect(state.onreset).not.toHaveBeenCalled();
    });

    test('guess - incorrect letter', () => {
      expect(hideOrRevealWordLetters).toHaveBeenCalledTimes(1);
  
      state.guess('x');

      expect(hideOrRevealWordLetters).toHaveBeenCalledTimes(1);
      expect(state.hidden).toBe('__________');
      expect(state.remaining).toBe(PARTS.length - 1);
      expect(state.ended).toBe(false);
      expect(state.guesses).toBe('x');
      expect(state.getRightGuesses()).toEqual([]);
      expect(state.getWrongGuesses()).toEqual([ 'x' ]);
    });
  
    test('guess - correct letter', () => {
      const hiddenWord = '____o__o__';
      hideOrRevealWordLetters.mockReturnValue(hiddenWord);
      expect(hideOrRevealWordLetters).toHaveBeenCalledTimes(1);

      state.guess('o');
  
      expect(hideOrRevealWordLetters).toHaveBeenCalledTimes(2);
      expect(hideOrRevealWordLetters).toHaveBeenCalledWith(state.word, [ 'o' ]);
      expect(state.hidden).toBe(hiddenWord);
      expect(state.remaining).toBe(PARTS.length);
      expect(state.ended).toBe(false);
      expect(state.guesses).toBe('o');
      expect(state.getRightGuesses()).toEqual([ 'o' ]);
      expect(state.getWrongGuesses()).toEqual([]);
    });
  });

  test('reset', () => {
    state.reset();

    expect(state.getRightGuesses()).toEqual([]);
    expect(state.getWrongGuesses()).toEqual([]);
    expect(state.onreset).toHaveBeenCalledTimes(1);
    expect(state.onreset).toHaveBeenCalledWith(state);
  });
});
