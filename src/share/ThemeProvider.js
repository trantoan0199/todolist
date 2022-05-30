import React from "react"
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material"

const theme = createTheme({
  typography: {
    fontFamily: `'Montserrat', sans-serif`,

    button: {
      fontWeight: 700
    }
  }
})

const ThemeProvider = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

export default ThemeProvider
