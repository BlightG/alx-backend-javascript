export default function getStudentsByLocation(array, city) {
  if (!Array.isArray(array)) {
    return [];
  }

  const list = array.filter((student) => student.location === city);
  return list;
}
