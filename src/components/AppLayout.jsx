import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { Nav } from "./Nav";

export const AppLayout = () => {
  return (
    <Box sx={{ background: "#F5FFFA" }}>
      <Nav />

      <Box sx={{ marginTop: "1rem" }}>
        <Outlet />
      </Box>
    </Box>
  );
};
