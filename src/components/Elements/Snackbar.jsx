import { Snackbar, Alert, Slide } from "@mui/material";

export const StyledSnackbar = ({ snackbar, closeSnackbar }) => {
  const slide = (props) => (
    <Slide
      {...props}
      direction="down"
    />
  );

  return (
    <Snackbar
      open={snackbar.open}
      autoHideDuration={5000}
      onClose={closeSnackbar}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      TransitionComponent={slide}
    >
      <Alert
        onClose={closeSnackbar}
        severity={snackbar.severity}
        sx={{
          width: "100%",
          padding: "1rem",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
          background: "#00FF00",
          fontWeight: "bold",
        }}
      >
        {snackbar.message}
      </Alert>
    </Snackbar>
  );
};
