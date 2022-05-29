import React, { useState, useEffect } from "react"
import {
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Table,
  Paper,
  LinearProgress
} from "@mui/material"
import TableItem from "./TableItem"
import { useSelector, useDispatch } from "react-redux"
import { todoListSelector } from "../../redux/selectors"
import { fetchListTodo } from "../../redux/callApi"

const FormTable = ({ handleOpen, setDataEdit }) => {
  const dispatch = useDispatch()
  const todoList = useSelector(todoListSelector)

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchList = async () => {
      setLoading(true)
      try {
        await fetchListTodo(dispatch)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    fetchList()
  }, [])

  if (loading) {
    return <LinearProgress />
  }
  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>
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
  )
}

FormTable.propTypes = {}

export default FormTable
