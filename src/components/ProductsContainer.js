import { Grid } from "@mui/material";
import React, { useState } from "react";
import Categories from "./Categories";
import ProductHeading from "./ProductHeading";
import Products from "./Products";

const ProductsContainer = () => {
  const [filters, setFilters] = useState({});

  return (
    <>
      <ProductHeading filters={[filters, setFilters]}></ProductHeading>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ pt: 1 }}
      >
        <Grid item xs={2}>
          <Grid
            container
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={3}
          >
            <Grid item>
              <Categories
                heading="Related Categories"
                categories={{
                  "Paracetamol Tablets": false,
                  "Paracetamol Syrup": false,
                  "Paracetamol Powder": false,
                  Aceclofenac: true,
                  "Magaladrate Simethicone Oral Suspension": false,
                  "Mefenamic Paracetamol Syrup": false,
                }}
              ></Categories>
            </Grid>

            <Grid item>
              <Categories
                heading="Related Brand"
                categories={{
                  "Cipmol Paracetamol": false,
                  "Pandal Paracetamol Tablets": false,
                  Combiflam: false,
                  "Crocin Tablets": false,
                  "Calpol Paracetamol Tablets": false,
                  "Sumo Tablets": false,
                }}
              ></Categories>
            </Grid>

            <Grid item>
              <Categories
                heading="Business Type"
                categories={{
                  Wholeseller: false,
                  Manufacturer: false,
                  Retailer: false,
                  Exporter: false,
                }}
              ></Categories>
            </Grid>

            <Grid item>
              <Categories
                heading="Strength"
                categories={{
                  "650 mg": false,
                  "500 mg": true,
                }}
              ></Categories>
            </Grid>

            <Grid item>
              <Categories
                heading="Manufacturer"
                categories={{
                  "Intas Pharmaceutical Ltd": false,
                  "Alkem Laboatories Ltd": false,
                }}
              ></Categories>
            </Grid>

            <Grid item>
              <Categories
                heading="Prescription/Non prescription"
                categories={{
                  "Intas Pharmaceutical Ltd": false,
                  "Alkem Laboatories Ltd": false,
                }}
              ></Categories>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={10}>
          <Products></Products>
        </Grid>
      </Grid>
    </>
  );
};

export default ProductsContainer;
