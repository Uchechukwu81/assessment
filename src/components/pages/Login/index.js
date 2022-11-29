// import React, { useState } from "react";
// // import BaseModal from "./BaseModal";
// // import { useTheme } from "@emotion/react";
// import { useAuth, useLoader } from "../../../hooks";
// import { Button, Typography } from "@mui/material";
// import { useFormik } from "formik";
// // import Image from "next/image";
// import * as yup from "yup";
// // import loginBackground from "../../../assests/back.jpg";
// // import Logo from "../../../assests/ubaLogo.jpg";
// import ControlledTextField from "../../ControlledComponents/ControlledTextField";
// // import { adminLogin } from "../AdminLogin";
// import { getErrorResponseMessage } from "../../../helpers/getErrorResponseMessage";
// import { useSnackbar } from "notistack";
// import InputAdornment from "@mui/material/InputAdornment";
// import IconButton from "@mui/material/IconButton";
// // import ControlledPasswordField from "../../ControlledComponents/ControlledPasswordField";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import { useRouter } from "next/router";
// // import Link from "next/link";
// import { Grid } from "@mui/material";

// const Login = () => {
//   const { displayLoader, hideLoader } = useLoader();
//   const { signIn } = useAuth();

//   const router = useRouter();

//   const { enqueueSnackbar } = useSnackbar();
//   // const navigate = useNavigate();
//   const validationSchema = yup.object({
//     email: yup.string("").email().required("Please enter an email"),
//     password: yup.string("").required("Please enter a password"),
//   });

//   const [values, setValues] = useState({
//     amount: "",
//     password: "",
//     weight: "",
//     weightRange: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);

//   const handleClickShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleMouseDownPassword = () =>
//     // event: React.MouseEvent<HTMLButtonElement>
//     {
//       // event.preventDefault();
//     };

//   const onSubmit = async (value) => {
//     console.log(value);
//     displayLoader();

//     try {
//       router.push("/questions", undefined, { replace: true });
//     } catch (err) {
//       console.log(err);
//       enqueueSnackbar(getErrorResponseMessage(err) || err.message);
//     } finally {
//       hideLoader();
//     }
//   };

//   const { setFieldValue, ...formik } = useFormik({
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     onSubmit,
//     validationSchema,
//   });

//   // const goToHome = () => {
//   // };

//   return (
//     <>
//       <Grid
//         container
//         spacing={1}
//         style={{
//           // backgroundImage: `url(${loginBackground.src})`,
//           // backgroundRepeat: "no-repeat",
//           // backgroundSize: "cover",
//           height: "100vh",
//           width: "100vw",
//         }}
//       >
//         <Grid
//           container
//           spacing={0}
//           sx={{ alignItems: "center" }}
//           component="form"
//         >
//           {/* a */}
//           <Grid xs={2} md={2}></Grid>

//           <Grid xs={10} md={10}>
//             {/* <Grid sx={{ marginLeft: "-17px" }}>
//               {" "}
//               <Image src={Logo} alt="Uba Logo" />
//             </Grid> */}
//             {/* <Image src={Logo} alt="Uba Logo" /> */}

//             <Typography variant="h4">Login</Typography>

//             <ControlledTextField
//               label="Email address"
//               name="email"
//               type="email"
//               placeholder="Enter email address"
//               formik={formik}
//               variant="standard"
//               sx={{ maxWidth: 500, m: 0, mt: 3 }}
//             />
//             <ControlledTextField
//               label="Password"
//               name="password"
//               variant="standard"
//               type={showPassword ? "text" : "password"}
//               placeholder="Enter password"
//               formik={formik}
//               sx={{ maxWidth: 500, m: 0 }}
//               endAdornment={
//                 <InputAdornment position="end">
//                   <IconButton
//                     aria-label="toggle password visibility"
//                     onClick={handleClickShowPassword}
//                     onMouseDown={handleMouseDownPassword}
//                   >
//                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 </InputAdornment>
//               }
//             />
//             <Typography
//               sx={{
//                 color: "#D92550",
//                 fontWeight: "400",
//                 fontSize: "13px",
//                 textAlign: "right",
//                 marginTop: "-10px",
//                 maxWidth: "500px",
//               }}
//             >
//               Forgot password?
//             </Typography>
//             <Button
//               onClick={formik.handleSubmit}
//               sx={{
//                 color: "white",
//                 border: "1px solid #D92550",
//                 width: "180px",
//                 padding: ".6rem",
//                 margin: "1rem 0",
//                 backgroundColor: "#D92550",

