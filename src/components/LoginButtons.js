import { Button, Grid } from "@mui/material";
import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const LoginButtons = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Button sx={{ fontSize: "1rem", mr: 1 }}>Login</Button>
      <AccountCircleOutlinedIcon
        style={{ marginBottom: "5px", fontSize: "2rem" }}
      ></AccountCircleOutlinedIcon>
    </Grid>
  );
};

export default LoginButtons;
