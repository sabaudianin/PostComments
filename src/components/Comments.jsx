import {
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { useGetPosts } from "../hooks/usePosts";

export const Comments = () => {
  const { data } = useGetPosts();
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
        <form>
          <TextField />
          <TextField />
          <Button>SUbmit</Button>
        </form>
      </Paper>
    </>
  );
};
