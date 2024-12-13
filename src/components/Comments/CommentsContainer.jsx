import { Comments } from "./Comments";
import { useGetPosts, useAddPost } from "../../hooks/usePosts";
import { StyledSnackbar } from "../Elements/Snackbar";
import { useState } from "react";

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
      <StyledSnackbar
        closeSnackbar={closeSnackbar}
        snackbar={snackbar}
      />
    </>
  );
};
