import { useState, useMemo } from "react";
import { Box } from "@mui/material";
import { useDebounce } from "../../hooks/useDebounce";
import { PostList } from "./PostList";
import { SearchPost } from "./SearchPost";

export const PostFilter = ({ data }) => {
  const [filter, setFilter] = useState("");
  const debouncedFilter = useDebounce(filter, 500);

  const filteredPost = useMemo(
    () =>
      data.filter(
        (post) =>
          post.title.toLowerCase().includes(debouncedFilter.toLowerCase()) ||
          post.content.toLowerCase().includes(debouncedFilter.toLowerCase())
      ),
    [data, debouncedFilter]
  );

  return (
    <Box sx={{}}>
      <SearchPost
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <PostList data={filteredPost} />
    </Box>
  );
};
