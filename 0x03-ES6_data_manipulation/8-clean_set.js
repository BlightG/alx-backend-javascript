export default function cleanSet(set, preffix) {
  const array = [];

  if (typeof preffix !== 'string') {
    return '';
  }

  if (preffix.length === 0) {
    return '';
  }

  for (const elm of set) {
    if (elm.startsWith(preffix) && typeof elm === 'string') {
      array.push(elm.slice(-(elm.length - preffix.length)));
    }
  }

  const str = array.join('-');
  return str;
}
