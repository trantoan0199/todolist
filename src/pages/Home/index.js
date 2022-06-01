import React, { useState } from "react"
import { Box } from "@mui/material"
import Filters from "components/Filters"
import FormTable from "components/FormTable"
import ResponsiveAppBar from "components/ResponsiveAppBar"

export default function Home(props) {
  const [open, setOpen] = useState(false)
  const [dataEdit, setDataEdit] = useState({})

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setDataEdit({})
  }

  return (
    <>
      <ResponsiveAppBar {...props} />
      <Box maxWidth={1000} margin="auto" px={2} mt={3}>
        <React.Fragment>
          <Filters
            dataEdit={dataEdit}
            setDataEdit={setDataEdit}
            open={open}
            setOpen={setOpen}
            handleOpen={handleOpen}
            handleClose={handleClose}
          />
          <FormTable handleOpen={handleOpen} setDataEdit={setDataEdit} />
        </React.Fragment>
      </Box>
    </>
  )
}
