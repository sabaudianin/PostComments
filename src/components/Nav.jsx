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
        background:
          "linear-gradient(135deg,rgb(71, 67, 67),rgb(205, 225, 195),rgb(20, 21, 20))",
        padding: "0.5rem",
        boxShadow: "4px 4px 10px #000 ",
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
