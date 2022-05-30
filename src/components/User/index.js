import React from "react"
import { Box, Typography } from "@mui/material"
import LogoutButton from "components/AuthButton/LogoutButton"

export default function User({ user, signOut }) {
  return (
    <React.Fragment>
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
          <LogoutButton signOut={signOut} />
        </React.Fragment>
      )}
    </React.Fragment>
  )
}
