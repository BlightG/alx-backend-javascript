export default function cleanSet(set, preffix) {
  const array = [];

  if (preffix.length === 0) {
    return '';
  }
  for (const elm of set) {
    if (elm.startsWith(preffix)) {
      array.push(elm.slice(-(elm.length - preffix.length)));
    }
  }

  const str = array.join('-');
  return str;
}
