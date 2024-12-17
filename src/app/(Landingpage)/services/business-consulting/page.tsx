import React from 'react'
import Container from '@mui/material/Container'
import { Box } from '@mui/material'
import WhatWeDo from './WhatWeDo'
import Overview from './Overview'
import ServicesAccordion from '@/app/components/ServicesAccordian'
import Footer from '@/app/Footer'

const page = () => {
  return (
    <div>
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
          backgroundImage: `url(/Business-consulting.jpg)`,
        }}
      >

      </Box>
      <Overview/>
      <WhatWeDo/> 
      <ServicesAccordion/>
      <Footer/>
      </Container>
    </div>
  )
}

export default page
