import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { Nav } from "./Nav";

export const AppLayout = () => {
  return (
    <Box>
      <Nav />

      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};
