import { Box, CssBaseline } from "@mui/material";
import React from "react";
import Header from "../component/Header";
import Sidebar from "../component/Sidebar";
import TheContent from "./TheContent";
function TheLayout(props) {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <>
          <Header />
        </>

        <Sidebar />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default' }}
        >
          <TheContent {...props} />
        </Box>
      </Box>
    </>
  );
}
export default TheLayout;
