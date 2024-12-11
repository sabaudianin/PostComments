import { List, Paper, Typography, Box, TextField, Button } from "@mui/material";
import { MdAddComment } from "react-icons/md";

import { PostItem } from "./PostItem";

export const PostList = ({ data }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#80e5ff",
        padding: "1rem",
        borderRadius: "8px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Button>
          <MdAddComment style={{ fontSize: "2rem", color: "red" }} />
          Add Post
        </Button>
      </Box>
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          margin: "1rem",
          fontWeight: "bold",
          fontSize: { xs: "1.5rem", sm: "2rem" },
        }}
      >
        Posts List
      </Typography>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        {data?.map((post) => (
          <Paper
            key={post.id}
            elevation={3}
            sx={{
              padding: "1.5rem",
              borderRadius: "8px",
              backgroundColor: "#808080",
            }}
          >
            <PostItem post={post} />
          </Paper>
        ))}
      </List>
    </Box>
  );
};
