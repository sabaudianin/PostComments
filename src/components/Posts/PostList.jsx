import { List, Paper, Typography, Box, TextField } from "@mui/material";
import { PostItem } from "./PostItem";

export const PostList = ({ data }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#f2f2f2",
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
        <TextField
          variant="outlined"
          size="small"
          width="100%"
          placeholder="Add Post.."
          onChange={(e) => e.target.value}
          sx={{
            backgroundColor: "white",
            borderRadius: "4px",
            minWidth: { xs: "100%", sm: "300px" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "transparent",
              },
            },
          }}
        />
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
