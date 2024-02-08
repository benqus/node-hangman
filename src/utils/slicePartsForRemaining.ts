export function slicePartsForRemaining(parts: Array<string>, remaining: number): Array<string> {
  if (remaining === 0) return parts.slice();
  
  const slice = parts.slice(0, -remaining);
  let i = parts.length - slice.length;
  while (i > 0) {
    slice.push('');
    i--;
  }
  return slice;
}
