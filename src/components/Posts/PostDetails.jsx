import { useParams } from "react-router-dom";
import { Typography, Paper, Box } from "@mui/material";
import { useGetPostById } from "../../hooks/usePosts";

export const PostDetails = () => {
  const { id } = useParams();
  const { data: post, isLoading, isError, error } = useGetPostById(id, "posts");

  if (isLoading) return <p>Loading post details...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  if (!post) return <p>No post found.</p>;

  console.log("Posts", post);
  return (
    <Box>
      <Paper
        elevation={3}
        sx={{
          padding: "2rem",
          marginBottom: "2rem",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          {post.title}
        </Typography>
        <Typography variant="body1">{post.content}</Typography>
        <Typography variant="caption">Author: {post.author}</Typography>
      </Paper>
    </Box>
  );
};
