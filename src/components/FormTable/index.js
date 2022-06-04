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
import { todosRemainingSelector, totalTodoListSelector } from "redux/selectors"
import { fetchListTodo } from "redux/callApi"
import queryString from "query-string"
import { useLocation } from "react-router"
import { useNavigate } from "react-router"

const FormTable = ({ handleOpen, setDataEdit }) => {
  const dispatch = useDispatch()
  const todoList = useSelector(todosRemainingSelector)
  const total = useSelector(totalTodoListSelector)

  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)

  const location = useLocation()
  const navigate = useNavigate()

  const fetchList = async params => {
    setLoading(true)
    try {
      await fetchListTodo(dispatch, params)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const params = queryString.parse(location.search)
    fetchList(params)
  }, [location])

  const handleChangePage = (event, page) => {
    setPage(page)
    const params = { page: page, limit: 10 }
    navigate(`?${queryString.stringify(params)}`)
  }

  return (
    <Box>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        {loading && <LinearProgress />}
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
            {!loading &&
              todoList.map((todo, index) => (
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
      <TablePagination
        component="div"
        count={total}
        rowsPerPage={5}
        page={page}
        onPageChange={handleChangePage}
      />
    </Box>
  )
}

export default FormTable
