import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { Nav } from "./Nav";

export const AppLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        backgroundImage: 'url("/bg.jpg")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Nav />
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};
