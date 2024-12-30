import { useState } from "react";
import { StyledButton } from "../Elements/Button";
import { useUpdatePost } from "../../hooks/usePosts";
import { useSnackbar } from "../../context/SnackbarContext";

export const UpdatePost = ({ postId }) => {
  return (
    <>
      <StyledButton
        sx={{
          width: "100%",
          mt: 1,
          backgroundColor: "#F8F8FF",
          color: "#101010",
          "&:hover": {
            backgroundColor: "#606060",
            color: "white",
          },
        }}
      >
        Update Post
      </StyledButton>
    </>
  );
};
