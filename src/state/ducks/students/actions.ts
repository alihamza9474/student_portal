import {
  getStudentsActionCreator,
  addStudentsActionCreator,
  editStudentActionCreator,
  deleteStudentActionCreator,
} from "./actionCreatorTypes";

export const getStudents: getStudentsActionCreator = () => {
  return {
    type: "GET_STUDENTS",
  };
};

export const addStudent: addStudentsActionCreator = (student) => {
  return {
    type: "ADD_STUDENT",
    student,
  };
};

export const editStudent: editStudentActionCreator = (student) => {
  return {
    type: "EDIT_STUDENT",
    student,
  };
};

export const deleteStudent: deleteStudentActionCreator = (student_id) => {
  return {
    type: "DELETE_STUDENT",
    student_id,
  };
};
