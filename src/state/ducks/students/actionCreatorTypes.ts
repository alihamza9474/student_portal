import {
  getStudentsAction,
  editStudentAction,
  deleteStudentAction,
  addStudentAction,
} from "./actionsType";

import { student } from "./storeType";
export type add_student = {
  name: string;
  marks: number;
  subject: string;
  grade: string;
};

export type addStudentsActionCreator = (
  student: add_student
) => addStudentAction;
export type getStudentsActionCreator = () => getStudentsAction;
export type editStudentActionCreator = (student: student) => editStudentAction;
export type deleteStudentActionCreator = (
  student_id: string
) => deleteStudentAction;
