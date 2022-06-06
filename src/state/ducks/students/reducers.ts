import { Reducer } from "redux";
import { student } from "./storeType";
import {
  students,
  editStudent,
  deleteStudent,
  addStudent,
} from "./actionsType";

type actions = students | editStudent | deleteStudent | addStudent;

const initialState: student[] = [];

const studentsReducer: Reducer<student[], actions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "STUDENTS":
      return action.students;

    case "CREATE_STUDENT":
      return [...state, action.student];

    case "EDIT_ONE_STUDENT":
      return [...state];

    case "DELETE_ONE_STUDENT":
      let deleteStudent = state.filter(
        (student) => student._id !== action.student_id
      );
      return deleteStudent;

    default:
      return [...state];
  }
};

export default studentsReducer;
