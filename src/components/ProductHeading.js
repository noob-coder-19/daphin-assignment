import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import FilterBox from "./FilterBox";

const ProductHeading = () => {
  return (
    <>
      <Typography variant="caption" sx={{ fontSize: "2rem", color: "#616161" }}>
        Paracetamol{" "}
        <Typography variant="caption" sx={{ fontSize: "1rem" }}>
          (128 results)
        </Typography>
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        gap={0.5}
      >
        <FilterBox name="Aceclofenac"></FilterBox>
        <FilterBox name="500mg"></FilterBox>
        <Box
          sx={{
            fontSize: "0.8rem",
            px: 1.5,
            py: 0.5,
            textDecoration: "underline",
            color: "rgb(147, 0,0)",
          }}
        >
          Remove all
        </Box>
      </Grid>
    </>
  );
};

export default ProductHeading;
