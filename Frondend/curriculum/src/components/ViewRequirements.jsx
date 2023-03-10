import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Navbar from "../Navbar/Navbar";
import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Sidemenu from "./FacultyDash";
import Box from "@mui/material/Box";

const View = () => {
  const [APIData, setAPIData] = useState([]);
  const [curriculum, setCurriculum] = useState([]);
  
  const inputref = useRef();
  console.log(inputref);
  const userId = localStorage.getItem("userId");
  console.log(userId);
  useEffect(() => {
    axios.get(`http://localhost:3001/requirements`).then((response) => {
      console.log(response.data);
      setAPIData(response.data);
    });
    axios.get(`http://localhost:3001/data`).then((response) => {
      setCurriculum(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <Box
        sx={{ display: "flex", backgroundColor: "beige", height: 600, mt: 5 }}
      >
        <Sidemenu />
        <TableContainer component={Paper}>
          <Table
            sx={{ width: "100%", marginTop: "80px", backgroundColor: "beige" }}
            aria-label="simple table"
          >
            <TableHead>
              <Typography
                gutterBottom
                variant="h4"
                fontFamily="cursive"
                component="div"
                color="#000"
              >
                Requirements
              </Typography>
              <TableRow>
                <TableCell component="th" scope="row">
                  Name Of Requirement
                </TableCell>
                <TableCell align="right">Area Of Training</TableCell>
                <TableCell align="right">category</TableCell>
                <TableCell align="right">Organisation/Institution</TableCell>
                <TableCell align="right">No Of Hours</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {APIData.map((data) => (
                <TableRow
                  key={data._id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {data.title}
                  </TableCell>
                  <TableCell align="right">{data.type}</TableCell>
                  <TableCell align="right">{data.category}</TableCell>
                  <TableCell align="right">{data.organisation}</TableCell>
                  <TableCell align="right">{data.hours}</TableCell>
                  <TableCell align="right">
                    <Link to={`/curriculum/${data._id}`}>Respond</Link>

                   
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};
export default View;
