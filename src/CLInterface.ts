import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

export class CLInterface {
  public readonly readline = createInterface({ input, output });

  public input(q: string): Promise<string> {
    return this.readline.question(q);
  }

  public printLine(line: string): void {
    this.readline.write(line + '\n');
  }

  public printLines(lines: Array<string>): void {
    lines.forEach((line: string): void => this.printLine(line));
  }

}
