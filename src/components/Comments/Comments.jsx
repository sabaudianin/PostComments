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
  if (isLoading)
    return (
      <Container>
        <p>Loading comments...</p>
      </Container>
    );
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <>
      <CommentForm handleAddComment={handleAddComment} />
      <Box
        sx={{
          p: 1,

          background: "#b3b3b3",
          border: "2px  solid #ccc",
          borderRadius: 2,
          boxShadow: "4px 4px 2px #000",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
          }}
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
