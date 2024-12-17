    'use client'

import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material'
import { Cloud, Devices, Science } from '@mui/icons-material'

export default function WhatWeDo() {
  const services = [
    {
      title: 'Native App Development',
      icon: <Science sx={{ fontSize: 64, color: '#6B2FB3' }} />,
      description: 'Native Mobile Application Development is one of the best ways to make your business more nourishing in the presence large number of business in the wide market of mobile app development.'
    },
    {
      title: 'Hybrid App Development',
      icon: <Cloud sx={{ fontSize: 64, color: '#6B2FB3' }} />,
      description: 'Are you looking for a Hybrid Mobile App Development Company? We have highly expert developers who are experts in their own field. We provide effectively and the most affordable options for Hybrid App Development'
    },
    {
      title: 'Web App Development',
      icon: <Devices sx={{ fontSize: 64, color: '#6B2FB3' }} />,
      description: 'We at Moptra provide the best in class Web App Development Services created using the latest technology as per the industry standard within the budget limits given to us by our clients.'
    }
  ]

  return (
    <Box
      sx={{
        py: 8,
        background: 'linear-gradient(45deg, rgba(107,47,179,0.05) 0%, rgba(107,47,179,0.1) 100%)',
        backgroundImage: `
          linear-gradient(45deg, rgba(107,47,179,0.05) 0%, rgba(107,47,179,0.1) 100%),
          repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(107,47,179,0.03) 2px, rgba(107,47,179,0.03) 3px)
        `,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: '#333',
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 600,
          }}
        >
          Types Of Business Consulting
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '16px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  overflow: 'hidden',
                  border: '1px solid rgba(107,47,179,0.1)',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: 4,
                    pb: 2,
                  }}
                >
                  {service.icon}
                </Box>
                <Box
                  sx={{
                    bgcolor: '#6B2FB3',
                    py: 2,
                    px: 3,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'white',
                      textAlign: 'center',
                      fontWeight: 500,
                    }}
                  >
                    {service.title}
                  </Typography>
                </Box>
                <CardContent
                  sx={{
                    flexGrow: 1,
                    pt: 3,
                  }}
                >
                  <Typography
                    sx={{
                      color: '#666',
                      textAlign: 'center',
                      lineHeight: 1.6,
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

