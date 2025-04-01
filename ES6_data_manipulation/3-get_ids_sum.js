/*eslint-disable*/
export default function getStudentIdsSum(students) {
    return students.reduce((agg, students) => agg + students.id, 0);
  }
