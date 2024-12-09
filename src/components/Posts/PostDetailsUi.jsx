import { Paper, Typography, Box } from "@mui/material";

export const PostDetailsUi = ({ data }) => {
  if (!data) return null;

  return (
    <Paper
      elevation={3}
      sx={{
        padding: "2rem",
        margin: "2rem auto",
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        backgroundColor: "background.paper",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {data.title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          lineHeight: "1.8",
          textAlign: "justify",
        }}
      >
        {data.content}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "1rem",
        }}
      >
        <Typography
          variant="subtitle1"
          color="text.secondary"
        >
          Author: {data.author}
        </Typography>
        <Typography
          variant="subtitle2"
          color="text.secondary"
        >
          Date: {new Date(data.date).toLocaleDateString()}
        </Typography>
      </Box>
    </Paper>
  );
};
