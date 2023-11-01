import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";

function MainLayout() {
  return (
    <Stack sx={{ minHeight: "100vh" }}>
      <MainHeader />

      <Outlet />

      <MainFooter />
    </Stack>
  );
}

export default MainLayout;
