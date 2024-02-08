import { getInputPrompt } from '../../src/utils/getInputPrompt';

describe('getInputPrompt', () => {

  test('prompt for 1', () => {
    const prompt = getInputPrompt(1);

    expect(prompt).toBe('Make a guess (last guess): ');
  });
  
  test('prompt for 3', () => {
    const prompt = getInputPrompt(3);

    expect(prompt).toBe('Make a guess (3 guesses remain): ');
  });
  
});
