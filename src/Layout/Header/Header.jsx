import React, { useState } from "react";
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { BsFillPeopleFill, BsBoxArrowRight } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { logOut } from "../../Redux/AllSlice/User";
import './Header.css'

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const log = window.sessionStorage.getItem("authToken");
  const logAdmin = window.localStorage.getItem("token");
  // console.log("sessionStorage :",log);
  // console.log("localStorage :",logAdmin);
  const logoutHandeler = () => {
    dispatch(logOut());
    setTimeout(() =>{
      if(window.sessionStorage.getItem("authToken")===null && window.localStorage.getItem("token")===null){
        navigate("/login")
      }
      else{
        console.log("login navigate error")
      }
    }, 2000);
  };

  const [mobileOpen, setMobileOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }} className="navbar">
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <img src="../../../../assets/logorm.png" alt="logo" />
      </Typography>
      <Divider />
      {log || logAdmin? <Button className="whitee" onClick={logoutHandeler}><BsBoxArrowRight size={32} /></Button> : <Link to="/login"><Button className="whitee"><BsFillPeopleFill size={32} /></Button></Link>}
      <Link to="/">
        <Button className="white">Home</Button>
      </Link>
      <Link to="/services">
        <Button className="white">Services</Button>
      </Link>
      <Link to="/gallery">
        <Button className="white">Gallery</Button>
      </Link>
      <Link to="/about-us">
        <Button className="white">ABout us</Button>
      </Link>
      <Link to="/contact">
        <Button className="white">Contact</Button>
      </Link>

    </Box>
  );
  return (
    <>
      <Box className="navbar">
        <AppBar component={"nav"} sx={{ bgcolor: "black" }} className="navbar">
          <Toolbar>
            <IconButton
              size="large"
              color="dark"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { md: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <img src="../../../../assets/logorm.png" alt="logo" />
            </Typography>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Link to="/">
                <Button className="white">Home</Button>
              </Link>
              <Link to="/services">
                <Button className="white">Services</Button>
              </Link>
              <Link to="/gallery">
                <Button className="white">Gallery</Button>
              </Link>
              <Link to="/about-us">
                <Button className="white">ABout us</Button>
              </Link>
              <Link to="/contact">
                <Button className="white">Contact</Button>
              </Link>
              {log || logAdmin? <Button className="whitee" onClick={logoutHandeler}><BsBoxArrowRight size={32} /></Button> : <Link to="/login"><Button className="whitee"><BsFillPeopleFill size={32} /></Button></Link>}
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "220px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
