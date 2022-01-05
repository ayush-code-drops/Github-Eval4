import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: "50px" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Link className={styles.links} to="/">
            Home
          </Link>
          <Link className={styles.links} to="/login">
            Login
          </Link>
          <Link className={styles.links} to="/search">
            Search
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export { Navbar };
