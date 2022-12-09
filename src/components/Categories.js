import { Grid } from "@mui/material";
import React from "react";
import ClearIcon from "@mui/icons-material/Clear";

const Categories = (props) => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{
          width: "16vw",
        }}
      >
        <Grid
          item
          sx={{
            fontSize: "1rem",
            width: "100%",
            textAlign: "center",
            px: 2,
            py: 1.5,
            fontWeight: "bold",
            letterSpacing: "0.1rem",
            backgroundColor: "#e0e0e0",
            mb: "0.2rem",
          }}
        >
          {props.heading}
        </Grid>

        {Object.keys(props.categories).map((category) => (
          <Grid
            item
            sx={{
              fontSize: "0.8rem",
              width: "100%",
              fontWeight: "500",
              px: 2,
              py: 1,
              backgroundColor: props.categories[category]
                ? "rgb(0, 170,157)"
                : "#fff",
              color: props.categories[category] ? "#fff" : "#000",
              letterSpacing: "0.1rem",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "0.4rem",
            }}
          >
            <span>{category}</span>
            {props.categories[category] && (
              <ClearIcon sx={{ fontSize: "0.8rem" }}></ClearIcon>
            )}
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Categories;
