import { Box, Typography } from "@mui/material";
import React from "react";

const BreadCrums = () => {
  return (
    <Box sx={{ pt: 1 }}>
      <Typography
        style={{ display: "inline" }}
        sx={{ fontSize: "0.9rem", color: "#9e9e9e" }}
      >
        Medical Darpan &gt; Search &gt;{" "}
      </Typography>
      <Typography style={{ display: "inline" }} sx={{ fontSize: "0.9rem" }}>
        Fabiflu Tablet
      </Typography>
    </Box>
  );
};

export default BreadCrums;
