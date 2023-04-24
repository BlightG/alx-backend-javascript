export default function getListStudentIds(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  const list = array.map((student) => student.id);
  return list;
}
