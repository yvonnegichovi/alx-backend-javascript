function updateStudentGradeByCity(list, city, newGrades) {
  return list.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    const grade = gradeObj ? gradeObj.grade : 'N/A';
    return { ...student, grade };
  }).filter((student) => student.location === city);
}
export default updateStudentGradeByCity;
