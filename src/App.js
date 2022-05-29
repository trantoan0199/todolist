import { Box, ThemeProvider, createTheme } from "@mui/material"
// import Title from "./components/Title"
import Filters from "./components/Filters/"
import FormTable from "./components/FormTable"
import { useState } from "react"
import "./App.css"

const theme = createTheme({
  typography: {
    fontFamily: `'Montserrat', sans-serif`,

    button: {
      fontWeight: 700
    }
  }
})

function App() {
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
    <ThemeProvider theme={theme}>
      <Box maxWidth={1000} margin="auto" px={2} mt={10}>
        <Filters
          dataEdit={dataEdit}
          setDataEdit={setDataEdit}
          open={open}
          setOpen={setOpen}
          handleOpen={handleOpen}
          handleClose={handleClose}
        />
        <FormTable handleOpen={handleOpen} setDataEdit={setDataEdit} />
      </Box>
    </ThemeProvider>
  )
}

export default App
