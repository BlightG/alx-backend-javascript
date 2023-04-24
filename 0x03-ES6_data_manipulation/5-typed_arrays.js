export default function createInt8TypedArray(length, positon, value) {
  const newbuffer = new ArrayBuffer(length);
  const int32View = new DataView(newbuffer);

  if (positon > length) {
    throw new Error('Position outside range');
  }

  int32View.setInt8(positon, value, false);
  return int32View;
}
