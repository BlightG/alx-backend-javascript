export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let count = 0;
  if (weakMap.get(endpoint)) count = weakMap.get(endpoint);
  weakMap.set(endpoint, count + 1);
  if (count + 1 >= 5) throw new Error('Endpoint load is high');
}