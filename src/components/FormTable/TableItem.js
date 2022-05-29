import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { Button, TableCell, TableRow } from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteDataApi, editStatusApi } from "../../redux/callApi";

const TableItem = (props) => {
  const { index, data, handleOpen, setDataEdit } = props;

  console.log("data", data);

  const dispatch = useDispatch();

  const handleToggleDelete = () => {
    deleteDataApi(dispatch, data.id);
  };

  const handleEdit = () => {
    handleOpen();
    setDataEdit({
      name: data.name,
      status: data.status,
      id: data.id,
    });
  };
  const handleStatus = () => {
    editStatusApi(dispatch, data);
  };
  return (
    <TableRow>
      <TableCell component="th" scope="row" align="center">
        {index}
      </TableCell>
      <TableCell align="center">{data.name}</TableCell>
      <TableCell align="center">
        <Button
          variant="outlined"
          // onClick={handleStatus}
          color={data.status ? "error" : "primary"}
        >
          {data.status ? "Completed" : "Todo"}
        </Button>
      </TableCell>
      <TableCell align="center">
        <Button
          variant="contained"
          // onClick={() => handleEdit(data)}
          color="success"
          startIcon={<EditIcon />}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="error"
          endIcon={<DeleteForeverIcon />}
          // onClick={() => handleToggleDelete(data.id)}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};

TableItem.propTypes = {};

export default TableItem;
