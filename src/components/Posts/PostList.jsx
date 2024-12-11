import { useState } from "react";
import { List, Paper, Typography, Box, Container, Button } from "@mui/material";
import { FaWindowClose } from "react-icons/fa";
import { MdAddComment } from "react-icons/md";
import { PostItem } from "./PostItem";
import { PostForm } from "./PostForm";

export const PostList = ({ data }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <Container
      sx={{
        backgroundColor: "#fff",
        padding: "2rem",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
        marginTop: "2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1.5rem",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1.5rem", sm: "2rem" },
            textShadow: "2px 2px 2px rgba(0, 0, 0, 0.4)",
          }}
        >
          Posts List :
        </Typography>
        <Button
          onClick={() => setShowForm(!showForm)} //
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.75rem 1rem",
            fontWeight: "bold",
            textTransform: "none",
            backgroundColor: "#1976d2",
            color: "white",
            "&:hover": {
              backgroundColor: "#115293",
            },
          }}
        >
          {showForm ? (
            <FaWindowClose style={{ fontSize: "1.5rem" }} />
          ) : (
            <MdAddComment style={{ fontSize: "1.5rem" }} />
          )}
          {showForm ? "Cancel" : "AddComment"}
        </Button>
      </Box>

      {showForm && (
        <Box
          sx={{
            marginBottom: "2rem",
          }}
        >
          <PostForm />
        </Box>
      )}

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
              backgroundColor: "#f5f5f5",
              boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <PostItem post={post} />
          </Paper>
        ))}
      </List>
    </Container>
  );
};
