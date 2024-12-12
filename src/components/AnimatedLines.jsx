import { Typography, Box } from "@mui/material";

export const AnimatedLines = ({ children }) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          top: "-20%",
          left: "50%",
          width: 0,
          height: "4px",
          background: "linear-gradient(90deg, green, yellow, red)",
          animation: "expandLeft 3s ease-in-out forwards",
        }}
      />
      {children}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          width: 0,
          height: "4px",
          background: "linear-gradient(90deg, green, yellow, red)",
          animation: "expandRight 3s ease-in-out forwards",
        }}
      />
    </Box>
  );
};
