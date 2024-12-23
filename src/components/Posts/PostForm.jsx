import { useEffect, useRef } from "react";
import { TextField, Button, Box, Container } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledButton } from "../Elements/Button";
import { useSnackbar } from "../../context/SnackbarContext";
import { useAddPost } from "../../hooks/usePosts";
import { postSchema } from "../../hooks/validationSchema";
import { serverTimestamp } from "firebase/firestore";

export const PostForm = ({ setShowForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(postSchema) });

  const { mutate: addPost } = useAddPost();
  const timeoutRef = useRef(null);
  const { showSnackbar } = useSnackbar();

  const onSubmit = (data) => {
    const postData = {
      ...data,
      createdAt: new Date().toLocaleString(),
      voteUp: 0,
      voteDown: 0,
    };
    console.log(postData);
    addPost(
      { collectionName: "posts", data: postData },
      {
        onSuccess: () => {
          showSnackbar("Post added successfully!", "success");
          timeoutRef.current = setTimeout(() => setShowForm(false), 100);
        },
        onError: (error) => {
          console.error("Error adding post:", error);
          showSnackbar("Failed to add post. Please try again.", "error");
        },
      }
    );
    reset();
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <Container
      sx={{
        marginTop: ".5rem",
        padding: "1rem",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        boxShadow: "4px 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: "flex",
          flexDirection: "column",
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

        <StyledButton
          type="submit"
          sx={{
            backgroundColor: "secondary.main",
            color: "#fff",
          }}
        >
          Send Post
        </StyledButton>
      </Box>
    </Container>
  );
};
