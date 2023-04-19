export default function appendToEachArrayValue(array, appendString) {
//   const newarray = [];
  for (const idx of array.keys()) {
    const value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
