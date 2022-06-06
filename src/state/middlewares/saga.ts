import { takeEvery, put, call, StrictEffect } from "redux-saga/effects";
import { actionIds } from "../ducks/students/actionsType";
import { AxiosResponse } from "axios";
import axios from "axios";
import moment from "moment";
import {
  students,
  addStudent,
  editStudentAction,
  deleteStudentAction,
  editStudent,
  deleteStudent,
  addStudentAction,
} from "../ducks/students/actionsType";

// import { getTodosActionCreator } from "../ducks/students/actionCreatorTypes";
// import { data } from "../../AppPropType";

// watchers
function* todoSaga(): Generator<StrictEffect> {
  yield takeEvery("GET_STUDENTS", getStudentsWorker);
  yield takeEvery("EDIT_STUDENT", editStudentWorker);
  yield takeEvery("DELETE_STUDENT", deleteStudentWorker);
  yield takeEvery("ADD_STUDENT", addStudentWorker);
}

// get students workers
function* getStudentsWorker() {
  try {
    const requestGetUser = () => {
      return axios.request({
        method: "get",
        url: "https://crudcrud.com/api/f1593358c6484ca1955df9f88e1e6b19/students",
      });
    };

    const response: AxiosResponse = yield call(requestGetUser);

    switch (response.status) {
      case 200:
        const data: students = {
          type: "STUDENTS",
          students: response.data,
        };
        yield put(data);
    }
  } catch (err) {}
}

// add student worker
function* addStudentWorker({ student }: addStudentAction) {
  try {
    let obj: any = { ...student };
    let date = moment().toISOString();
    obj.date = date;

    const createStudent = () => {
      return axios.request({
        method: "post",
        url: `https://crudcrud.com/api/f1593358c6484ca1955df9f88e1e6b19/students`,
        data: obj,
      });
    };

    const response: AxiosResponse = yield call(createStudent);

    switch (response.status) {
      case 201:
        const data: addStudent = {
          type: "CREATE_STUDENT",
          student: response.data,
        };
        yield put(data);
    }
  } catch (err) {}
}

// edit student worker
function* editStudentWorker({ student }: editStudentAction) {
  try {
    let obj: any = { ...student };
    delete obj._id;

    const editStudent = () => {
      return axios.request({
        method: "put",
        url: `https://crudcrud.com/api/f1593358c6484ca1955df9f88e1e6b19/students/${student._id}`,
        data: obj,
      });
    };

    const response: AxiosResponse = yield call(editStudent);
  } catch (err) {}
}

// delete student worker
function* deleteStudentWorker({ student_id }: deleteStudentAction) {
  const deleteStudent = () => {
    return axios.request({
      method: "delete",
      url: `https://crudcrud.com/api/f1593358c6484ca1955df9f88e1e6b19/students/${student_id}`,
    });
  };

  const response: AxiosResponse = yield call(deleteStudent);

  const data: deleteStudent = {
    type: "DELETE_ONE_STUDENT",
    student_id,
  };
  yield put(data);
}

export default todoSaga;
