import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  TextField,
  Link,
} from "@mui/material";
import { MdLocalPostOffice } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { FaCommentAlt } from "react-icons/fa";
import { BsPostcardFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { CustomLink } from "./Elements/Link";

export const Nav = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "linear-gradient(135deg,#D3D3D3,#f8f8ff,#D3D3D3)",
        padding: "0.5rem",
        boxShadow: "0px 4px 10px #000 inset ",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: { xs: "space-between", lg: "space-evenly" },
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // borderRadius: "4px",
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
