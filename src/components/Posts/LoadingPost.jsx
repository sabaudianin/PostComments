import { Container, Box, Typography } from "@mui/material";

export const LoadingPost = () => {
  return (
    <Container
      sx={{
        boxShadow: "0px 4px 10px black",
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
          width: "100%",
          transform: "translateY(-50%)",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            // color: "text.secondary",
            fontFamily: "Lucida Sans",
            fontSize: { xs: "2rem", sm: "2rem" },
            textShadow: "2px 2px 2px #000",
            mb: 2,
            width: "100%",
          }}
        >
          ....LOADING....
        </Typography>
      </Box>
    </Container>
  );
};
