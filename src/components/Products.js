import { Grid } from "@mui/material";
import React from "react";
import Product from "./Product";

const Products = () => {
  return (
    <Grid
      container
      direction="row"
      gap={1}
      justifyContent="center"
      alignItems="center"
    >
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
      <Product></Product>
    </Grid>
  );
};

export default Products;
