import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";
import { useDeletePost } from "../../hooks/usePosts";
import { useSnackbar } from "../../context/SnackbarContext";

export const DeletePost = ({ postId }) => {
  const { mutate: deletePost } = useDeletePost();

  const { showSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const deleteThisPost = (postId) => {
    if (!postId) {
      console.log("PostId invalid or missed");
    }
    deletePost(
      { collectionName: "posts", postId },
      {
        onSuccess: () => {
          showSnackbar("Post deleted successfully!", "success");
          handleClose();
        },
        onError: (error) => {
          console.error("Error deleting post:", error);
          showSnackbar("Failed to delete post. Please try again.", "error");
          handleClose();
        },
      }
    );
  };

  return (
    <>
      <Button
        variant="contained"
        color="red"
        onClick={handleOpen}
        sx={{
          fontWeight: "bold",
          color: "red",
          "&:hover": {
            boxShadow: "5px 5px 16px #808080 ",
            backgroundColor: "#ffe6e6",
          },
        }}
      >
        Delete Post
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <DialogTitle id="delete-dialog-title">Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText id="delete-dialog-description">
            Are you sure you want to delete this post?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="#000"
          >
            Cancel
          </Button>
          <Button
            onClick={() => deleteThisPost(postId)}
            color="error"
            variant="contained"
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
