import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import Box, { BoxProps } from "@mui/material/Box";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { AxiosResponse } from "axios";
import { editStudent } from "../state/ducks/students/actions";

interface IFormInputs {
  _id: string;
  name: string;
  marks: number;
  subject: string;
  grade: string;
  date: string;
}

const schema = yup.object().shape({
  _id: yup.string(),
  date: yup.string(),
  name: yup.string().min(4).max(20).required(),
  marks: yup.number().min(0).max(100).required(),
  subject: yup.string(),
  grade: yup.string(),
});

const UpdateStudent: React.FC<{ data: any }> = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
    defaultValues: props.data,
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    dispatch(editStudent(data));
    navigate("/");
  };

  return (
    <div style={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          // flexDirection: "column",
          justifyContent: "center",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <div style={{ background: "none", width: "400px" }}>
          <Title>Edit Student Data </Title>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={control}
              // defaultValue={"alihamza"}
              render={({ field }) => (
                <>
                  <InputLabel htmlFor="name" style={{ textAlign: "left" }}>
                    Name
                  </InputLabel>
                  <TextField
                    style={{ width: "100%" }}
                    // value={student.name}
                    {...field}
                    // label="name"
                    variant="outlined"
                    error={!!errors.name}
                    helperText={errors.name ? errors.name?.message : ""}
                    fullWidth
                    margin="dense"
                  />
                </>
              )}
            />
            <br /> <br />
            <Controller
              name="marks"
              control={control}
              // defaultValue={0}
              render={({ field }) => (
                <>
                  <InputLabel htmlFor="marks" style={{ textAlign: "left" }}>
                    Marks
                  </InputLabel>
                  <TextField
                    style={{ width: "100%" }}
                    {...field}
                    // label="name"
                    type="number"
                    variant="outlined"
                    error={!!errors.marks}
                    helperText={errors.marks ? errors.marks?.message : ""}
                    fullWidth
                    margin="dense"
                    // value="alihamza"
                  />
                </>
              )}
            />
            <br /> <br />
            <Controller
              name="subject"
              control={control}
              // defaultValue="English"
              render={({ field }) => (
                <>
                  <InputLabel htmlFor="subject" style={{ textAlign: "left" }}>
                    Subject
                  </InputLabel>
                  <Select
                    {...field}
                    style={{ width: "100%", textAlign: "left" }}
                  >
                    <MenuItem
                      value="English"
                      style={
                        field.value === "English"
                          ? { background: "rgba(74, 170, 154, 0.8)" }
                          : {}
                      }
                    >
                      English
                    </MenuItem>
                    <MenuItem
                      value="Math"
                      style={
                        field.value === "Math"
                          ? { background: "rgba(74, 170, 154, 0.8)" }
                          : {}
                      }
                    >
                      Math
                    </MenuItem>
                    <MenuItem
                      value="Science"
                      style={
                        field.value === "Science"
                          ? { background: "rgba(74, 170, 154, 0.8)" }
                          : {}
                      }
                    >
                      Science
                    </MenuItem>
                  </Select>
                </>
              )}
            />
            <br /> <br />
            <Controller
              name="grade"
              control={control}
              // defaultValue="A+"
              render={({ field }) => (
                <>
                  <InputLabel htmlFor="grade" style={{ textAlign: "left" }}>
                    Grads
                  </InputLabel>
                  <Select
                    {...field}
                    style={{ width: "100%", textAlign: "left" }}
                  >
                    <MenuItem
                      value="A+"
                      style={
                        field.value === "A+"
                          ? { background: "rgba(74, 170, 154, 0.8)" }
                          : {}
                      }
                    >
                      A+
                    </MenuItem>
                    <MenuItem
                      value="B+"
                      style={
                        field.value === "B+"
                          ? { background: "rgba(74, 170, 154, 0.8)" }
                          : {}
                      }
                    >
                      B+
                    </MenuItem>
                    <MenuItem
                      value="F"
                      style={
                        field.value === "F"
                          ? { background: "rgba(74, 170, 154, 0.8)" }
                          : {}
                      }
                    >
                      F
                    </MenuItem>
                  </Select>
                </>
              )}
            />
            <br /> <br />
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button
                variant="outlined"
                style={{ width: "100px", color: "black", borderColor: "black" }}
                onClick={() => navigate("/")}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                style={{
                  width: "100px",
                  background: "rgba(74, 170, 154, 0.8)",
                }}
              >
                Edit
              </Button>
            </Box>
          </form>
        </div>
      </Box>
    </div>
  );
};

const EditStudent = () => {
  const [editStudent, setEditStudent] = useState<IFormInputs>();
  const [display, setDisplay] = useState(false);
  const { student_id } = useParams();

  useEffect(() => {
    try {
      const getStudent = async () => {
        let response = await axios.get(
          `https://crudcrud.com/api/f1593358c6484ca1955df9f88e1e6b19/students/${student_id}`
        );

        switch (response.status) {
          case 200:
            setEditStudent(response.data);
            setDisplay(true);
        }
      };

      getStudent();
    } catch (err) {
      console.log("error: ", err);
    }
  }, []);

  return (
    <>
      {display === false ? (
        <div style={{ margin: "200px" }}>
          <CircularProgress />
        </div>
      ) : (
        <>
          <UpdateStudent data={editStudent} />
        </>
      )}
    </>
  );
};

const Title = styled.h5`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
`;

export default EditStudent;
