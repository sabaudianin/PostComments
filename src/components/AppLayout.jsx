import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { Nav } from "./Nav";

export const AppLayout = () => {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(84deg, rgba(129,122,122,1) 0%, rgba(74,71,71,0.9417892156862745) 35%, rgba(97,151,158,1) 100%)",
      }}
    >
      <Nav />

      <Box sx={{ marginTop: "2rem", padding: "1rem" }}>
        <Outlet />
      </Box>
    </Box>
  );
};
