export default function cleanSet(set, preffix) {
  const array = [];

  if (typeof preffix !== 'string') {
    return '';
  }

  if (preffix.length === 0) {
    return '';
  }

  for (const elm of set) {
    if (typeof elm === 'string') {
      if (elm.startsWith(preffix)) {
        array.push(elm.slice(-(elm.length - preffix.length)));
      }
    }
  }

  const str = array.join('-');
  return str;
}
