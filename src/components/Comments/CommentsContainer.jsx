import { Comments } from "./Comments";
import { useGetPosts, useAddPost } from "../../hooks/usePosts";
import { Snackbar, Alert } from "@mui/material";
import { useState } from "react";
import { Slide } from "@mui/material";

export const CommentsContainer = ({ postId }) => {
  const { data, isLoading, isError, error } = useGetPosts("comments");
  const { mutate: addPost } = useAddPost();
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  console.log(postId);

  const handleAddComment = (data) => {
    addPost(
      { collectionName: "comments", data: { ...data, postId } },
      {
        onSuccess: () => {
          setSnackbar({
            open: true,
            message: "Comment added succesfully",
            severity: "success",
          });
        },
        onErrror: () => {
          setSnackbar({
            open: false,
            message: "Failed to add Comment",
            severity: "error",
          });
          console.log("error adding comment", error);
        },
      }
    );
  };

  const closeSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const slide = (props) => (
    <Slide
      {...props}
      direction="right"
    />
  );
  const filterdComments = data?.filter((comment) => comment.postId === postId);

  return (
    <>
      <Comments
        data={filterdComments}
        isLoading={isLoading}
        isError={isError}
        error={error}
        handleAddComment={handleAddComment}
      />
      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={closeSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        TransitionComponent={slide}
      >
        <Alert
          onClose={closeSnackbar}
          severity={snackbar.severity}
          sx={{
            width: "100%",
            padding: "1rem",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            background: "#00FF00",
            fontWeight: "bold",
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};
