import React, { useState } from "react"
import SearchIcon from "@mui/icons-material/Search"
import AddIcon from "@mui/icons-material/Add"
import {
  Box,
  Button,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputBase,
  Modal,
  Paper,
  Radio,
  RadioGroup,
  TextField
} from "@mui/material"
import CreateData from "../CreateData.js/CreateData.js"
import { useDispatch } from "react-redux"
import { searchFilterChange, statusFilterChange } from "../../redux/actions.js"

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
  const [filters, setFilters] = useState("All")

  const dispatch = useDispatch()

  const handleSearchChange = e => {
    setSearch(e.target.value)
  }

  const handleSearchSubmit = () => {
    dispatch(searchFilterChange(search))
    setSearch("")
  }

  const handleFilterChange = e => {
    setFilters(e.target.value)
    dispatch(statusFilterChange(e.target.value))
  }
  return (
    <Box style={{ display: "block", margin: "auto" }}>
      <Box>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <TextField
            label="Search"
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
          value={filters}
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
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
