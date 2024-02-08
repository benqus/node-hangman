import { generateRandomWord } from '../../src/utils/generateRandomWord';

jest.mock('random-words', () => ({
  generate: jest.fn(),
}));

describe('generateRandomWord', () => {

  test('invokes random-words', () => {
    const { generate } = jest.requireMock('random-words');
    generate.mockReturnValue([ 'mockword' ]);

    const word = generateRandomWord();

    expect(word).toBe('mockword');
    expect(generate).toHaveBeenCalledTimes(1);
    expect(generate).toHaveBeenLastCalledWith({ exactly: 1, minLength: 6 });
  });

});
