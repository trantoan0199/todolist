import React, { useState } from "react"
import DeleteForeverIcon from "@mui/icons-material/DeleteForever"
import EditIcon from "@mui/icons-material/Edit"
import { Button, TableCell, TableRow, CircularProgress } from "@mui/material"
import { useDispatch } from "react-redux"
import { deleteDataApi, editStatusApi } from "../../redux/callApi"

const TableItem = props => {
  const { index, data, handleOpen, setDataEdit } = props

  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()

  const handleToggleDelete = () => {
    deleteDataApi(dispatch, data.id)
  }

  const handleEdit = () => {
    handleOpen()
    setDataEdit({
      id: data.id,
      name: data.name,
      status: data.status
    })
  }
  const handleStatus = async () => {
    try {
      setLoading(true)
      await editStatusApi(dispatch, { ...data, status: !data.status })
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }
  return (
    <TableRow>
      <TableCell component="th" scope="row" align="center">
        {index}
      </TableCell>
      <TableCell align="center">{data.name}</TableCell>
      <TableCell align="center">
        <Button
          variant="outlined"
          onClick={handleStatus}
          color={data.status ? "error" : "primary"}
          disabled={loading}
          startIcon={
            loading ? (
              <CircularProgress
                size={20}
                color={data.status ? "error" : "primary"}
              />
            ) : null
          }
        >
          {data.status ? "Completed" : "Todo"}
        </Button>
      </TableCell>
      <TableCell align="center">
        <Button
          variant="contained"
          onClick={() => handleEdit()}
          color="success"
          startIcon={<EditIcon />}
          sx={{ mr: 1 }}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="error"
          endIcon={<DeleteForeverIcon />}
          onClick={() => handleToggleDelete(data.id)}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  )
}

TableItem.propTypes = {}

export default TableItem