//                 "&:hover": {
//                   backgroundColor: "white",
//                   cursor: "pointer",
//                   border: "1px solid #D92550",
//                   color: "#D92550",
//                 },
//               }}
//               // type="submit"
//             >
//               Login
//             </Button>
//           </Grid>
//         </Grid>
//       </Grid>{" "}
//     </>
//   );import { useState, useEffect } from "react";
import {
  Container,
  Box,
  Stack,
  styled,
  Typography,
  Paper,
  TextField,
  InputAdornment,
  IconButton,
  Link,
  Button,
} from "@mui/material";
import { AiFillLock } from "react-icons/ai";
// import loginBackground from "../../assets/background.png";
// import accessLogo from "../../assets/access-logo.png";
import { NavLink } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import IconButton from "@mui/material/IconButton";
// import InputAdornment from "@mui/material/InputAdornment";
import React, { useState } from "react";

// import { Route } from "react-router-dom";

// const Logo = styled("img")({
//   maxWidth: "175px",
//   // height: '37px'
// });

const Login = () => {
  // const [body, setBody] = useState([]);

  // const fetchPost = () => {
  //   fetch("https://jsonplaceholder.typicode.com/comments")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw Error(response.statusText);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setBody(data);
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };

  // useEffect(() => {
  //   fetchPost();
  // }, [])

  // console.log(body, "This is body response....");
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = () =>
  // event: React.MouseEvent<HTMLButtonElement>
  {
    // event.preventDefault();
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      sx={
        {
          // backgroundImage: `url(${loginBackground})`,
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          // boxSizing: "border-box",
        }
      }
    >
      {/* <Container sx={{ py: 1, height: "100%", border: "1px solid red" }} maxWidth="xl"> */}
      {/* <Logo src={accessLogo} alt="login background" /> */}
      <Stack
        spacing={2}
        height="fit-content"
        width="100%"
        direction="row"
        // sx={{ border: "1px solid black" }}
      >
        <Paper
          sx={{
            width: "30%",
            height: "65vh",
            py: 4,
            px: 4,
            mt: 8,
            ml: 50,
            borderRadius: 4,
            alignItem: "center",
            // border: "1px solid blue",
            justifyContent: "center",
          }}
          elevation={10}
        >
          <Stack spacing={1}>
            <Typography
              fontSize={20}
              // color="primary"
              // align="center"
              fontWeight={600}
              mb={1}
            >
              Login to your account
            </Typography>

            <Typography fontSize={16}>
              Don't have an account?{" "}
              <span sx={{ color: "#5444F2" }}>Get started</span>
            </Typography>

            <Stack component="form">
              <TextField
                label="Email"
                name="userName"
                type="text"
                sx={{ mt: 1 }}
                labelprops={{
                  fontSize: 14,
                }}
              />

              <TextField
                label="Password"
                name="password"
                // type={"password"}
                type={showPassword ? "text" : "password"}
                sx={{ mt: 2 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {/* <AiFillLock /> */}
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                labelProps={{
                  fontSize: 14,
                }}
              />
    
              <Link
                // underline="hover"
                color="primary"
                fontSize={13}
                // component={RouterLink}
                to="/login"
                mb={4}
                // ml={20}
                // mt={-3}
                sx= {{textAlign: "right"}}
              >
                Forgot Password ?
              </Link>
              <NavLink to="/dashboard">
                <Button
                  variant="contained"
                  type="submit"
                  color="secondary"
                  size="large"
                  sx={{ width: "100%" }}
                >
                  Login
                </Button>
              </NavLink>
            </Stack>
          </Stack>
        </Paper>
      </Stack>
      {/* </Container> */}
    </Box>
  );
};

export default Login;

// };

// export default Login;
