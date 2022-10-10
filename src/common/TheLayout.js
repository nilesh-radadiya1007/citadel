import React from "react";
import TheContent from "./TheContent";
import { Toolbar, Box } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';
import Header from "../component/Header";
import Title from "./Title";
import Sidebar from "../component/Sidebar";
// import Footer from "./Footer";
function TheLayout(props) {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <>
          <Header />
          {/* <Title /> */}
        </>

        <Sidebar />
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: 'background.default' }}
        >
          {/* <Toolbar /> */}
          <TheContent {...props} />
        </Box>
      </Box>
    </>
  );
}
export default TheLayout;
