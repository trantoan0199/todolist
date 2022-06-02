import React, { useState } from "react"
import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography
} from "@mui/material"
// import LogoutButton from "components/AuthButton/LogoutButton"

const settings = ["Profile", "Account", "Dashboard", "Logout"]
export default function User({ user, signOut }) {
  const [anchorElUser, setAnchorElUser] = useState(null)

  const handleOpenUserMenu = e => {
    setAnchorElUser(e.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  return (
    <React.Fragment>
      {/* {user && (
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
      )} */}
      {user && (
        <React.Fragment>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title={`${user?.multiFactor?.user?.displayName}`}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt={user?.multiFactor?.user?.displayName}
                  src={user?.multiFactor?.user.photoURL}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map(setting => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={signOut}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </React.Fragment>
      )}
    </React.Fragment>
  )
}
