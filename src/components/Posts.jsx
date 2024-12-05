import { Typography, Container } from "@mui/material";
import { useParams } from "react-router-dom";

export const Posts = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <Container>
      <Typography variant="h5">Post</Typography>
    </Container>
  );
};
