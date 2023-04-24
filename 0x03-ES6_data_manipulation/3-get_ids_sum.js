export default function getStudentIdsSum(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  const list = array.map((student) => student.id);
  const totalvalue = list.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return totalvalue;
}
