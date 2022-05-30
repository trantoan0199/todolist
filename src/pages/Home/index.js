import React, { useState } from "react"
import { Box } from "@mui/material"
import User from "components/User"
import Filters from "components/Filters"
import FormTable from "components/FormTable"
import { Navigate } from "react-router"

export default function Home({ user, signOut }) {
  const [open, setOpen] = useState(false)
  const [dataEdit, setDataEdit] = useState({})
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setDataEdit({})
  }

  if (!user) {
    return <Navigate to="/login" />
  }

  return (
    <Box maxWidth={1000} margin="auto" px={2} mt={10}>
      <User user={user} signOut={signOut} />
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
  )
}
