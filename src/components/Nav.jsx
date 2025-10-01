import { AppBar, Toolbar, Typography, Box } from "@mui/material";

import { IoHome } from "react-icons/io5";

import { BsPostcardFill } from "react-icons/bs";

import { CustomLink } from "./Elements/Link";

export const Nav = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(135deg,#D3D3D3,#f8f8ff,#D3D3D3)",
        padding: "1rem",
        boxShadow: "0px 4px 10px #000 inset ",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: { xs: "flex-start", lg: "flex-start" },
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "4px",
          }}
        >
          <CustomLink to="/">
            <IoHome
              style={{
                fontSize: "2rem",
                color: "#000",
              }}
            />
          </CustomLink>
          <CustomLink to="posts">
            <BsPostcardFill
              style={{
                fontSize: "2rem",
                color: "#000",
              }}
            />
          </CustomLink>
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: "fantasy",
              color: "#000",
              fontWeight: "bold",
              fontSize: "1.6rem",
            }}
          >
            COMMENT POST
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
