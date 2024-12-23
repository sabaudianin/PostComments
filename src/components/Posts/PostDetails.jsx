import { useParams } from "react-router-dom";
import { increment } from "firebase/firestore";
import { Typography, Paper, Box, Container, Button } from "@mui/material";
import { BiSolidUpvote, BiSolidDownvote } from "react-icons/bi";
import { useGetPostById, useUpdatePost } from "../../hooks/usePosts";

import { CommentsContainer } from "../Comments/CommentsContainer";

export const PostDetails = () => {
  const { id } = useParams();
  const { data: post, isLoading, isError, error } = useGetPostById(id, "posts");
  console.log(id);

  const { mutate: updatePost } = useUpdatePost();

  const handleVoteDown = () => {
    updatePost({
      collectionName: "posts",
      postId: id,
      updatedData: { voteDown: increment(1) },
    });
  };

  const handleVoteUp = () => {
    updatePost({
      collectionName: "posts",
      postId: id,
      updatedData: { voteUp: increment(1) },
    });
  };

  if (isLoading) return <p>Loading post details...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <Container
      sx={{
        paddingY: 4,
        background: "#ebf0f7",
        boxShadow: "0px 4px 10px black",
      }}
    >
      <Box
        sx={{
          background: "linear-gradient(90deg, #d6ff99, #ff6666)",
          padding: ".25rem",
          borderRadius: "4px",
          boxShadow: "2px 2px 2px black",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: "2rem",
            borderRadius: "4px",
            backgroundColor: "#f2f2f2",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: "bold",
              marginBottom: "1rem",
              color: "#333",
              textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
              textAlign: "center",
            }}
          >
            {post.title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              marginBottom: "1rem",
              lineHeight: 1.6,
              color: "#555",
              wordBreak: "break-word",
              overflowWrap: "break-word",
              whiteSpace: "normal",
            }}
          >
            {post.content}
          </Typography>

          <Typography
            variant="caption"
            sx={{
              display: "block",
              marginBottom: "1rem",
              fontStyle: "italic",
              color: "#777",
              textAlign: "right",
            }}
          >
            Author: {post.author}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: "#333",
              textShadow: "1px 1px 3px rgba(0,0,0,0.2)",
              textAlign: "center",
            }}
          >
            Date: {post.createdAt}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
              marginTop: "1rem",
            }}
          >
            <Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#4caf50",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#388e3c" },
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.5rem 1rem",
                }}
                onClick={handleVoteUp}
              >
                <BiSolidUpvote style={{ fontSize: "1.2rem" }} />
              </Button>
              <Typography
                variant="subtitle2"
                sx={{ textAlign: "center" }}
              >
                Up:{post.voteUp}
              </Typography>
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#f44336",
                  color: "#fff",
                  "&:hover": { backgroundColor: "#d32f2f" },
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.5rem 1rem",
                }}
                onClick={handleVoteDown} //
              >
                <BiSolidDownvote style={{ fontSize: "1.2rem" }} />
              </Button>
              <Typography
                variant="subtitle2"
                sx={{ textAlign: "center" }}
              >
                Down:{post.voteDown}
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
      <CommentsContainer postId={id} />
    </Container>
  );
};
