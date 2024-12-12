import { Container, Link, Typography, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { AnimatedLines } from "./AnimatedLines";

export const Home = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          marginBottom: "2rem",
          fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
          fontWeight: "bolder",
          textAlign: "center",
        }}
      >
        Comments from the web
      </Typography>

      <AnimatedLines>
        <Typography
          variant="h2"
          sx={{
            marginBottom: "2rem",
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            fontWeight: "bolder",
            fontFamily:
              "Franklin Gothic Medium, Arial Narrow, Arial, sans-serif",
            textAlign: "center",
          }}
        >
          Welcome to the Comment Post
        </Typography>
      </AnimatedLines>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: "1rem",
        }}
      >
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
          Read Posts
        </Link>

        <Typography
          variant="body1"
          sx={{
            marginTop: "2rem",
            fontSize: "1.2rem",
            color: "text.secondary",
            textAlign: "center",
          }}
        >
          Click to explore comments!
        </Typography>
      </Box>
    </Container>
  );
};
