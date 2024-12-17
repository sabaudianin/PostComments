import { Button, Box, Container } from "@mui/material";

import { useDeletePost, useUpdatePost } from "../../hooks/usePosts";
import { useSnackbar } from "../../context/SnackbarContext";
import { StyledSnackbar } from "../Elements/Snackbar";

export const PostActions = ({ postId }) => {
  const { mutate: deletePost } = useDeletePost();
  const { mutate: updatePost } = useUpdatePost();
  const { showSnackbar } = useSnackbar();

  const deleteThisPost = (postId) => {
    if (!postId) {
      console.log("PostId invalid or missed");
    }
    deletePost(
      { collectionName: "posts", postId },
      {
        onSuccess: () => {
          showSnackbar("Post deleted successfully!", "success");
        },
        onError: (error) => {
          console.error("Error deleting post:", error);
          showSnackbar("Failed to delete post. Please try again.", "error");
        },
      }
    );
  };

  console.log(postId);
  return (
    <Box sx={{ display: "flex", gap: "1rem" }}>
      <Button
        onClick={() => deleteThisPost(postId)}
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
