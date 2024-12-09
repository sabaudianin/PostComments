import { List, Paper, Typography, Box } from "@mui/material";
import { PostItem } from "./PostItem";

export const PostList = ({ data }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#f2f2f2",
        padding: "2rem",
        borderRadius: "8px",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          marginBottom: "2rem",
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
              backgroundColor: "white",
            }}
          >
            <PostItem post={post} />
          </Paper>
        ))}
      </List>
    </Box>
  );
};
