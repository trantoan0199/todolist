import React from "react"
import ThemeProvider from "share/ThemeProvider"
import { Routes, Route, BrowserRouter } from "react-router-dom"

import withFirebaseAuth from "react-with-firebase-auth"
import firebaseConfig from "./firebaseConfig"
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import "firebase/compat/database"
import "firebase/compat/storage"

import "./App.css"
import Home from "pages/Home"
import Login from "pages/Login"

const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseAppAuth = firebaseApp.auth()
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
}

function App(props) {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home {...props} />} />
          <Route path="/login" element={<Login {...props} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(App)
