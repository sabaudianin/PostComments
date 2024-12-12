import { Paper, TextField, Button, Box } from "@mui/material";
import { useFormContext } from "react-hook-form";

export const CommentFormContent = ({ onSubmit }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Paper
      elevation={3}
      sx={{ m: 2, p: 2 }}
    >
      <Box
        component="form"
        onSubmit={onSubmit}
      >
        <TextField
          placeholder="Author"
          {...register("author", { required: "Author is required" })}
          error={!!errors.author}
          helperText={errors.author?.message}
          fullWidth
          sx={{ marginBottom: "1rem" }}
        />

        <TextField
          placeholder="Description"
          {...register("description", {
            required: "Description is required",
          })}
          error={!!errors.description}
          helperText={errors.description?.message}
          fullWidth
          multiline
          rows={4}
          sx={{ marginBottom: "1rem" }}
        />

        <Button type="submit">Submit</Button>
      </Box>
    </Paper>
  );
};
