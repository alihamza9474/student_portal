import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Students from "./components/students/students";
import AddStudent from "./components/addStudent";
import EditStudent from "./components/editStudent";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Students />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/edit-student/:student_id" element={<EditStudent />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
