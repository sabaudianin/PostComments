import { useState } from "react";
import { TextField, Button, Box, Collapse } from "@mui/material";
import { useFormContext, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledButton } from "../Elements/Button";
import { useUpdatePost } from "../../hooks/usePosts";
import { useSnackbar } from "../../context/SnackbarContext";
import { updatePostSchema } from "../../hooks/validationSchema";

export const UpdatePost = ({ postId, post }) => {
  const [showForm, setShowForm] = useState(false);
  const { mutate: updatePost } = useUpdatePost();
  const { showSnackbar } = useSnackbar();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(updatePostSchema) });

  const onSubmit = (data) => {
    updatePost(
      {
        collectionName: "posts",
        postId: postId,
        updatedData: { content: data.content },
      },
      {
        onSuccess: () => {
          showSnackbar("Post updated successfully!", "success");
        },
        onError: (error) => {
          console.error("Error adding post:", error);
          showSnackbar("Failed to add post. Please try again.", "error");
        },
      }
    );
    reset();
  };

  return (
    <Box>
      <StyledButton
        onClick={() => setShowForm((prev) => !prev)}
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
        {showForm ? "Cancel" : "Update Post"}
      </StyledButton>
      {showForm && (
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ width: "100%" }}
        >
          <TextField
            {...register("content", { required: "Empty post not allowed" })}
            multiline
            defaultValue={post.content}
            error={!!errors.content}
            onChange={(e) => e.target.value}
            helperText={errors?.content?.message}
            sx={{ width: "100%" }}
          />
          <StyledButton
            type="submit"
            sx={{
              width: "100%",
              backgroundColor: "#F8F8FF",
              color: "#101010",
              "&:hover": {
                backgroundColor: "#606060",
                color: "white",
              },
            }}
          >
            Update
          </StyledButton>
        </Box>
      )}
    </Box>
  );
};
