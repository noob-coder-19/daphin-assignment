import { Button, InputAdornment, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={0}
    >
      <TextField
        placeholder="Search"
        variant="outlined"
        sx={{ width: "30rem" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" sx={{ borderRadius: "30px" }}>
              <SearchIcon />
            </InputAdornment>
          ),
          style: { paddingTop: 0, borderRadius: 0 },
        }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button
        variant="contained"
        disableElevation
        style={{
          borderRadius: 0,
          padding: "0.9rem 1.5rem",
          fontSize: "1rem",
          backgroundColor: "rgb(0, 170,157)",
        }}
      >
        Search
      </Button>
    </Stack>
  );
};

export default Search;
