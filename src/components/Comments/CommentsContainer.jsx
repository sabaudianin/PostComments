import { useState } from "react";
import { Comments } from "./Comments";
import { useGetPosts, useAddPost } from "../../hooks/usePosts";

import { useSnackbar } from "../../context/SnackbarContext";

export const CommentsContainer = ({ postId }) => {
  const { data, isLoading, isError, error } = useGetPosts("comments");
  const { mutate: addPost } = useAddPost();
  const { showSnackbar } = useSnackbar();

  const handleAddComment = (data) => {
    addPost(
      { collectionName: "comments", data: { ...data, postId } },
      {
        onSuccess: () => {
          showSnackbar("Comment added successfully!", "success");
        },
        onError: (error) => {
          console.error("Error adding comment:", error);
          showSnackbar("Failed to add commeny. Please try again.", "error");
        },
      }
    );
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
    </>
  );
};
