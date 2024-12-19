'use client'

import React from 'react'
import {
  Container,
  Typography,
  Button,
  Box,
  Avatar,
  AvatarGroup,
  styled,
  useMediaQuery
} from '@mui/material'
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material'
import Image from 'next/image'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    background: {
      default: '#ffffff',
    },
  },
})

const StyledImage = styled(Image)(({  }) => ({
  maxWidth: '100%',
  height: 'auto',
  objectFit: 'contain',
  transition: 'opacity 0.3s ease-in-out',
  '&:hover': {
    opacity: 0.8,
  },
}))

export default function PartnersPage() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'))

  const partners = [
    { logo: "/catalyze-capital.png", name: "Catalyze Capital" },
    { logo: "/gr-associates.png", name: "GR Associates" },
    { logo: "/krishnanath.png", name: "Krishnanath" },
    { logo: "/propshell.png", name: "Propshell" },
    { logo: "/saya.png", name: "SAYA" },
    { logo: "/divyasree.png", name: "DivyaSree" },
    { logo: "/harbans.png", name: "Harbans Creations" },
    { logo: "/benchmark.png", name: "Benchmark Developers" },
    { logo: "/icipl.png", name: "ICIPL" },
    { logo: "/skyline.png", name: "Skyline" },
    { logo: "/esha.png", name: "Esha" },
    { logo: "/harmony.png", name: "Harmony" },
    { logo: "/map-infra.png", name: "MAP Infra" },
    { logo: "/pyramids.png", name: "Pyramids" },
    { logo: "/subham.png", name: "Subham" },
    { logo: "/elemental.png", name: "Elemental" },
    { logo: "/stone.png", name: "Stone Co" },
    { logo: "/navayuga.png", name: "Navayuga" },
    { logo: "/rishita.png", name: "Rishita" },
    { logo: "/triflas.png", name: "Triflas" },
    // Add all other partners similarly
  ]

  const teamAvatars = [
    { avatar: "/avatar1.png?height=48&width=48&text=👤1", name: "Team Member 1" },
    { avatar: "/avatar2.png?height=48&width=48&text=👤2", name: "Team Member 2" },
    { avatar: "/avatar3.png?height=48&width=48&text=👤3", name: "Team Member 3" },
    { avatar: "/avatar1.png?height=48&width=48&text=👤4", name: "Team Member 4" },
  ]

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: isMobile ? 2 : isTablet ? 3 : 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    rows: 4,
    slidesPerRow: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          slidesToShow: 3,
          rows: 4,
        }
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 2,
          rows: 4,
        }
      }
    ]
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ py: 6, mt: 10 }}>
        <Box sx={{ mb: 6 }}>
          <Typography variant="overline" color="text.secondary" gutterBottom>
            Partners & Team
          </Typography>
          <Typography variant="h4" component="h1" gutterBottom fontWeight="bold">
            Collaborative Excellence: Building Bridges, Driving Success
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 'sm' }}>
            Empowering partnerships and fostering teamwork to achieve unparalleled excellence. 
            Our dedicated approach and shared vision create a synergy that fuels innovation 
            and drives sustainable success for all.
          </Typography>
        </Box>

        <Box sx={{ 
          mb: 4,
          '.slick-slide': {
            padding: '8px',
          },
          '.slick-arrow': {
            '&:before': {
              color: '#000',
            }
          },
          '.slick-track': {
            display: 'flex',
          }
        }}>
          <Slider {...settings}>
            {partners.map((partner, index) => (
              <Box key={index}>
                <Box
                  sx={{
                    height: 100,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white',
                    border: '1px solid',
                    borderColor: 'grey.200',
                    borderRadius: 1,
                    p: 2,
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      boxShadow: 2,
                      borderColor: 'grey.300',
                    },
                  }}
                >
                  <StyledImage
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={120}
                    height={60}
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            justifyContent: 'space-between',
            gap: 2,
            bgcolor: 'grey.50',
            p: 3,
            borderRadius: 2,
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <AvatarGroup max={4}>
              {teamAvatars.map((member, index) => (
                <Avatar
                  key={index}
                  src={member.avatar}
                  alt={`${member.name}`}
                  sx={{ width: 48, height: 48, border: 4, borderColor: 'background.paper' }}
                />
              ))}
            </AvatarGroup>
            <Typography variant="subtitle1" fontWeight="medium">
              Join the partners network
            </Typography>
          </Box>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              '&:hover .MuiSvgIcon-root': {
                transform: 'translateX(4px)',
                transition: 'transform 0.2s',
              },
            }}
          >
            Become a partner
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

