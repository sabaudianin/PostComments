import { useState, useEffect } from "react";
import { TextField, List, Paper, Box } from "@mui/material";
import { useDebounce } from "../../hooks/useDebounce";
import { PostList } from "./PostList";

export const PostFilter = ({ data }) => {
  const [filter, setFilter] = useState("");
  const debouncedFilter = useDebounce(filter, 500);

  const filteredPost = data.filter(
    (post) =>
      post.title.toLowerCase().includes(debouncedFilter.toLowerCase()) ||
      post.content.toLowerCase().includes(debouncedFilter.toLowerCase())
  );

  return (
    <Box>
      <TextField
        label="Search Posts..."
        variant="outlined"
        margin="normal"
        fullWidth
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        sx={{
          marginBottom: "1rem",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      />
      <PostList data={filteredPost} />
    </Box>
  );
};
