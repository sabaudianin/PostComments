import { useParams } from "react-router-dom";

import { Typography, Paper, Box, Container, Button } from "@mui/material";
import { BiSolidUpvote, BiSolidDownvote } from "react-icons/bi";
import { useGetPostById } from "../../hooks/usePosts";
import { CommentsContainer } from "../Comments/CommentsContainer";

export const PostDetails = () => {
  const { id } = useParams();
  const { data: post, isLoading, isError, error } = useGetPostById(id, "posts");
  console.log(id);

  if (isLoading) return <p>Loading post details...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  if (!post) {
    return <p>No Posts Available</p>;
  }
  console.log("Posts", post);

  return (
    <Container
      sx={{
        paddingTop: 4,
        background: "#ebf0f7",
        height: "100vh",
        boxShadow: "0px 4px 10px black",
      }}
    >
      <Box
        sx={{
          background: "linear-gradient(90deg, #d6ff99, #ff6666)",
          padding: ".25rem",
          borderRadius: "4px",
          boxShadow: "2px 2px 2px black",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: "2rem",
            borderRadius: "4px",
            backgroundColor: "#f2f2f2",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: "bold",
              marginBottom: "1rem",
              color: "#333",
              textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
              textAlign: "center",
            }}
          >
            {post.title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              marginBottom: "1rem",
              lineHeight: 1.6,
              color: "#555",
              wordBreak: "break-word",
              overflowWrap: "break-word",
              whiteSpace: "normal",
            }}
          >
            {post.content}
          </Typography>

          <Typography
            variant="caption"
            sx={{
              display: "block",
              marginBottom: "1rem",
              fontStyle: "italic",
              color: "#777",
              textAlign: "right",
            }}
          >
            Author: {post.author}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
              marginTop: "1rem",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#4caf50",
                color: "#fff",
                "&:hover": { backgroundColor: "#388e3c" },
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1rem",
              }}
              onClick={() => console.log("Voted up!")}
            >
              <BiSolidUpvote style={{ fontSize: "1.2rem" }} />
            </Button>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#f44336",
                color: "#fff",
                "&:hover": { backgroundColor: "#d32f2f" },
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1rem",
              }}
              onClick={() => console.log("Voted down!")} //
            >
              <BiSolidDownvote style={{ fontSize: "1.2rem" }} />
            </Button>
          </Box>
        </Paper>
      </Box>
      <CommentsContainer postId={id} />
    </Container>
  );
};
