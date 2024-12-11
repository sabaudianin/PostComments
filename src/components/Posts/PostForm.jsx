import { Paper, TextField, Button, Box, Container } from "@mui/material";
import { useFormContext } from "react-hook-form";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAddPost } from "../../hooks/usePosts";

export const PostForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { mutate: addPost } = useAddPost();

  const onSubmit = (data) => {
    console.log(data);
    addPost({ collectionName: "posts", data });
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
          }}
        >
          Send Post
        </Button>
      </Box>
    </Container>
  );
};
