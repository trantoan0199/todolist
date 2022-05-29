import React, { useEffect } from "react";
// import PropTypes from 'prop-types'
import { HttpRequest } from "../../util/helper";
// import { getDataApi } from "../../redux/actions";
import {
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Table,
  Paper,
} from "@mui/material";
import TableItem from "./TableItem";
import { useSelector, useDispatch } from "react-redux";
import { todoListSelector } from "../../redux/selectors";
import { callApi, fetchListTodo } from "../../redux/callApi";

const FormTable = ({ handleOpen, setDataEdit }) => {
  const dispatch = useDispatch();
  const todoList = useSelector(todoListSelector);

  console.log("todoList", todoList);

  // const callApi = async () => {
  //   const res = await HttpRequest.getList("/list");
  //   dispatch(getDataApi(res.data));
  //   console.log("data", res.data);
  // };
  useEffect(() => {
    fetchListTodo(dispatch);
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table style={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">STT</TableCell>
            <TableCell align="center">NAME</TableCell>
            <TableCell align="center">STATUS</TableCell>
            <TableCell align="center">ACTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {todoList.map((todo, index) => (
            <TableItem
              key={index}
              setDataEdit={setDataEdit}
              handleOpen={handleOpen}
              data={todo}
              index={index + 1}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

FormTable.propTypes = {};

export default FormTable;
