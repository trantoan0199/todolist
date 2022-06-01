import React, { useState, useEffect } from "react"
import {
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Table,
  Paper,
  LinearProgress,
  Box,
  TablePagination
} from "@mui/material"
import TableItem from "./TableItem"
import { useSelector, useDispatch } from "react-redux"
import { todosRemainingSelector } from "redux/selectors"
import { fetchListTodo } from "redux/callApi"

const FormTable = ({ handleOpen, setDataEdit }) => {
  const dispatch = useDispatch()
  const todoList = useSelector(todosRemainingSelector)
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)

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

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = e => {
    setRowsPerPage(parseInt(e.target.value, 10))
    setPage(0)
  }

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - todoList.length) : 0

  if (loading) {
    return <LinearProgress />
  }
  return (
    <Box>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table style={{ minWidth: 550 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">STT</TableCell>
              <TableCell align="center">NAME</TableCell>
              <TableCell align="center">STATUS</TableCell>
              <TableCell align="center"> ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {todoList.map((todo, index) => (
            <TableItem
              key={index}
              setDataEdit={setDataEdit}
              handleOpen={handleOpen}
              data={todo}
              index={index + 1}
            />
          ))} */}
            {todoList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((todo, index) => (
                <TableItem
                  key={index}
                  setDataEdit={setDataEdit}
                  handleOpen={handleOpen}
                  data={todo}
                  index={index + 1}
                />
              ))}
            {emptyRows > 0 && (
              <TableRow>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={todoList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  )
}

export default FormTable
