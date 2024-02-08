import { CLInterface } from './CLInterface';
import { State } from './state';
import { slicePartsForRemaining, renderHangmanLines, getInputPrompt, sayGoodBye } from './utils';
import { PARTS } from './constants';
import { IState } from './state/types';

const cli = new CLInterface();

const state = new State();
state.onupdate = renderGame;

async function renderGame(state: IState): Promise<void> {
  console.clear();

  const parts = slicePartsForRemaining(PARTS, state.remaining);
  const lines = renderHangmanLines(parts);
  lines.push(
    state.hidden.toUpperCase(),
    `(${state.guesses})`,
  );
  cli.printLines(lines);

  if (state.ended) {
    const goodbye = sayGoodBye(state.remaining, state.word);
    cli.printLine(goodbye);
    process.exit(0);
  }

  const query = getInputPrompt(state.remaining);
  const input = await cli.input(query);
  const [ char ] = input.trim().split('');
  char ? state.guess(char) : renderGame(state);
}

export function main(): void {
  renderGame(state);
}
