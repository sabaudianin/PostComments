import { useState } from "react";
import { useGetPosts } from "../../hooks/usePosts";
import { Box, MenuItem, Select, Typography, Button } from "@mui/material";
import { LoadingPost } from "./LoadingPost";
import { ErrorPost } from "./ErrorPost";
import { PostFilter } from "./PostFilter";
import { StyledButton } from "../Elements/Button";
import { FaArrowDownShortWide, FaArrowUpWideShort } from "react-icons/fa6";

export const PostsWrapper = () => {
  const [sortField, setSortField] = useState("createdAt");
  const [sortOrder, setSortOrder] = useState("desc");
  const { data, isLoading, isError, error } = useGetPosts(
    "posts",
    sortField,
    sortOrder
  );

  if (isLoading) return <LoadingPost />;
  if (isError) return <ErrorPost error={error} />;

  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          background: "#f4f4f4",
          justifyContent: "flex-start",

          boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Select
          value={sortField}
          onChange={(e) => setSortField(e.target.value)}
          sx={{
            height: "32px",
            fontSize: "0.875rem",
            padding: "0",
            "& .MuiOutlinedInput-input": {
              padding: "6px 12px",
            },
            "& .MuiSelect-select": {
              display: "flex",
              alignItems: "center",
            },
          }}
        >
          <MenuItem
            value="createdAt"
            sx={{
              fontSize: "0.875rem",
              minHeight: "32px",
            }}
          >
            Date
          </MenuItem>
          <MenuItem
            value="title"
            sx={{
              fontSize: "0.875rem",
              minHeight: "32px",
            }}
          >
            Title
          </MenuItem>
          <MenuItem
            value="voteUp"
            sx={{
              fontSize: "0.875rem",
              minHeight: "32px",
            }}
          >
            Upvotes
          </MenuItem>
        </Select>
        <Button
          variant="contained"
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
          sx={{
            height: "32px",
            padding: "0 1rem",

            background: "none",
            color: "#000",
          }}
        >
          {sortOrder === "asc" ? (
            <FaArrowUpWideShort />
          ) : (
            <FaArrowDownShortWide />
          )}
        </Button>
      </Box>
      <PostFilter data={data} />
    </>
  );
};
