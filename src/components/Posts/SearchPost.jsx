import { TextField } from "@mui/material";

export const SearchPost = ({ value, onChange }) => {
  return (
    <TextField
      label="Search Posts..."
      variant="outlined"
      margin="normal"
      fullWidth
      value={value}
      onChange={onChange}
      sx={{
        backgroundColor: "#fff",
        borderRadius: "8px",
        boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.1)",
      }}
    />
  );
};
