'use client'

import { Box, Container, Typography } from '@mui/material'
import { Phone, Mail, LocationOn } from '@mui/icons-material'
import Feedbackform from '@/app/Feedbackform'
import BackgroundImage from '@/app/BackgroundImage'
import Footer from '@/app/Footer'

export default function ContactSection() {
  return (
    <>
    <BackgroundImage/>
    <Feedbackform/>
      <Container 
      maxWidth='xl' 
      disableGutters 
      sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', md: 'row' },
        height: '700px', 
        overflow: 'hidden',
        maxWidth: '1600px'
      }}
    >
      <Box sx={{ flex: 1, height: { xs: '300px', md: '100%' } }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.1019833!3d44.4568359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4461e878dd%3A0x4075fedadb22b72a!2sBucharest%2C%20Romania!5e0!3m2!1sen!2s!4v1635959562000!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
      
      <Box 
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          p: { xs: 4, md: 8 },
          backgroundColor: '#ffffff',
          overflow: 'auto'
        }}
      >
        <Typography 
          variant="h2" 
          sx={{ 
            mb: 6,
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            fontWeight: 600
          }}
        >
          Meet us
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Phone sx={{ color: '#00000099', fontSize: 24 }} />
            <Typography 
              variant="body1"
              sx={{ 
                color: '#000000DE',
                fontSize: '1.1rem',
                '&:hover': { color: '#000000' }
              }}
              component="a"
              href="tel:+40728303133"
            >
              +40728303133
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Mail sx={{ color: '#00000099', fontSize: 24 }} />
            <Typography 
              variant="body1"
              sx={{ 
                color: '#000000DE',
                fontSize: '1.1rem',
                '&:hover': { color: '#000000' }
              }}
              component="a"
              href="mailto:contact@brandaffair.ro"
            >
              contact@brandaffair.ro
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <LocationOn sx={{ color: '#00000099', fontSize: 24 }} />
            <Typography 
              variant="body1"
              sx={{ 
                color: '#000000DE',
                fontSize: '1.1rem',
                maxWidth: '300px'
              }}
            >
              Amman St, no 35, 4th floor, ap 10, Bucharest
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
    <Box sx={{
      mx: 8,
      mt:3
    }}>
    <Footer/>
    </Box>
    </>

  )
}

