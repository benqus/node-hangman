import { sayGoodBye } from '../../src/utils/sayGoodBye';

describe('sayGoodBye', () => {

  test('lose', () => {
    const bye = sayGoodBye(0, 'bla');

    expect(bye).toBe('Unfortunately, you lost. The word was: BLA');
  });
  
  test('win', () => {
    const bye = sayGoodBye(1, 'bla');

    expect(bye).toBe('Congratulations, you won!');
  });
  
});
