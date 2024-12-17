import { createContext, useContext, useState } from "react";
import { Snackbar, Alert, Slide } from "@mui/material";

export const SnackbarContext = createContext();

export const SnackbarProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const closeSnackbar = () => setSnackbar({ ...snackbar, open: false });

  const showSnackbar = (message, severity = "success") => {
    setSnackbar({ open: true, message, severity });
  };

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={closeSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        TransitionComponent={(props) => (
          <Slide
            {...props}
            direction="down"
          />
        )}
      >
        <Alert
          onClose={closeSnackbar}
          severity={snackbar.severity}
          sx={{
            width: "100%",
            padding: "1rem",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            background: snackbar.severity === "success" ? "#00FF00" : "#FF4D4D",
            fontWeight: "bold",
            opacity: "99%",
            color: "#fff",
            fontSize: "1rem",
          }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => useContext(SnackbarContext);
