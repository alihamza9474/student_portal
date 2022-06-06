import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import Styled from "styled-components";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import ModeEditIcon from "@mui/icons-material/ModeEdit"; //edit icon
import DeleteIcon from "@mui/icons-material/Delete"; //delete icon

import { deleteStudent } from "../../../state/ducks/students/actions";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
];

const options = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel",
];

const ITEM_HEIGHT = 48;

interface Student {
  _id: string;
  name: string;
  marks: number;
  subject: string;
  grade: string;
  date: string;
}

const DropDownComponent: React.FC<{ student: Student }> = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const editHandler = () => {
    setAnchorEl(null);
  };

  const deleteHandler = () => {
    setAnchorEl(null);
    let student_id = props.student._id;

    dispatch(deleteStudent(student_id));
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "18ch",
          },
        }}
      >
        <MenuItem
          onClick={() => {
            navigate(`/edit-student/${props.student._id}`, {
              state: props.student,
            });
          }}
        >
          <Box sx={{ display: "flex" }}>
            <div>
              <ModeEditIcon style={{ color: "#8797AE" }} />
            </div>
            <div style={{ marginLeft: "20px" }}> Edit </div>
          </Box>
        </MenuItem>
        <MenuItem onClick={() => deleteHandler()}>
          <Box sx={{ display: "flex" }}>
            <div>
              <DeleteIcon style={{ color: "#8797AE" }} />
            </div>
            <div style={{ marginLeft: "20px" }}> Delete </div>
          </Box>
        </MenuItem>
      </Menu>
    </>
  );
};

// { data: Student }
const DataTable: React.FC<{ data: any }> = (props) => {
  const navigate = useNavigate();

  const [students, setStudents] = useState([
    {
      name: "John Doe",
      marks: 80,
      subject: "Math",
      grade: "B+",
      date: "2022-05-31T09:59:20+00:00",
      _id: "629daaf26f047803e8ae7fe12",
    },
    {
      name: "Ali-Hamza",
      marks: 80,
      subject: "English",
      grade: "B+",
      date: "2022-05-31T09:59:20+00:00",
      _id: "629daaf26f047803e8ae7f13",
    },
    {
      name: "Bilal",
      marks: 80,
      subject: "Math",
      grade: "B+",
      date: "2022-05-31T09:59:20+00:00",
      _id: "629daaf26f047803e8ae7f14",
    },
    {
      name: "Umair",
      marks: 80,
      subject: "Math",
      grade: "B+",
      date: "2022-05-31T09:59:20+00:00",
      _id: "629daaf26f047803e8ae7f15",
    },
    {
      name: "Zubair",
      marks: 80,
      subject: "Math",
      grade: "B+",
      date: "2022-05-31T09:59:20+00:00",
      _id: "629daaf26f047803e8ae7f16",
    },
    {
      name: "Jamshed",
      marks: 80,
      subject: "Math",
      grade: "B+",
      date: "2022-05-31T09:59:20+00:00",
      _id: "629daaf26f047803e8ae7f18",
    },
  ]);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const editHandler = () => {
    setAnchorEl(null);
  };

  const deleteHandler = () => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell> Name</TableCell>
              <TableCell align="left">Marks</TableCell>
              <TableCell align="left">Subject</TableCell>
              <TableCell align="left">Grade</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data &&
              props.data.map((row: Student, index: number) => (
                <TableRow key={index}>
                  <TableCell align="left" onClick={() => console.log(row.name)}>
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.marks}</TableCell>
                  <TableCell align="left">{row.subject}</TableCell>
                  <TableCell align="left">{row.grade}</TableCell>
                  <TableCell align="left">
                    {moment(row.date).format("MMMM Do YYYY, h:mm:ss a")}
                  </TableCell>
                  <TableCell align="left">
                    <DropDownComponent student={row} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

const Container = Styled.div`
  margin: 50px;
`;

export default DataTable;
