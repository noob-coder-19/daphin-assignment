import { Button } from "@mui/material";
import React from "react";

const ButtonGroup = () => {
  return (
    <>
      <Button sx={{ fontSize: "1rem", mx: 1 }}>Home</Button>
      <Button sx={{ fontSize: "1rem", mx: 1 }}>Products</Button>
      <Button sx={{ fontSize: "1rem", mx: 1 }}>Distributors</Button>
      <Button sx={{ fontSize: "1rem", mx: 1 }}>Manufacturers</Button>
      <Button sx={{ fontSize: "1rem", mx: 1 }}>About Us</Button>
      <Button sx={{ fontSize: "1rem", mx: 1 }}>Blog</Button>
    </>
  );
};

export default ButtonGroup;
