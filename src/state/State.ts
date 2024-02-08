import { generateRandomWord } from '../utils/generateRandomWord';
import { createLetterMapping } from '../utils/createLetterMapping';
import { hideOrRevealWordLetters } from '../utils/hideOrRevealWordLetters';
import { PARTS } from '../constants';
import { IState, StateUpdateFn } from './types';

export class State implements IState {
  private _word: string = '';
  public get word(): string { return this._word; }

  private _hidden: string = '';
  public get hidden(): string { return this._hidden; }

  private _letters: Record<string, boolean> = {};

  private _wrongGuesses: Record<string, boolean> = {};

  public get guesses(): string { return [ ...this.getRightGuesses(), ...this.getWrongGuesses() ].join(); }

  public get remaining(): number {
    const wrongGuesses = this.getWrongGuesses();
    return PARTS.length - wrongGuesses.length;
  }

  public get ended(): boolean { return this.hidden === this.word || this.remaining === 0; }

  public onupdate: StateUpdateFn = () => {};
  public onreset: StateUpdateFn = () => {};

  constructor() {
    this._word = generateRandomWord();
    this._hidden = hideOrRevealWordLetters(this._word, []);
    this._letters = createLetterMapping(this._word);
  }

  private _hasLetter(letter: string): boolean {
    return this._letters[letter] != null;
  }

  public getRightGuesses(): Array<string> {
    const guesses: Array<string> = [];
    Object.entries(this._letters).forEach(([ letter, guessed ]) => guessed && guesses.push(letter));
    return guesses;
  }

  public getWrongGuesses(): Array<string> {
    return Object.keys(this._wrongGuesses);
  }

  public guess(letter: string): void {
    if (this.ended) return;

    if (this._hasLetter(letter)) {
      this._letters[letter] = true;

      const rightGuesses = this.getRightGuesses();
      this._hidden = hideOrRevealWordLetters(this.word, rightGuesses);
    } else {
      this._wrongGuesses[letter] = true;
    }

    this.onupdate(this);
  }

  public reset(): void {
    this._word = generateRandomWord();
    this._letters = createLetterMapping(this.word);
    this._hidden = hideOrRevealWordLetters(this.word, []);
    this._wrongGuesses = {};
    
    this.onreset(this);
  }

}
