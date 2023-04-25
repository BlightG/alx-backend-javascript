export default function hasValuesFromArray(set, array) {
  const subset = new Set(array);
  for (const elem of subset) {
    if (!set.has(elem)) {
      return false;
    }
  }
  return true;
}
