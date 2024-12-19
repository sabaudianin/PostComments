import { Button } from "@mui/material";

export const StyledButton = ({ children, sx, ...props }) => {
  return (
    <Button
      {...props} // Przekazuje wszystkie inne propsy
      variant="contained"
      sx={{
        padding: "0.75rem",
        fontSize: "1rem",
        fontWeight: "bold",
        textTransform: "none",
        backgroundColor: "#F8F8F8",
        boxShadow: "5px 5px 6px #808080",
        color: "#000",
        "&:hover": {
          boxShadow: "5px 5px 16px #808080 ",
          backgroundColor: "#E0E0E0",
        },
        ...sx, // Łączy przekazane style z domyślnymi
      }}
    >
      {children}
    </Button>
  );
};
