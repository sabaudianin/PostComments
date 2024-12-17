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
import { NavLink } from "react-router-dom";
import { CustomLink } from "./Elements/Link";

export const Nav = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "#F8F8FF",
        padding: "0.5rem",
        boxShadow: "4px 4px 10px black",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <CustomLink to="/">
            <IoHome style={{ fontSize: "1.5rem", color: "secondary.main" }} />
          </CustomLink>
          <CustomLink to="posts">
            <MdLocalPostOffice
              style={{
                fontSize: "1.5rem",
                color: "secondary.main",
              }}
            />
          </CustomLink>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: { xs: "50%", sm: "auto" },
          }}
        >
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search posts..."
            onChange={(e) => e.target.value}
            sx={{
              backgroundColor: "white",
              borderRadius: "4px",
              boxShadow: "2px 2px 2px gray",
              minWidth: { xs: "100%", sm: "300px" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "transparent",
                },
              },
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
