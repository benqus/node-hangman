import { PARTS } from '../constants';

export function renderHangmanLines(parts: Array<string>): Array<string> {
  const [
                     head = PARTS[0],
    larm = PARTS[1], torso = PARTS[2], rarm = PARTS[3],
    lleg = PARTS[4], testes = PARTS[5], rleg = PARTS[6],
  ] = parts;

  return [
    ' +------+',
    ' |/     |',
    ` |      ${head}`,
    ` |     ${larm}${torso}${rarm}`,
    ` |     ${lleg}${testes}${rleg}`,
    ` |\\`,
    `-+--------`,
  ];
}