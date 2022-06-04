import React, { useEffect, useState } from "react"
import CancelIcon from "@mui/icons-material/Cancel"
import SaveIcon from "@mui/icons-material/Save"
import { Box, Button, MenuItem, TextField, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { addData, editDataApi } from "redux/callApi"
import { isEmpty } from "lodash"
const currencies = [
  {
    value: true,
    label: "Completed"
  },
  {
    value: false,
    label: "Todo"
  }
]

const CreateData = props => {
  const { handleClose, dataEdit, setDataEdit } = props
  const [status, setStatus] = useState(false)
  const [name, setName] = useState("")
  const [id, setId] = useState("")
  const dispatch = useDispatch()
  useEffect(() => {
    setName(dataEdit.name)
    setStatus(dataEdit.status)
    setId(dataEdit.id)
  }, [dataEdit])

  const handleSubmit = () => {
    handleClose && handleClose()
    addData(dispatch, {
      id: id,
      name: name,
      status: status
    })
    setDataEdit({})
  }
  const handleSubmitEdit = () => {
    editDataApi(dispatch, {
      id: dataEdit.id,
      name: name,
      status: status
    })
    handleClose && handleClose()
    setDataEdit({})
  }

  const handleNameChange = e => {
    setName(e.target.value)
  }

  const handleStatusChange = e => {
    setStatus(e.target.value)
  }

  return (
    <div>
      <Typography component="h2">
        {isEmpty(dataEdit) ? "Add Work:" : "Update Work:"}
      </Typography>
      <TextField
        label="Name:"
        variant="outlined"
        style={{ width: 400 }}
        onChange={handleNameChange}
        value={name}
        size="small"
        margin="dense"
      />
      <TextField
        id="outlined-select-currency"
        select
        label="Status:"
        value={status}
        onChange={handleStatusChange}
        variant="outlined"
        style={{ width: 400 }}
        margin="dense"
        size="small"
      >
        {currencies.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box display="flex" justifyContent="space-between" mt={2}>
        {!isEmpty(dataEdit) ? (
          <Button
            variant="contained"
            color="primary"
            startIcon={<SaveIcon />}
            onClick={handleSubmitEdit}
          >
            Update
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            startIcon={<SaveIcon />}
            onClick={handleSubmit}
          >
            Save
          </Button>
        )}
        <Button
          variant="contained"
          color="error"
          startIcon={<CancelIcon />}
          onClick={handleClose}
        >
          Cancel
        </Button>
      </Box>
    </div>
  )
}

CreateData.propTypes = {}

export default CreateData
