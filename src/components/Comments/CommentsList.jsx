import { List, ListItem, ListItemText } from "@mui/material";

export const CommentsList = ({ data }) => {
  return (
    <List>
      {data?.map((comment) => (
        <ListItem
          key={comment.id}
          sx={{
            background: "#eeeeee",
            borderRadius: 2,
            boxShadow: "2px 2px 2px #020202",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginBottom: 1,
          }}
        >
          <ListItemText
            primary={comment.description}
            secondary={comment.author}
            sx={{
              whiteSpace: "normal",
              wordBreak: "break-word",
            }}
          />
        </ListItem>
      ))}
    </List>
  );
};
