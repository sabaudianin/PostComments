import { AppBar, Toolbar, Typography, Box, TextField } from "@mui/material";

export const Nav = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background:
          "linear-gradient(90deg, rgba(125,193,232,1) 10%, rgba(71,29,253,1) 50%)",
        padding: "0.5rem",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "1rem", sm: "1.5rem" },
          }}
        >
          CommentPost
        </Typography>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: { xs: "50%", sm: "auto" },
          }}
        >
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search posts..."
            onChange={(e) => e.target.value}
            sx={{
              backgroundColor: "white",
              borderRadius: "4px",
              minWidth: { xs: "100%", sm: "300px" },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "transparent",
                },
              },
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};
