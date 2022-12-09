import React from "react";
import ScopedCssBaseline from "@mui/material/ScopedCssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Grid } from "@mui/material";
import Logo from "../Logo";
import ButtonGroup from "../ButtonGroup";
import LoginButtons from "../LoginButtons";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#f5f5f5",
    },
  },
});

const Navbar = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <ScopedCssBaseline>
          <AppBar sx={{ backgroundColor: "rgb(129, 0,0)" }}>
            <Toolbar disableGutters>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                sx={{ px: 2 }}
              >
                <Grid>
                  <Logo></Logo>
                </Grid>

                <Grid>
                  <ButtonGroup></ButtonGroup>
                </Grid>

                <Grid>
                  <LoginButtons></LoginButtons>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </ScopedCssBaseline>
      </ThemeProvider>
    </>
  );
};

export default Navbar;
