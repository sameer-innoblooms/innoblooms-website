import { Box, Typography } from '@mui/material'
import React from 'react'

const page = () => {
  return (
    <>
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
            backgroundImage: `url(/Business-consulting.jpg)`,
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
            }}
          >
            Resource Augmentation
          </Typography>
          <Typography
            variant="body1"
            color="white"
            sx={{
              zIndex: 9,
              width: '700px'
            }}
          >
            Overcome challenges, tap into opportunities and achieve your
            business potential. Our experienced consultants provide customized
            solutions that suit the needs at every level.
          </Typography>
        </Box>
    </>
  )
}

export default page
