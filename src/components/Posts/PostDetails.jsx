import { useParams } from "react-router-dom";
import { useState } from "react";
import { Typography, Paper, Box, Container, Button } from "@mui/material";
import { BiSolidUpvote, BiSolidDownvote } from "react-icons/bi";
import { useGetPostById } from "../../hooks/usePosts";
import { CommentsContainer } from "../Comments/CommentsContainer";
import { PostActions } from "./PostActions";
import { StyledSnackbar } from "../Elements/Snackbar";

export const PostDetails = () => {
  const { id } = useParams();
  const { data: post, isLoading, isError, error } = useGetPostById(id, "posts");
  console.log(id);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const closeSnackbar = () => setSnackbar({ ...snackbar, open: false });

  const handleSuccess = (message) => {
    setSnackbar({ open: true, message, severity: "success" });
    setTimeout(() => navigate("/posts"), 3000); // Redirect after showing success
  };

  const handleError = (message) => {
    setSnackbar({ open: true, message, severity: "error" });
  };

  if (isLoading) return <p>Loading post details...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  if (!post) return <p>No post found.</p>;

  console.log("Posts", post);

  return (
    <Container
      sx={{
        paddingTop: 4,
        // background: "#000",
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
          <Box sx={{ marginTop: "1rem" }}>
            <PostActions
              postId={id}
              onSuccess={handleSuccess}
              onError={handleError}
            />
          </Box>
        </Paper>
      </Box>

      <CommentsContainer postId={id} />
      <StyledSnackbar
        closeSnackbar={closeSnackbar}
        snackbar={snackbar}
      />
    </Container>
  );
};
