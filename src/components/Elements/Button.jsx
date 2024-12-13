import { Button } from "@mui/material";

export const StyledButton = ({ children, type }) => {
  return (
    <Button
      type={type}
      variant="contained"
      sx={{
        padding: "0.75rem",
        fontSize: "1rem",
        fontWeight: "bold",
        textTransform: "none",
        backgroundColor: "secondary.main",
      }}
    >
      {children}
    </Button>
  );
};
