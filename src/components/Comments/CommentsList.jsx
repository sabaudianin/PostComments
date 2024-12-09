import { List, ListItem, ListItemText } from "@mui/material";

export const CommentsList = ({ data }) => {
  return (
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
  );
};
