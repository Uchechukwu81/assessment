import React, { useState } from "react";
import {
  Box,
  Collapse,
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  ListItem,
  ListItemButton,
  ListItemText,
  List,
  ListItemIcon,
  Link,
  Typography,
} from "@mui/material";
// import accessLogo from "../../assets/access-logo.png";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import { MdChevronRight } from "react-icons/md";
import { styled } from "@mui/system";
import { BsDot } from "react-icons/bs";

const Logo = styled("img")({
  maxWidth: "175px",
  alignSelf: "center",
  cursor: "pointer",
  marginTop: "30px",
  // height: '37px'
});

const drawerWidth = 200;

export default function ScrollableDrawerLeft() {
  const [customerOpen, setCustomerOpen] = useState(true);
  const [achOutwardOpen, setAchOutwardOpen] = useState(true);
  const [achInwardOpen, setAchInwardOpen] = useState(true);
  const [managementOpen, setManagementOpen] = useState(true);

  const handleCustomerOpen = () => {
    setCustomerOpen(!customerOpen);
  };

  const handleAchOutwardOpen = () => {
    setAchOutwardOpen(!achOutwardOpen);
  };

  const handleAchInwardOpen = () => {
    setAchInwardOpen(!achInwardOpen);
  };

  const handleManagementOpen = () => {
    setManagementOpen(!managementOpen);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      ></AppBar>
      <Drawer
        sx={{
          width: drawerWidth,

          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            bgcolor: "#FFFFFF",
            padding: "0rem 2rem",
            color: " #65717C",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* <Logo src={accessLogo} alt="logo" onClick={() => "/"} /> */}

        <Toolbar />
        {/* <Divider /> */}
        <List sx={{ color: "#65717C" }}>
          <ListItemButton
            sx={{
              color: "#65717C",
              fontWeight: "light",
              // border: "1px solid red",
              fontSize: "1rem",
              "&:hover": {
                background: "black",
                color: "#FAF9FB",
                borderRadius: "20px",
              },
            }}
            onClick={handleCustomerOpen}
          >
            Welcome
          </ListItemButton>
          <ListItemButton
            sx={{
              color: "#65717C",
              fontWeight: "light",
              // border: "1px solid red",
              fontSize: "1rem",
              "&:hover": {
                background: "black",
                color: "#FAF9FB",
                borderRadius: "20px",
              },
            }}
            onClick={handleCustomerOpen}
          >
            Compliance
          </ListItemButton>
          <ListItemButton
            sx={{
              color: "#65717C",
              fontWeight: "light",
              // border: "1px solid red",
              fontSize: "1rem",
              "&:hover": {
                background: "black",
                color: "#FAF9FB",
                borderRadius: "20px",
              },
            }}
            onClick={handleCustomerOpen}
          >
            Overview
          </ListItemButton>
          <ListItemButton
            sx={{
              color: "#65717C",
              fontWeight: "bold",
              // border: "1px solid red",
              fontSize: "1rem",
              "&:hover": {
                background: "black",
                color: "#FAF9FB",
                borderRadius: "20px",
              },
            }}
            onClick={handleCustomerOpen}
          >
            BUSINESS
          </ListItemButton>
          <ListItemButton
            sx={{
              color: "#65717C",
              fontWeight: "light",
              // border: "1px solid red",
              fontSize: "1rem",
              "&:hover": {
                background: "black",
                color: "#FAF9FB",
                borderRadius: "20px",
              },
            }}
            onClick={handleCustomerOpen}
          >
            Products
          </ListItemButton>
          <ListItemButton
            sx={{
              color: "#65717C",
              fontWeight: "light",
              // border: "1px solid red",
              fontSize: "1rem",
              "&:hover": {
                background: "black",
                color: "#FAF9FB",
                borderRadius: "20px",
              },
            }}
            onClick={handleCustomerOpen}
          >
            Customers
          </ListItemButton>
          <ListItemButton
            sx={{
              color: "#65717C",
              fontWeight: "light",
              // border: "1px solid red",
              fontSize: "1rem",
              "&:hover": {
                background: "black",
                color: "#FAF9FB",
                borderRadius: "20px",
              },
            }}
            onClick={handleCustomerOpen}
          >
            Orders
          </ListItemButton>
          <ListItemButton
            sx={{
              color: "#65717C",
              fontWeight: "bold",
              // border: "1px solid red",
              fontSize: "1rem",
              "&:hover": {
                background: "black",
                color: "#FAF9FB",
                borderRadius: "20px",
              },
            }}
            onClick={handleCustomerOpen}
          >
            PAYMENTs
          </ListItemButton>
          <ListItemButton
            sx={{
              color: "#65717C",
              fontWeight: "light",
              // border: "1px solid red",
              fontSize: "1rem",
              "&:hover": {
                background: "black",
                color: "#FAF9FB",
                borderRadius: "20px",
              },
            }}
            onClick={handleCustomerOpen}
          >
            Wallets
          </ListItemButton>
          <ListItemButton
            sx={{
              color: "#65717C",
              fontWeight: "light",
              // border: "1px solid red",
              fontSize: "1rem",
              "&:hover": {
                background: "black",
                color: "#FAF9FB",
                borderRadius: "20px",
              },
            }}
            onClick={handleCustomerOpen}
          >
            Transactions
          </ListItemButton>
          <ListItemButton
            sx={{
              color: "#65717C",
              fontWeight: "light",
              // border: "1px solid red",
              fontSize: "1rem",
              "&:hover": {
                background: "black",
                color: "#FAF9FB",
                borderRadius: "20px",
              },
            }}
            onClick={handleCustomerOpen}
          >
            Virtual Account
          </ListItemButton>
        </List>
        {/* <Divider /> */}
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

// import Drawer from '@mui/material/Drawer';
// import accessLogo from '../../assets/access-logo.png';
// import { styled } from '@mui/system';
// import { SwipeableDrawer } from '@mui/material';
// // import { useNavToggle } from '../../hooks';
// import NavList from '../Sidebar/NavList';
// // import AppBar from 'material-ui/AppBar';
// // import { useNavigate } from 'react-router-dom';

// const Logo = styled('img')({
//   maxWidth: '175px',
//   alignSelf: 'center',
//   cursor: 'pointer'
//   // height: '37px'
// });

// const drawerWidth = 250;

// const Sidebar = ({ swipeable }) => {
// //   const { sidebarOpen, closeSidebar, openSidebar } = useNavToggle();
// //   const navigate = useNavigate();

//   const DrawerComponent = swipeable ? SwipeableDrawer : Drawer;
//   const swipeableProps = {
//     anchor: 'left',
//     // open: sidebarOpen,
//     // onClose: closeSidebar,
//     // onOpen: openSidebar
//   };
//   const baseDrawerProps = {
//     variant: 'permanent'
//   };
//   const drawerProps = swipeable ? swipeableProps : baseDrawerProps;

//   return (
//     <>
//       <DrawerComponent
//         {...drawerProps}
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           [`& .MuiDrawer-paper`]: {
//             width: drawerWidth,
//             bgcolor: 'primary.main',
//             padding: '1rem 2rem',
//             borderTopRightRadius: 30,
//             borderBottomRightRadius: 30
//           }
//         }}
//       >
//         <Logo src={accessLogo} alt="logo" onClick={() => ('/')} />
//         <NavList />
//       </DrawerComponent>
//     </>
//   );
// };

// export default Sidebar;
