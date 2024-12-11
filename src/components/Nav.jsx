import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  TextField,
  Link,
} from "@mui/material";
import { FcHome } from "react-icons/fc";
import { IoHome } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: "#00aeff",
        padding: "0.5rem",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          component={NavLink}
          sx={{
            textDecoration: "none",

            padding: "0.5rem 1rem",
            fontSize: { xs: "1rem", sm: "1.2rem" },
            borderRadius: "8px",
            background: "#fff",
            color: "white",
            textAlign: "center",
            "&:hover": {
              background: "#d2b48 ",
              cursor: "pointer",
            },
          }}
        >
          <IoHome style={{ fontSize: "1.5rem", color: "#000" }} />
        </Link>

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
