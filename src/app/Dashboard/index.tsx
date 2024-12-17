"use client";
import React from "react";
import Home from "../Home/index";
import { Box } from "@mui/material";
import Services from "../services";
import ClientsCard from "../ClientsSay/ClientsCard";
import ClientsSay from "../ClientsSay";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Headers from "../Headers";
import OurPartners from "../OurPartners";
import Footer from "../Footer";
import Feedbackform from "../Feedbackform";
import BackgroundImage from "../BackgroundImage";
function Dashboard() {
  return (
    <Box>
      <Headers />
      <Home />
      <Services />
      <BackgroundImage />
      <ClientsSay />
      <OurPartners />
      <Feedbackform />
      <Footer />
    </Box>
  );
}

export default Dashboard;