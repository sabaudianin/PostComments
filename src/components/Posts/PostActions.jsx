import { Button, Box, Container } from "@mui/material";
import { useState } from "react";
import { useDeletePost, useUpdatePost } from "../../hooks/usePosts";
import { useNavigate } from "react-router-dom";

export const PostActions = ({ postId, onSuccess, onError }) => {
  const { mutate: deletePost } = useDeletePost();
  const { mutate: updatePost } = useUpdatePost();
  const navigate = useNavigate();

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const closeSnackbar = () => setSnackbar({ ...snackbar, open: false });

  const deleteThisPost = (postId) => {
    if (!postId) {
      console.log("PostId invalid or missed");
    }
    deletePost(
      { collectionName: "posts", postId },
      {
        onSuccess: () => {
          setSnackbar({
            open: true,
            message: "Post Deleted,returning to Posts",
            severity: "success",
          });
          setTimeout(() => navigate("/posts"), 3000);
        },
        onError: (error) => {
          console.log("error deleting Post", error);
          setSnackbar({
            open: true,
            message: "Failed to delete Post. Please Try again",
            severity: "error",
          });
        },
      }
    );
  };
  console.log(postId);
  return (
    <Box sx={{ display: "flex", gap: "1rem" }}>
      <Button
        onClick={deleteThisPost}
        sx={{
          backgroundColor: "#f44336",
          color: "#fff",
          "&:hover": { backgroundColor: "#d32f2f" },
        }}
      >
        Delete Post
      </Button>
      <Button
        sx={{
          backgroundColor: "#1976d2",
          color: "#fff",
          "&:hover": { backgroundColor: "#1565c0" },
        }}
      >
        Update Post
      </Button>
    </Box>
  );
};
