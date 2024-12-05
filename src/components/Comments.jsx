import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useGetPosts, useAddPost } from "../hooks/usePosts";

export const Comments = () => {
  const { data, isLoading, isError, error } = useGetPosts();
  const { mutate: addPost } = useAddPost();
  const { register, handleSubmit, formState: errors } = useForm();

  const handleAddComment = (data) => {
    addPost({ collectionName: "comments", data });
  };

  return (
    <>
      <Paper
        elevation={3}
        sx={{ m: 2, p: 2 }}
      >
        <Typography variant="h5">Comments</Typography>
        <List>
          {data?.map((comment) => (
            <ListItem key={comment.id}>
              <ListItemText
                primary={comment.description}
                secondary={comment.author}
              />
            </ListItem>
          ))}
        </List>
      </Paper>
      <Paper
        elevation={3}
        sx={{ m: 2, p: 2 }}
      >
        <form onSubmit={handleSubmit(handleAddComment)}>
          <TextField
            placeholder="Author"
            {...register("author")}
          />
          <TextField
            placeholder="Description"
            {...register("description")}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Paper>
    </>
  );
};
