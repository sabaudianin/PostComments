import { Paper, Typography } from "@mui/material";
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
      <Paper
        elevation={3}
        sx={{ m: 2, p: 2 }}
      >
        <Typography variant="h5">Comments</Typography>
        {Array.isArray(data) && data.length === 0 ? (
          <p>There are no comments yet</p>
        ) : (
          <CommentsList data={data} />
        )}
      </Paper>
    </>
  );
};
