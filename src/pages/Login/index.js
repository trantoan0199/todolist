import React from "react"
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography
} from "@mui/material"
// import AuthButton from "components/AuthButton"
import { Navigate } from "react-router"
import FacebookIcon from "@mui/icons-material/Facebook"
import GoogleIcon from "@mui/icons-material/Google"
import AutorenewIcon from "@mui/icons-material/Autorenew"
import PersonIcon from "@mui/icons-material/Person"
import VisibilityIcon from "@mui/icons-material/Visibility"
import AuthButton from "components/AuthButton"

const style = {
  backgroundImage: `url(${"https://img.idesign.vn/2010/11/anh_trang_den_04.jpg"})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100vh",
  alignItems: "center",
  display: "flex"
}

export default function Login({ signInWithGoogle, signOut, user }) {
  console.log({ signInWithGoogle, signOut, user })
  if (user) {
    return <Navigate to="/" />
  }
  return (
    <div style={style}>
      <Container
        sx={{
          height: "80%",
          width: "40%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Typography
          component="h2"
          variant="h2"
          sx={{
            fontSize: "3rem",
            fontWeight: 700,
            height: 50,
            textTransform: "uppercase",
            color: "#00246D",
            textShadow: "2px 0.5px #fff",
            margin: "20px 0"
          }}
        >
          login form
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "109%"
          }}
        >
          <ButtonGroup variant="contained" sx={{ width: "45%" }}>
            <Button size="small">
              <FacebookIcon />
            </Button>
            <Button size="small">login with facebook</Button>
          </ButtonGroup>
          <ButtonGroup variant="contained" sx={{ width: "45%" }}>
            <Button size="small">
              <GoogleIcon />
            </Button>
            <Button size="small" sx={{ width: "100%" }}>
              <AuthButton
                signInWithGoogle={signInWithGoogle}
                signOut={signOut}
                user={user}
              />
            </Button>
          </ButtonGroup>
        </Box>

        <AutorenewIcon
          sx={{
            background: "#fff",
            fontSize: 35,
            borderRadius: "50%",
            mt: 2,
            mb: 3,
            color: "#877474"
          }}
        />

        <FormControl
          sx={{ width: "110%", background: "#DEDEDE" }}
          variant="outlined"
          autoComplete="off"
        >
          <InputLabel>User Name</InputLabel>
          <OutlinedInput
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end" disabled>
                  <PersonIcon sx={{ color: "#0D7BF9" }} />
                </IconButton>
              </InputAdornment>
            }
            label="User Name"
          />
        </FormControl>
        <FormControl
          sx={{ mt: 3, width: "110%", background: "#DEDEDE" }}
          variant="outlined"
          autoComplete="off"
        >
          <InputLabel>Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" edge="end">
                  <VisibilityIcon />
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Box
          sx={{
            justifyContent: "space-between",
            display: "flex",
            alignItems: "center",
            width: "110%",
            color: "#CCCED0",
            margin: "15px 0"
          }}
        >
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember me"
          />
          <Typography>Forgot your password?</Typography>
        </Box>
        <Button
          variant="contained"
          size="large"
          sx={{ width: "110%", backgroundColor: "#264E79" }}
        >
          login
        </Button>
        <Typography sx={{ marginTop: "15px", color: "#d2d7df" }}>
          Not a member?<span style={{ color: "#055EBF" }}>Sign up now!</span>
        </Typography>
      </Container>
      {/* <Box maxWidth={1000} margin="auto" px={2}>
        <AuthButton
          signInWithGoogle={signInWithGoogle}
          signOut={signOut}
          user={user}
        />
      </Box> */}
    </div>
  )
}
