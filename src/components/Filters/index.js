import React, { useRef, useState } from "react"
import SearchIcon from "@mui/icons-material/Search"
import AddIcon from "@mui/icons-material/Add"
import {
  Box,
  Button,
  FormControlLabel,
  IconButton,
  InputAdornment,
  LinearProgress,
  Modal,
  Radio,
  RadioGroup,
  TextField
} from "@mui/material"
import { useDispatch } from "react-redux"
import { searchFilter, statusFilter } from "redux/callApi"
import CreateData from "components/CreateData.js"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
}

const Filters = props => {
  const { open, handleOpen, handleClose, dataEdit, setDataEdit } = props
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("All")
  const [loading, setLoading] = useState(false)
  const typingSearch = useRef(null)

  const dispatch = useDispatch()

  const handleSearchFilterChange = e => {
    const value = e.target.value
    setSearch(value)

    //DEBOUNCE
    //set--100--clear, set--300-submit
    if (typingSearch.current) {
      clearTimeout(typingSearch.current)
    }

    typingSearch.current = setTimeout(() => {
      searchFilter(dispatch, value)
    }, 300)
  }

  const handleFilterChange = async e => {
    try {
      setLoading(true)
      setStatus(e.target.value)
      await statusFilter(dispatch, e.target.value)
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box style={{ display: "block", margin: "auto" }}>
      <Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <TextField
            autoComplete="off"
            label="Search"
            value={search}
            onChange={handleSearchFilterChange}
            id="outlined-start-adornment"
            margin="dense"
            size="small"
            sx={{ mr: 2 }}
            placeholder="Enter value"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={handleOpen}
          >
            Add work
          </Button>
        </Box>
        <RadioGroup
          sx={{ mt: 1 }}
          row
          value={status}
          onChange={handleFilterChange}
        >
          <FormControlLabel value="All" control={<Radio />} label="All" />
          <FormControlLabel
            value="Completed"
            control={<Radio />}
            label="Completed"
          />
          <FormControlLabel value="Todo" control={<Radio />} label="Todo" />
        </RadioGroup>
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <CreateData
            handleClose={handleClose}
            dataEdit={dataEdit}
            setDataEdit={setDataEdit}
          />
        </Box>
      </Modal>
    </Box>
  )
}

Filters.propTypes = {}

export default Filters
