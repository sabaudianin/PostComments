import { Container, Box, Typography } from "@mui/material";

export const ErrorPost = ({ error }) => {
  return (
    <Container
      sx={{
        boxShadow: "0px 4px 10px red",
        padding: 2,
        paddingTop: 4,
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          background: "#f2f2f2",
          padding: 5,
          transform: "translateY(-50%)",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            color: "red",
            fontFamily: "Lucida Sans",
            fontSize: { xs: "2rem", sm: "2rem" },
            textShadow: "2px 2px 2px red",
            mb: 2,
            width: "100%",
          }}
        >
          Error: {error.message}
        </Typography>
      </Box>
    </Container>
  );
};
