import { TextField, Button, Box, Container } from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddPost } from "../../hooks/usePosts";
import { postSchema } from "../../hooks/validationSchema";
import { StyledSnackbar } from "../Elements/Snackbar";

export const PostForm = ({ setShowForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(postSchema) });

  const { mutate: addPost } = useAddPost();

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const closeSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const onSubmit = (data) => {
    console.log(data);
    addPost(
      { collectionName: "posts", data },
      {
        onSuccess: () => {
          setSnackbar({
            open: true,
            message: "Post Added Sucessfully",
            severity: "success",
          });
        },
        onError: () => {
          setSnackbar({
            open: "false",
            message: "Error during added post",
            severity: "error",
          });
          console.log("error adding post", error);
        },
      }
    );
    reset();
    setShowForm(false);
  };

  return (
    <Container
      sx={{
        marginTop: "2rem",
        padding: "2rem",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <TextField
          {...register("author", { required: "Write Your name" })}
          placeholder="Your Name"
          fullWidth
          error={!!errors.author}
          helperText={errors?.author?.message}
        />

        <TextField
          {...register("title", { required: "Title is Obligatory" })}
          placeholder="Title"
          fullWidth
          error={!!errors.title}
          helperText={errors?.title?.message}
        />

        <TextField
          {...register("content", { required: "Empty post not allowed" })}
          placeholder="Write your post here..."
          fullWidth
          multiline
          rows={6}
          error={!!errors.content}
          helperText={errors?.content?.message}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            padding: "0.75rem",
            fontSize: "1rem",
            fontWeight: "bold",
            textTransform: "none",
            backgroundColor: "secondary.main",
          }}
        >
          Send Post
        </Button>
      </Box>
      <StyledSnackbar
        snackbar={snackbar}
        closeSnackbar={closeSnackbar}
      />
    </Container>
  );
};
