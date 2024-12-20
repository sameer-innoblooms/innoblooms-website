import { Box, Container, Typography } from "@mui/material";
import React from "react";
import BlogListing from "./Blogs";
import Breadcrumb from "@/app/components/Breadcrumb";

const page = () => {
  return (
    <>
      {/* <Container maxWidth="xl" disableGutters> */}
      <Box
          sx={{
            
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
            alignItems: "center",
            flexDirection: "column",
            height: { xs: "50vh", sm: "60vh", md: "70vh" },
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            transition: "background-size 0.5s ease",
            position: "relative",
            objectFit: "cover",
            maxHeight: "1500px",
            backgroundImage: `url(/blogs.jpg)`,
            backgroundPositionY: -90,
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Black overlay with 50% opacity
              zIndex: 1, // Ensure the overlay is above the background image
            },
          }}
        >
          <Typography
            variant="h1"
            color="white"
            align="center"
            sx={{
              zIndex: 9,
              mb:2
            }}
          >
            Blogs
          </Typography>
          <Box sx={{
            zIndex: 9,
            width: '700px',
            display: 'flex',
            justifyContent: 'center',
            justifyItems: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}>
          <Breadcrumb/>

          </Box>
          {/* <Typography
            variant="body1"
            color="white"
            align="center"
            sx={{
              zIndex: 9,
              width: '700px'
            }}
          >
            Access expert advice and innovative strategies to elevate your business success. Gain valuable insights and guidance to navigate challenges and seize growth opportunities.
          </Typography> */}
        </Box>
        <BlogListing />
      {/* </Container> */}
    </>
  );
};

export default page;
