import { Paper, TextField, Button } from "@mui/material";
import { useFormContext } from "react-hook-form";

export const CommentFormContent = ({ handleAddComment }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext();

  return (
    <Paper
      elevation={3}
      sx={{ m: 2, p: 2 }}
    >
      <form onSubmit={handleSubmit(handleAddComment)}>
        <TextField
          placeholder="Author"
          {...register("author", { required: "Author is required" })}
          error={!!errors.author}
          helperText={errors.author?.message}
        />

        <TextField
          placeholder="Description"
          {...register("description", {
            required: "Description is required",
          })}
          error={!!errors.description}
          helperText={errors.description?.message}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Paper>
  );
};
