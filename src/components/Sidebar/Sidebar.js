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

const drawerWidth = 280;

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
            bgcolor: "#01175C",
            padding: "0rem 2rem",
            color: "#FAF9FB",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* <Logo src={accessLogo} alt="logo" onClick={() => "/"} /> */}

        <Toolbar />
        {/* <Divider /> */}
        <List sx={{ color: "#FAF9FB" }}>
          <ListItemButton
            sx={{
              color: "white",
              fontWeight: "light",
              fontSize: "1rem",
              "&:hover": {
                background: "#FF8102",
                color: "#FAF9FB",
                borderRadius: "20px",
              },
            }}
            onClick={handleCustomerOpen}
          >
            Customer Funds Transfer
            {customerOpen ? (
              <MdChevronRight size={28} />
            ) : (
              <ExpandMore size={28} />
            )}
          </ListItemButton>
          <Collapse in={!customerOpen} timeout="auto" unmountOnExit>
            <List sx={{ color: "white" }}>
              <Link href="/singleEntryPage">
                <ListItemButton sx={{ color: "white" }}>
                  <ListItemIcon sx={{ color: "#fff" }}>
                    <BsDot size={30} />
                  </ListItemIcon>
                  <ListItemText primary="Entry Posting" />
                </ListItemButton>
              </Link>
              <Link href="/masterList">
                <ListItemButton sx={{ color: "white" }}>
                  <ListItemIcon sx={{ color: "#fff" }}>
                    {" "}
                    <BsDot size={30} />
                  </ListItemIcon>
                  <ListItemText primary="Master List" />
                </ListItemButton>
              </Link>
            </List>
          </Collapse>
        </List>

        <List>
          <ListItemButton
            sx={{
              color: "white",
              // fontSize: "1rem",
              fontWeight: "light",
              fontSize: "15px",
              "&:hover": {
                background: "#FF8102",
                color: "#fff",
                borderRadius: "20px",
                fontWeight: "light",
              },
            }}
            onClick={handleAchOutwardOpen}
          >
            ACH Outward
            {achOutwardOpen ? (
              <Typography
                sx={{
                  marginLeft: "66px",
                  fontWeight: "light",
                  marginTop: "5px",
                }}
              >
                <MdChevronRight size={25} />
              </Typography>
            ) : (
              <Typography
                sx={{
                  marginLeft: "66px",
                  fontWeight: "light",
                  marginTop: "5px",
                }}
              >
                <ExpandMore size={25} />
              </Typography>
            )}
          </ListItemButton>
          <Collapse in={!achOutwardOpen} timeout="auto" unmountOnExit>
            <List sx={{ color: "white" }}>
              <Link href="/masterList">
                <ListItemButton sx={{ color: "white" }}>
                  <ListItemIcon sx={{ color: "#fff" }}>
                    {" "}
                    <BsDot size={30} />
                  </ListItemIcon>
                  <ListItemText primary="ACH Outward Master List" />
                </ListItemButton>
              </Link>
              <Link href="/singleAchEntries">
                <ListItemButton sx={{ color: "white" }}>
                  <ListItemIcon sx={{ color: "#fff" }}>
                    {" "}
                    <BsDot size={30} />
                  </ListItemIcon>
                  <ListItemText primary="Single ACH Entries" />
                </ListItemButton>
              </Link>
              <Link href="/outwardMultipleUpload">
                <ListItemButton sx={{ color: "white" }}>
                  <ListItemIcon sx={{ color: "#fff" }}>
                    {" "}
                    <BsDot size={30} />
                  </ListItemIcon>
                  <ListItemText primary="Outward Multiple Upload" />
                </ListItemButton>
              </Link>
            </List>
          </Collapse>
        </List>

        <List>
          <ListItemButton
            sx={{
              color: "white",
              fontSize: "1rem",
              fontWeight: "light",
              fontSize: "15px",
              "&:hover": {
                background: "#FF8102",
                color: "#fff",
                borderRadius: "20px",
              },
            }}
            onClick={handleAchInwardOpen}
          >
            ACH Inward
            {achInwardOpen ? (
              <Typography
                sx={{
                  marginLeft: "76px",
                  fontWeight: "light",
                  marginTop: "5px",
                }}
              >
                <MdChevronRight size={25} />
              </Typography>
            ) : (
              <Typography
                sx={{
                  marginLeft: "66px",
                  fontWeight: "light",
                  marginTop: "5px",
                }}
              >
                <ExpandMore size={25} />
              </Typography>
            )}
          </ListItemButton>
          <Collapse in={!achInwardOpen} timeout="auto" unmountOnExit>
            <List sx={{ color: "white" }}>
              <Link href="/inwardMasterList">
                <ListItemButton sx={{ color: "white" }}>
                  <ListItemIcon sx={{ color: "#fff" }}>
                    {" "}
                    <BsDot size={30} />
                  </ListItemIcon>
                  <ListItemText primary="ACH Inward Master List" />
                </ListItemButton>
              </Link>
              <ListItemButton sx={{ color: "white" }}>
                <ListItemIcon sx={{ color: "#fff" }}>
                  {" "}
                  <BsDot size={30} />
                </ListItemIcon>
                <ListItemText primary="Single ACH Entries" />
              </ListItemButton>
              <ListItemButton sx={{ color: "white" }}>
                <ListItemIcon sx={{ color: "#fff" }}>
                  {" "}
                  <BsDot size={30} />
                </ListItemIcon>
                <ListItemText primary="Inward Multiple Upload" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>

        <List>
          <ListItemButton
            sx={{
              color: "white",
              fontSize: "1rem",
              fontWeight: "light",
              fontSize: "15px",
              "&:hover": {
                background: "#FF8102",
                color: "#fff",
                borderRadius: "20px",
              },
            }}
            onClick={handleManagementOpen}
          >
            Management
            {managementOpen ? (
              <Typography
                sx={{
                  marginLeft: "66px",
                  fontWeight: "light",
                  marginTop: "5px",
                }}
              >
                <MdChevronRight size={25} />
              </Typography>
            ) : (
              <Typography
                sx={{
                  marginLeft: "66px",
                  fontWeight: "light",
                  marginTop: "5px",
                }}
              >
                <ExpandMore size={25} />
              </Typography>
            )}
          </ListItemButton>
          <Collapse in={!managementOpen} timeout="auto" unmountOnExit>
            <List sx={{ color: "white" }}>
              <ListItemButton sx={{ color: "white" }}>
                <ListItemIcon sx={{ color: "#fff" }}>
                  {" "}
                  <BsDot size={30} />
                </ListItemIcon>
                <ListItemText primary="Reports" />
              </ListItemButton>
              <ListItemButton sx={{ color: "white" }}>
                <ListItemIcon sx={{ color: "#fff" }}>
                  {" "}
                  <BsDot size={30} />
                </ListItemIcon>
                <ListItemText primary="User Management" />
              </ListItemButton>
              <ListItemButton sx={{ color: "white" }}>
                <ListItemIcon sx={{ color: "#fff" }}>
                  {" "}
                  <BsDot size={30} />
                </ListItemIcon>
                <ListItemText primary="User Creation" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>

        <ListItemButton
          sx={{
            color: "#fff",
            fontSize: "1rem",
            fontWeight: "light",
            fontSize: "15px",
          }}
        >
          Authorization
        </ListItemButton>

        <List>
          <ListItem sx={{ color: "#FFFFFF" }} disablePadding>
            <ListItemButton>
              <ListItemText />
            </ListItemButton>
          </ListItem>
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
