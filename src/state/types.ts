
export type StateUpdateFn = (state: IState) => void;

export interface IState {
  word: string;
  hidden: string;
  remaining: number;
  ended: boolean;
  guesses: string;

  onupdate: StateUpdateFn;
  onreset: StateUpdateFn;

  getRightGuesses(): Array<string>;
  getWrongGuesses(): Array<string>;
  guess(guess: string): void;
  reset(): void;
}
