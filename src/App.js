import { Stack } from "@mui/material";
import Padding from "./components/Padding";
import ProductsContainer from "./components/ProductsContainer";
import Search from "./components/Search";
import BreadCrums from "./components/shared/BreadCrums";
import Navbar from "./components/shared/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Padding></Padding>

      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={1}
        sx={{ px: 2 }}
      >
        <BreadCrums></BreadCrums>
        <Search></Search>
        <ProductsContainer></ProductsContainer>
      </Stack>
    </div>
  );
}

export default App;
