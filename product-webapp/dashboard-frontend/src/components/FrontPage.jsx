import React from 'react'
import { CssVarsProvider } from "@mui/joy/styles"
import CssBaseline from "@mui/joy/CssBaseline"
import Box from "@mui/joy/Box"
import Button from "@mui/joy/Button"
import Typography from "@mui/joy/Typography"

import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded"

// import Sidebar from './components/Sidebar';
import OrderTable from "../components/Dashboard"
import AddRoute from "../components/AddRoute"
import StartAlert from "./StartRoute"
import ResponsiveAppBar from "../components/AppAppBar"
// import Header from '../components/Header';


const FrontPage = () => {
  return (
    <div>
    <ResponsiveAppBar/>
    <CssVarsProvider disableTransitionOnChange>
    {/* <ResponsiveAppBar/> */}
      <CssBaseline />
      {/* <ResponsiveAppBar/> */}
      {/* <Header /> */}
      <Box sx={{ display: "flex", minHeight: "100dvh" , backgroundColor:"#DDE6ED"}}>
        <Box
          component="main"
          className="MainContent"
          sx={{
            px: { xs: 2, md: 6 },
            pt: {
              xs: "calc(12px + var(--Header-height))",
              sm: "calc(12px + var(--Header-height))",
              md: "70px"
            },
            pb: { xs: 2, sm: 2, md: 3 },
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
            //height: "100dvh",
            height: '100%',
            gap: 1
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
          </Box>
          {/* <Box
            sx={{
              display: "flex",
              mb: 1,
              gap: 1,
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "start", sm: "center" },
              flexWrap: "wrap",
              justifyContent: "space-between"
            }}
          >
            <Typography level="h2" component="h1">
              SFTP Channels
            </Typography>
            {<AddRoute/>}
          </Box> */}
          <OrderTable />
          {/* <OrderList /> */}
          {/* <FormComponent></FormComponent> */}
          {/* <StartAlert/> */}
        </Box>
        
      </Box>
     
     </CssVarsProvider>
     </div>
  )
}

export default FrontPage
