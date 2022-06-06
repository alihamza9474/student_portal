import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Box, { BoxProps } from "@mui/material/Box";
import Styled from "styled-components";
import Button from "@mui/material/Button";

interface Student {
  _id: string;
  name: string;
  marks: number;
  subject: string;
  grade: string;
  date: string;
}

const Summary: React.FC<{ data: any }> = (props) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <SummaryHeading> Students Summary</SummaryHeading>
        <Button
          variant="outlined"
          onClick={() => navigate("/add-student")}
          style={{ width: "140px", color: "black", borderColor: "black" }}
        >
          + Add Data
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <SummaryItem>
          <SummaryTextHeading> Top Grade</SummaryTextHeading>
          <SummaryTextResult> A+ </SummaryTextResult>
        </SummaryItem>
        <SummaryItem>
          <SummaryTextHeading> Most Passed </SummaryTextHeading>
          <SummaryTextResult> English </SummaryTextResult>
        </SummaryItem>
        <SummaryItem style={{ background: "#FF6897" }}>
          <SummaryTextHeading> Lowest Grade</SummaryTextHeading>
          <SummaryTextResult> F </SummaryTextResult>
        </SummaryItem>
        <SummaryItem style={{ background: "#FF6897" }}>
          <SummaryTextHeading> Most Failed</SummaryTextHeading>
          <SummaryTextResult> Math </SummaryTextResult>
        </SummaryItem>
      </Box>
    </Container>
  );
};

const SummaryItem = Styled.div`
  width: 146px;
  height: 110px;
  left: 101px;
  top: 198px;
  background: #4AAA9A;
  border-radius: 6px;
`;

const SummaryTextHeading = Styled.h3`
  color: #FFFFFF;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

const SummaryTextResult = Styled.h2`
  margin: 0px;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #FFFFFF;
`;

const SummaryHeading = Styled.h1`
  margin: 0px;
  padding: 0px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
`;

const Container = Styled.div`
  margin: 40px;
`;

export default Summary;
