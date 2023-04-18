export default function returnHowManyArguments(...theArgs) {
  let total = 0;
  for (let i = 0; i < theArgs.length; i += 1) {
    total += 1;
  }
  return total;
}
