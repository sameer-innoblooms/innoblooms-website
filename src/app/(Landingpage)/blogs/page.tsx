import { Box, Container } from "@mui/material";
import React from "react";
import BlogListing from "./Blogs";

const page = () => {
  return (
    <>
      <Container maxWidth="xl" disableGutters>
        <Box
          sx={{
            height: { xs: "50vh", sm: "60vh", md: "70vh" },
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            transition: "background-size 0.5s ease",
            position: "relative",
            objectFit: "cover",
            maxHeight: "1500px",
            backgroundImage: `url(/Blogs.jpg)`,
            mt: 10,
          }}
        ></Box>
        <BlogListing />
      </Container>
    </>
  );
};

export default page;
