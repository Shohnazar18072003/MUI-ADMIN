// import { Button, Checkbox, Flex, Form, Input, message } from "antd";
// import PropTypes from "prop-types";
// import {useNavigate } from "react-router-dom";
// import { IS_LOGIN } from "../../const";

// import "./Login.scss";

// const LoginPage = ({setIsLogin}) => {
//   const navigate = useNavigate();
//   const onFinish = (values) => {
//    const {username, password} = values;
//    if (username === 'SHOHNAZAR' && password === 'SHOHNAZAR'){
//       setIsLogin(true);
//       localStorage.setItem(IS_LOGIN, true)
//       navigate("/dashboard");
//    } else{
//       message.error('No username or password')
//    }
//   };
//   return (
//     <Flex
//       className="login-page"
//       style={{ height: "100vh" }}
//       align="center" 
//       justify="center"
//     >
//       <div className="main"></div>
//       <Form
//         name="basic"
//         labelCol={{
//           span: 24,
//         }}
//         wrapperCol={{
//           span: 24,
//         }}
//         style={{
//           maxWidth: 600,
//           border: `1px solid #ccc`,
//           padding: `20px`,
//           borderRadius: "10px",
//           backgroundColor: "#444",
//           boxShadow: "0px 0px 30px rgba(255, 255, 255, 0.5)",
//           color: "#FFFFFF",
//         }}
//         initialValues={{
//           remember: true,
//         }}
//         onFinish={onFinish}
//         autoComplete="off"
//       >
//         <Form.Item
//           className="username"
//           label="Username"
//           name="username"
//           style={{
//             color: "white",
//           }}
//           rules={[
//             {
//               required: true,
//               message: "Please input your username!",
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item
//           label="Password"
//           name="password"
//           style={{
//             color: "white",
//           }}
//           rules={[
//             {
//               required: true,
//               message: "Please input your password!",
//             },
//           ]}
//         >
//           <Input.Password />
//         </Form.Item>

//         <Form.Item
//           name="remember"
//           valuePropName="checked"
//           wrapperCol={{
//             span: 24,
//           }}
//         >
//           <Checkbox
//             style={{
//               color: "white",
//             }}
//           >
//             Remember me
//           </Checkbox>
//         </Form.Item>

//         <Form.Item
//           wrapperCol={{
//             span: 24,
//           }}
//         >
//           <Button style={{ width: "100%" }} type="primary" htmlType="submit">
//             Login
//           </Button>
//         </Form.Item>
//       </Form>
//     </Flex>
//   );
// };

// LoginPage.propTypes = {
//   setIsLogin: PropTypes.func,
// };

// export default LoginPage;



import * as React from 'react';
import PropTypes from "prop-types";
import {useNavigate } from "react-router-dom";
import { IS_LOGIN } from "../../const";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const defaultTheme = createTheme();

const SignIn = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    navigate("/dashboard");
    console.log({
      username: data.get('username'),
      password: data.get('password'),
    });
  };

  const navigate = useNavigate();
  // const handleSubmit = (values) => {
  //   const data = new FormData(values.currentTarget);
  //   const {username, password} = values;
  //   values.preventDefault();
  //  if (username === 'SHOHNAZAR' && password === 'SHOHNAZAR'){
  //     setIsLogin(true);
  //     localStorage.setItem(IS_LOGIN, true)
  //     navigate("/dashboard");
  //  } else{
  //     console.log("Error");
  //  }
  // };


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box 
          component="form"  
          sx={{ mt: 1 }} 
          onSubmit={handleSubmit}
          autoComplete='off' 
         >
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="text"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

SignIn.propTypes = {
  setIsLogin: PropTypes.func,
};

export default SignIn;