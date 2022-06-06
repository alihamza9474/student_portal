import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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

import { addStudent } from "../state/ducks/students/actions";

interface IFormInputs {
  name: string;
  marks: number;
  subject: string;
  grade: string;
}

const schema = yup.object().shape({
  name: yup.string().required(),
  marks: yup.number().min(1).max(100).required(),
  subject: yup.string(),
  grade: yup.string(),
});

const AddStudent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    dispatch(addStudent(data));
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
          <Title>Add Student Data </Title>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <>
                  <InputLabel htmlFor="name" style={{ textAlign: "left" }}>
                    Name
                  </InputLabel>
                  <TextField
                    style={{ width: "100%" }}
                    {...field}
                    // label="name"
                    variant="outlined"
                    error={!!errors.name}
                    helperText={errors.name ? errors.name?.message : ""}
                    fullWidth
                    margin="dense"
                    // value="alihamza"
                  />
                </>
              )}
            />
            <br /> <br />
            <Controller
              name="marks"
              control={control}
              defaultValue={0}
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
              defaultValue="English"
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
              defaultValue="A+"
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
                Add
              </Button>
            </Box>
          </form>
        </div>
      </Box>
    </div>
  );
};

const Title = styled.h5`
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
`;

export default AddStudent;
