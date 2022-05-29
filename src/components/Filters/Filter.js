import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Button,
  FormControlLabel,
  IconButton,
  InputBase,
  Modal,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";
import CreateData from "../CreateData.js/CreateData.js";
import { useDispatch } from "react-redux";
import { searchFilterChange, statusFilterChange } from "../../redux/actions.js";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Filters = (props) => {
  const { open, handleOpen, handleClose, dataEdit, setDataEdit } = props;
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState("All");

  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = () => {
    dispatch(searchFilterChange(search));
    setSearch("");
  };

  const handleFilterChange = (e) => {
    setFilters(e.target.value);
    dispatch(statusFilterChange(e.target.value));
  };
  return (
    <Box style={{ display: "block", margin: "auto" }}>
      <Box
        style={{ display: "flex", justifyContent: "center", margin: "10px 0" }}
      >
        <Paper
          component="form"
          sx={{
            padding: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <InputBase
            style={{ marginLeft: 1, flex: 1 }}
            placeholder="Nhập từ khóa..."
            value={search}
            onChange={handleSearchChange}
          />
          <IconButton
            style={{ padding: 10 }}
            aria-label="search"
            color="primary"
         //   onClick={() => handleSearchSubmit(search)}dispatch
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          color="primary"
          style={{ margin: "0 10px" }}
          startIcon={<AddIcon />}
          onClick={handleOpen}
        >
          Thêm Công Việc
        </Button>
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
      <RadioGroup
        row
        // defaultValue="All"
        style={{ display: "flex", justifyContent: "center" }}
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
  );
};

Filters.propTypes = {};

export default Filters;
