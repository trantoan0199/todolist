import React from "react"
import {
  Box,
  ThemeProvider,
  createTheme,
  Button,
  Typography
} from "@mui/material"
import Filters from "components/Filters"
import FormTable from "components/FormTable"
import { useState } from "react"

import withFirebaseAuth from "react-with-firebase-auth"
import firebaseConfig from "./firebaseConfig"
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/database"
import "firebase/compat/storage"

import "./App.css"

const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseAppAuth = firebaseApp.auth()
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
}

const theme = createTheme({
  typography: {
    fontFamily: `'Montserrat', sans-serif`,

    button: {
      fontWeight: 700
    }
  }
})

function App(props) {
  const { user, signOut, signInWithGoogle } = props

  console.log(props, "props")
  const [open, setOpen] = useState(false)
  const [dataEdit, setDataEdit] = useState({})
  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setDataEdit({})
  }

  const handleLogin = () => {
    signInWithGoogle()
  }

  const handleLogout = () => {
    signOut()
  }

  return (
    <ThemeProvider theme={theme}>
      <Box maxWidth={1000} margin="auto" px={2} mt={10}>
        {user ? (
          <Button onClick={handleLogout} variant="outlined">
            Logout
          </Button>
        ) : (
          <Button onClick={handleLogin} variant="contained">
            Login
          </Button>
        )}

        {user && (
          <React.Fragment>
            <Box mt={2}>
              <img
                src={user?.multiFactor?.user?.photoURL}
                alt="avatar"
                style={{ width: 60, height: 60, borderRadius: "50%" }}
              />
            </Box>
            <Box mt={2}>
              <Typography variant="button">{`Hello: ${user?.multiFactor?.user?.displayName}`}</Typography>
            </Box>
            <Box>
              <Typography variant="caption">{`Email: ${user?.multiFactor?.user?.email}`}</Typography>
            </Box>
          </React.Fragment>
        )}

        {user ? (
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
        ) : (
          <Typography variant="h6" display="block" sx={{ mt: 2 }}>
            Please login with google authentication
          </Typography>
        )}
      </Box>
    </ThemeProvider>
  )
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(App)
