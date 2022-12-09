import {
  Box,
  CardMedia,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";

const Product = () => {
  return (
    <Box
      component={Paper}
      sx={{
        width: "350px",
        backgroundColor: "rgb(147, 0,0)",
        overflow: "hidden",
        mb: 1,
        mx: 1,
        border: "1px solid #9e9e9e",
      }}
      elevation={2}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ backgroundColor: "#fff", mb: 2, pt: 2, pb: 1 }}
      >
        <Grid
          container
          item
          sx={{ width: "325px" }}
          component={Paper}
          elevation={0}
          justifyContent="center"
          alignItems="center"
        >
          <CardMedia
            component="img"
            src="https://c.files.bbci.co.uk/B71C/production/_123167864_gettyimages-1022216070.jpg"
            alt={"img"}
            sx={{ width: "100%", borderRadius: "5px" }}
          ></CardMedia>
        </Grid>
        <Grid item>
          <Typography variant="body1" align="center" sx={{ fontWeight: 900 }}>
            Favipiravir 400mg (Fabiflu) Tablets
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" align="center" sx={{ fontWeight: 600 }}>
            <span style={{ color: "rgb(147, 0, 0)", fontSize: "1.2rem" }}>
              ₹ 1775
            </span>
            &nbsp;
            <span style={{ fontSize: "1.2rem" }}>/</span>
            &nbsp;
            <span style={{ fontSize: "0.9rem", color: "#757575" }}>strip</span>
          </Typography>
        </Grid>
        <br />
        <Typography sx={{ fontWeight: 600, fontSize: "0.9rem" }}>
          Glenmark Pharmaseutical Limited
        </Typography>
        <Typography
          sx={{ fontSize: "0.8rem", color: "#9e9e9e", fontWeight: 600 }}
        >
          PARVAT PATIYA, SURAT, GUJRAT
        </Typography>
        <br />
        <Divider sx={{ border: "1px solid #9e9e9e", width: "100%" }}></Divider>

        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 1 }}
        >
          <TelegramIcon
            sx={{
              color: "rgb(0, 170, 147)",
              fontSize: "2rem",
              fontWeight: 600,
            }}
          ></TelegramIcon>
          <Typography
            style={{
              color: "rgb(0, 170, 147)",
              fontSize: "1.5rem",
              fontWeight: 600,
            }}
            variant="body1"
          >
            Contact Supplier
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Product;
