import { useState } from "react";
import { List, Paper, Typography, Box, Container, Button } from "@mui/material";
import { FaWindowClose } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import { MdOutlineAdd } from "react-icons/md";

import { MdAddComment } from "react-icons/md";
import { StyledButton } from "../Elements/Button";
import { PostItem } from "./PostItem";
import { PostForm } from "./PostForm";

export const PostList = ({ data }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <Box
      sx={{
        boxShadow: "0px 4px 10px black",
        // padding: 4,
        paddingY: 3,
        background: " #ebf0f7",
        height: "100%",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            color: "text.secondary",
            fontFamily: "Lucida Sans",
            fontSize: { xs: "1.2rem", sm: "2rem" },
            textShadow: "1px 1px 1px text.secondary",
            mb: 2,
            width: "100%",
          }}
        >
          Dive into content or create it !
        </Typography>
        <StyledButton
          onClick={() => setShowForm(!showForm)}
          sx={{
            width: "90%",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            m: "auto",
          }}
        >
          {showForm ? (
            <FaWindowClose style={{ fontSize: "1.5rem", color: "red" }} />
          ) : (
            <MdOutlineAdd
              style={{ fontSize: "1.5rem", color: "secondary.main" }}
            />
          )}
          {showForm ? "Cancel Post" : "Create Post"}
        </StyledButton>
      </Box>

      {showForm && (
        <Box
          sx={{
            mb: "1rem",
          }}
        >
          <PostForm setShowForm={setShowForm} />
        </Box>
      )}

      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          mt: "1rem",
        }}
      >
        {data.length > 0 ? (
          data.map((post) => (
            <Paper
              key={post.id}
              elevation={3}
              sx={{
                padding: ".4rem",
                borderRadius: "8px",
                backgroundColor: "#f5f5f5",
                boxShadow: "5px 5px 6px #808080",
              }}
            >
              <PostItem post={post} />
            </Paper>
          ))
        ) : (
          <Typography
            variant="h6"
            sx={{ p: 10 }}
          >
            There are no posts available at the moment. Be the first to share
            your thoughts and create one now!
          </Typography>
        )}
      </List>
    </Box>
  );
};
