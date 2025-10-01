import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { Nav } from "./Nav";

export const AppLayout = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        backgroundImage: 'url("/bg.jpg")',
        // backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <Box sx={{ minHeight: "100vh", width: "100%", maxWidth: "1300px" }}>
        <Nav />
        <Outlet />
      </Box>
    </Box>
  );
};
