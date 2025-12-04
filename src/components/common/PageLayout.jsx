import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../navigation/Navbar";
import Footer from "../footer/Footer";

const PageLayout = () => {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default PageLayout;
