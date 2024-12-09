import { ListItem, ListItemText, Button, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const PostItem = ({ post }) => {
  const { id, title, content, author } = post;

  // Funkcja generująca losowy kolor
  const generateRandomColor = () => {
    const colors = [
      "#FFC107", // Amber
      "#03A9F4", // Light Blue
      "#4CAF50", // Green
      "#FF5722", // Deep Orange
      "#9C27B0", // Purple
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const randomColor = generateRandomColor();

  return (
    <ListItem
      sx={{
        borderBottom: "2px solid #eee",
        padding: "2rem",
        backgroundColor: randomColor,
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        "&:hover": {
          boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
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
            marginTop: "1rem",
            alignSelf: "flex-start",
            backgroundColor: "white",
            color: randomColor,
            fontWeight: "bold",
            "&:hover": {
              backgroundColor: randomColor,
              color: "white",
            },
          }}
        >
          Read More
        </Button>
      </Box>
    </ListItem>
  );
};
