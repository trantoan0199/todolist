import React from "react"
import { Box } from "@mui/material"
import AuthButton from "components/AuthButton"
import { Navigate } from "react-router"

export default function Login({ signInWithGoogle, signOut, user }) {
  if (user) {
    return <Navigate to="/" />
  }
  return (
    <div>
      <Box maxWidth={1000} margin="auto" px={2} mt={10}>
        <AuthButton
          signInWithGoogle={signInWithGoogle}
          signOut={signOut}
          user={user}
        />
      </Box>
    </div>
  )
}
