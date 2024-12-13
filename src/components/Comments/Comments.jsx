import { Paper, Typography, Container, Box } from "@mui/material";
import { CommentsList } from "./CommentsList";
import { CommentForm } from "./CommentForm";

export const Comments = ({
  data,
  isLoading,
  isError,
  error,
  handleAddComment,
}) => {
  if (isLoading) return <p>Loading comments...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <>
      <CommentForm handleAddComment={handleAddComment} />
      <Box
        sx={{
          p: 4,
          background: "#b6c0c8",
          borderRadius: 4,
          boxShadow: "4px 4px 2px #000",
        }}
      >
        <Typography
          variant="h5"
          sx={{ textAlign: "center" }}
        >
          Community Thoughts
        </Typography>
        {data.length === 0 ? (
          <p>There are no comments yet</p>
        ) : (
          <CommentsList data={data} />
        )}
      </Box>
    </>
  );
};
