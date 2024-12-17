'use client'

import React from 'react'
import { Box, Container, Typography, useMediaQuery } from '@mui/material'
import Slider from 'react-slick'
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

let theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
})

theme = responsiveFontSizes(theme)

const partnerDetails = [
  {
    imag:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkj6H2_50pB8bmlu2kpvxFgFjbJNCLaBMn1A&s'
  },
  {
    imag: "https://www.twmg.com.au/kentico-bronze-partner.png",
  },
  {
    imag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCq8TE4WX-65fYsT3azz5pNfvG2hZhuJ1c6PONybdthfGaJq6jJLlaKM7UNSB_JAVu3O4&usqp=CAU",
  },
  {
    imag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSApNBbvV9oNf4-cdTCczXURADnv9liDNzKHA&s",
  },
  {
    imag: "https://blog.markergroupe.com/images/2024/07/amazon-fba-logo-feature.jpg",
  },
  {
    imag:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2p-6RxAhZyZj1T5r2S6ZsJffhf2n22arGw&s'
  },
  {
    imag:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnsTnxapHtwI7ceGoU1x3doz9Hh67o6ZEXIA&s'
  },
  {
    imag:'https://static.vecteezy.com/system/resources/previews/020/040/714/non_2x/team-community-partners-logo-template-social-network-corporate-branding-identity-free-vector.jpg'
  }
]

const PartnersCarousel = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : isTablet ? 2 : 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    arrows: !isMobile,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <Slider {...settings}>
      {partnerDetails.map((partner, index) => (
        <Box key={index} sx={{ p: { xs: 1, sm: 2 } }}>
          <Box
            sx={{
              height: { xs: 100, sm: 120, md: 150 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'white',
              borderRadius: 2,
              boxShadow: 1,
              overflow: 'hidden',
            }}
          >
            <img
              src={partner.imag}
              alt={`Partner ${index + 1}`}
              style={{
                maxWidth: '80%',
                maxHeight: '80%',
                objectFit: 'contain',
              }}
            />
          </Box>
        </Box>
      ))}
    </Slider>
  )
}

export default function OurPartnersPage() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'background.default', py: { xs: 4, sm: 6, md: 8 }, mt: { xs: 4, sm: 6, md: 10 } }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: { xs: 3, sm: 4, md: 6 },
              fontWeight: 'bold',
              color: 'text.primary',
            }}
          >
            Our Partners
          </Typography>
          <PartnersCarousel />
        </Container>
      </Box>
    </ThemeProvider>
  )
}

