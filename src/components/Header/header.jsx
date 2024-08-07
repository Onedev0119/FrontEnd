"use client";
import { Box, Button, Typography ,Menu,MenuItem} from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import React from "react";
export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(grey, white,white)",
        padding: 2,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography
        variant="h4"
        sx={{ color: "linear-gradient(to right, red , yellow)" }}
      >
        <span style={{ color: "rgb(106,137,165)" }}>Nest</span>
        <span style={{ color: "rgb(153,151,205)" }}>invest</span>
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          endIcon={<ArrowDropDown />}
          sx={{
            height: "fit-content",
            textTransform: "capitalize",
            color: "black",
          }}
          onClick={handleClick}
        >
          English
        </Button>
        <Button
          sx={{
            height: "fit-content",
            textTransform: "capitalize",
            color: "black",
          }}
        >
          Log In
        </Button>
        <Button
          sx={{
            height: "fit-content",
            textTransform: "capitalize",
            backgroundColor: "rgb(127, 126, 216)",
            color: "white",
            borderRadius: 20,
            padding: "5px 20px",
            ":hover": { backgroundColor: "rgb(120,120,200)" },
          }}
        >
          Sign Up
        </Button>
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>English</MenuItem>
        <MenuItem onClick={handleClose}>Italian</MenuItem>
      </Menu>
    </Box>
  );
}
