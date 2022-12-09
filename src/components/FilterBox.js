import { Box } from "@mui/system";
import React from "react";
import ClearIcon from "@mui/icons-material/Clear";

const FilterBox = (props) => {
  return (
    <Box
      sx={{
        px: 1.5,
        py: 0.5,
        backgroundColor: "rgb(0, 170,157)",
        color: "#fff",
        fontSize: "12px",
        borderRadius: "3px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "0.4rem",
      }}
    >
      <span>{props.name}</span>
      <ClearIcon sx={{ fontSize: "0.8rem" }}></ClearIcon>
    </Box>
  );
};

export default FilterBox;
