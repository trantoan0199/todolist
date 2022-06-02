import { Button } from "@mui/material"
import React from "react"

export default function AuthButton({ signInWithGoogle }) {
  const handleLogin = () => {
    signInWithGoogle()
  }

  return (
    <React.Fragment>
      <Button onClick={handleLogin} variant="contained">
        login with google
      </Button>
    </React.Fragment>
  )
}
