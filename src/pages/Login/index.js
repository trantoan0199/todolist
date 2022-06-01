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

const style = {
  backgroundImage: `url(${"https://cdnimg.vietnamplus.vn/t870/Uploaded/ngtnnn/2017_08_13/1308phomay.jpg)"}`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
  display: "flex"
}

export default function Login({ signInWithGoogle, signOut, user }) {
  if (user) {
    return <Navigate to="/" />
  }
  return (
    <div style={style}>
      <Container
        sx={{
          // background: "red",
          height: "80%",
          width: "40%",
          display: "block",
          m: "auto"
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
            textShadow: "2px 0.5px #fff"
          }}
        >
          login form
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <ButtonGroup variant="contained" sx={{ width: 235 }}>
            <Button size="small">
              <FacebookIcon />
            </Button>
            <Button size="small">login with facebook</Button>
          </ButtonGroup>
          <ButtonGroup variant="contained" sx={{ width: 235 }}>
            <Button size="small">
              <GoogleIcon />
            </Button>
            <Button size="small">login with google</Button>
          </ButtonGroup>
        </Box>

        <AutorenewIcon
          sx={{ background: "#fff", fontSize: 35, borderRadius: "50%" }}
        />

        <FormControl
          sx={{ m: 1, width: "25ch", background: "#fff" }}
          variant="outlined"
          autoComplete="off"
        >
          <InputLabel>User Name</InputLabel>
          <OutlinedInput
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end" disabled>
                  <PersonIcon />
                </IconButton>
              </InputAdornment>
            }
            label="User Name"
          />
        </FormControl>
        <FormControl
          sx={{ m: 1, width: "25ch", background: "#fff" }}
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
        <Box>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember me"
          />
          <Typography>Forgot your password?</Typography>
        </Box>
        <Button
          variant="contained"
          size="large"
          sx={{ width: 500, ml: "-15px" }}
        >
          login
        </Button>
        <Typography>
          Not a member?<span>Sign up now!</span>
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
