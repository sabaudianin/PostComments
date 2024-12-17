import { ListItem, ListItemText, Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { DeletePost } from "./DeletePost";

export const PostItem = ({ post }) => {
  const { id, title, content, author } = post;

  return (
    <ListItem
      sx={{
        width: "100%",
        borderBottom: "2px solid #eee",
        padding: ".5rem",
        backgroundColor: "#f2f2f2",
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        transition: ".2s",
        "&:hover": {
          backgroundColor: "#e6e6e6",
          boxShadow: "5px 6px 15px #000",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Typography
          component="h3"
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontSize: "1.2rem",
            marginBottom: "0.5rem",
          }}
        >
          {title}
        </Typography>
        <Typography
          component="span"
          variant="body2"
          sx={{
            fontSize: "0.9rem",
            color: "text.secondary",
            wordBreak: "break-word",
            overflowWrap: "break-word",
            whiteSpace: "normal",
          }}
        >
          {content.substring(0, 100)}...
        </Typography>
        <Typography
          component="span"
          variant="caption"
          sx={{
            fontSize: "0.8rem",
            color: "text.secondary",
            marginTop: "0.5rem",
          }}
        >
          Author: {author}
        </Typography>
        <Button
          component={Link}
          to={`/posts/${id}`}
          variant="contained"
          sx={{
            width: "100%",
            mb: 1,
            backgroundColor: "#F8F8F8",
            color: "#101010",
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: "#606060",
              color: "white",
            },
          }}
        >
          Read More
        </Button>
        <DeletePost postId={id} />
      </Box>
    </ListItem>
  );
};
