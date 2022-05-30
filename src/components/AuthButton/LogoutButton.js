import React from "react"
import { Button } from "@mui/material"

export default function LogoutButton({ signOut }) {
  const handleLogout = () => {
    signOut()
  }

  return (
    <React.Fragment>
      <Button onClick={handleLogout} variant="contained">
        Logout
      </Button>
    </React.Fragment>
  )
}
