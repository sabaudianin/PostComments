import { Container, Link, Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          marginBottom: "2rem",
          fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
          textAlign: "center",
        }}
      >
        Welcome to the Comment Post
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: "1rem",
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
            backgroundColor: "primary.main",
            color: "white",
            textAlign: "center",
            "&:hover": {
              backgroundColor: "primary.dark",
            },
          }}
        >
          HOME
        </Link>
        <Link
          to="/posts/"
          component={NavLink}
          sx={{
            textDecoration: "none",
            padding: "0.5rem 1rem",
            fontSize: { xs: "1rem", sm: "1.2rem" },
            borderRadius: "8px",
            backgroundColor: "secondary.main",
            color: "white",
            textAlign: "center",
            "&:hover": {
              backgroundColor: "secondary.dark",
            },
          }}
        >
          Posts
        </Link>
        <Link
          to="/comments/"
          component={NavLink}
          sx={{
            textDecoration: "none",
            padding: "0.5rem 1rem",
            fontSize: { xs: "1rem", sm: "1.2rem" },
            borderRadius: "8px",
            backgroundColor: "success.main",
            color: "white",
            textAlign: "center",
            "&:hover": {
              backgroundColor: "success.dark",
            },
          }}
        >
          Comments id 1
        </Link>
      </Box>
      <Typography
        variant="body1"
        sx={{
          marginTop: "2rem",
          fontSize: "1.2rem",
          color: "text.secondary",
          textAlign: "center",
        }}
      >
        Navigate to explore more!
      </Typography>
    </Container>
  );
};
