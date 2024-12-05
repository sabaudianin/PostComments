import { Container, Link } from "@mui/material";
import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <Container>
      <Link
        to="/"
        component={NavLink}
      >
        HOME
      </Link>
      <Link
        to="/posts"
        component={NavLink}
      >
        Posts
      </Link>
      <Link
        to="/comments/1"
        component={NavLink}
      >
        Comments id 1
      </Link>
      <p>Home</p>
    </Container>
  );
};
