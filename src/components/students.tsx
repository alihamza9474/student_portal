import React from "react";
import { useNavigate } from "react-router-dom";

const Students = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <ul>
        <li> Students</li>
        <li onClick={() => navigate("/add-student")}> Add student </li>
        <li onClick={() => navigate("/edit-student/1234")}> Edit student </li>
      </ul>
    </React.Fragment>
  );
};

export default Students;
