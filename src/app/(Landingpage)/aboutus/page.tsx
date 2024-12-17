"use client"

import { Container, Box, Typography } from "@mui/material";
import React from "react";
import WorkingProcess from ".";
import Feedbackform from "@/app/Feedbackform";

function About() {
  return (
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
          backgroundImage: `url('https://img.freepik.com/premium-photo/computer-teamwork-solving-problems-tech-industry_1274913-37557.jpg')`,
        }}
      />
      <Box 
        sx={{
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4,
          px: { xs: 2, sm: 4, md: 5 },
          my: { xs: 4, sm: 5 },
        }}
      >
        <Box 
          sx={{
            height: { xs: '300px', sm: '400px', md: '500px' },
            width: '100%',
            maxWidth: '500px',
            backgroundImage: `url('https://img.freepik.com/premium-photo/computer-teamwork-solving-problems-tech-industry_1274913-37557.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Box 
          sx={{
            height: { xs: 'auto', md: '500px' },
            width: '100%',
            maxWidth: '500px',
            bgcolor: 'grey.200',
            p: { xs: 3, sm: 4, md: 6 },
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga fugiat deleniti odit blanditiis illum harum at perspiciatis ut, provident explicabo, tempora ullam? Quo doloremque corrupti beatae non ipsa et, ipsam molestiae eligendi dolorum nostrum cum mollitia, vel pariatur esse modi aut sed aspernatur ullam. Dicta porro assumenda reprehenderit aspernatur iusto?
          </Typography>
        </Box>
      </Box>  
      <WorkingProcess />
      <Feedbackform />
    </Container>
  );
}

export default About;

