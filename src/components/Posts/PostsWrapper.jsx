import { useState } from "react";
import { useGetPosts } from "../../hooks/usePosts";
import { Box, Button, MenuItem, Select, Container } from "@mui/material";
import { LoadingPost } from "./LoadingPost";
import { ErrorPost } from "./ErrorPost";
import { PostFilter } from "./PostFilter";
import { StyledButton } from "../Elements/Button";

export const PostsWrapper = () => {
  const [sortField, setSortField] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("asc");
  const { data, isLoading, isError, error } = useGetPosts(
    "posts",
    sortField,
    sortOrder
  );

  if (isLoading) return <LoadingPost />;
  if (isError) return <ErrorPost error={error} />;

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          background: "#f2f2f2",
          justifyContent: "space-between",
        }}
      >
        <Select
          value={sortField}
          onChange={(e) => setSortField(e.target.value)}
          sx={{ minWidth: 120 }}
        >
          <MenuItem value="createdAt">Date</MenuItem>
          <MenuItem value="title">Title</MenuItem>
          <MenuItem value="voteUp">Upvotes</MenuItem>
        </Select>
        <StyledButton
          variant="contained"
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
          {sortOrder === "asc" ? "Ascending" : "Descending"}
        </StyledButton>
      </Box>
      <PostFilter data={data} />
    </Container>
  );
};
