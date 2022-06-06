import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// import components
import Navbar from "./sub-components/navbar";
import Summary from "./sub-components/summary";
import DataTable from "./sub-components/dataTable";

import { getStudents } from "../../state/ducks/students/actions";
import Student from "../../state/ducks/students/storeType";

export type student = {
  _id: string;
  name: string;
  marks: number;
  subject: string;
  grade: string;
};

const Students = () => {
  const dispatch = useDispatch();
  const students = useSelector<Student>((state) => state.students);

  useEffect(() => {
    dispatch(getStudents());
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <Summary data={students} />
      <DataTable data={students} />
    </React.Fragment>
  );
};

export default Students;
