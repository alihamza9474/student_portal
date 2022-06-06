import { student } from "./storeType";

// For Action Creator
// get students

export type add_student = {
  name: string;
  marks: number;
  subject: string;
  grade: string;
};

export interface getStudentsAction {
  type: "GET_STUDENTS";
}

export interface addStudentAction {
  type: "ADD_STUDENT";
  student: add_student;
}

// edit student
export interface editStudentAction {
  type: "EDIT_STUDENT";
  student: student;
}

// delete student
export interface deleteStudentAction {
  type: "DELETE_STUDENT";
  student_id: string;
}

// ==============================================//

// For Reducers
// save all students
export interface students {
  type: "STUDENTS";
  students: student[];
}

// edit student
export interface editStudent {
  type: "EDIT_ONE_STUDENT";
  student: student;
}

// edit student
export interface addStudent {
  type: "CREATE_STUDENT";
  student: student;
}

// delete student
export interface deleteStudent {
  type: "DELETE_ONE_STUDENT";
  student_id: string;
}

export const actionIds = {
  GET_STUDENTS: "GET_STUDENTS",
  EDIT_STUDENT: "EDIT_STUDENT",
  DELETE_STUDENT: "DELETE_STUDENT",

  MARK_COMPLETE: "MARK_COMPLETE",
  MARK_INCOMPLETE: "MARK_INCOMPLETE",
  DELETE_TODO: "DELETE_TODO",
  CREATE_TODO: "CREATE_TODO",
  GET_TODOS: "GET_TODOS",
};
