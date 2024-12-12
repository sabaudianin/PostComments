import { Link } from "@mui/material";
import { NavLink } from "react-router-dom";

export const CustomLink = ({ children, to }) => {
  return (
    <Link
      to={to}
      component={NavLink}
      sx={{
        color: "secondary.main",
        textDecoration: "none",
        borderRadius: "8px",
        padding: ".2rem .6rem",
        fontSize: { xs: "1rem", sm: "1.5rem" },
        transition: ".5",
        textAlign: "center",
        "&:hover": {
          background: "#b3b3b3 ",
          cursor: "pointer",
        },
      }}
    >
      {children}
    </Link>
  );
};
