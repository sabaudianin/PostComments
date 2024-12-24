import { TextField } from "@mui/material";

export const SearchPost = ({ value, onChange }) => {
  return (
    <TextField
      label="Search Posts..."
      variant="outlined"
      fullWidth
      value={value}
      onChange={onChange}
      sx={{
        backgroundColor: "#fff",
        boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.1)",
        height: "40px",
        "& .MuiInputBase-root": {
          height: "40px",
          padding: "0 10px",
        },
        "& .MuiInputLabel-root": {
          fontSize: "0.875rem",
          top: "-5px",
        },
        "& .MuiOutlinedInput-root": {
          fontSize: "0.875rem",
          height: "40px",
        },
      }}
    />
  );
};
