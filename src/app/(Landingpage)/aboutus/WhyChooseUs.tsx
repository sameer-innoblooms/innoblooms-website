'use client'

import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

export default function WhyChooseUs() {
  const benefits = [
    "Sincere, experienced and dedicated team.",
    "Use of latest and flexible Agile development model.",
    "UI/UX expertise, building user friendly applications.",
    "Quality standards & adherence to best coding guidelines.",
    "Proper use of patterns on frontend, unified code style for JavaScript.",
    "Supply engagement models – fixed cost, part-time hiring, full-time hiring, etc.",
    "QA, Presentation, load & stress testing before delivery.",
    "Scalable infrastructure support for your business necessities.",
    "Use of Version Control Systems to manage and document changes to source code over time."
  ]

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            sx={{
              color: '#8B3DFF',
              mb: 2,
              fontWeight: 500,
              textTransform: 'uppercase'
            }}
          >
            WHY CHOOSE US
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: '#4A4A4A',
              fontSize: { xs: '2rem', md: '2.5rem' },
              fontWeight: 600,
              mb: 4
            }}
          >
            Why Innoblooms as a Partner
          </Typography>
        </Box>

        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                bgcolor: '#6B2FB3',
                borderRadius: '32px',
                p: { xs: 4, md: 6 },
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography
                sx={{
                  color: 'white',
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 500,
                  textAlign: 'center',
                  lineHeight: 1.4,
                  fontStyle: 'italic'
                }}
              >
                A Results-Focused Web App Development company
                <br /><br />
                From enterprises to startups, we at Innoblooms help companies of all sizes to create web experiences that are human-oriented, future ready, and simply best in-class.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h5"
                sx={{
                  color: '#4A4A4A',
                  fontWeight: 500,
                  mb: 3
                }}
              >
                Our projects highlight the immense confidence our clients put in our work.
              </Typography>
              <Typography
                sx={{
                  color: '#666666',
                  mb: 4
                }}
              >
                We work with commitment and on-time delivery. With us, you can leverage from the following benefits.
              </Typography>
            </Box>
            <List sx={{ '& .MuiListItem-root': { px: 0, py: 1 } }}>
              {benefits.map((benefit, index) => (
                <ListItem key={index}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <CheckCircleOutlineIcon sx={{ color: '#6B2FB3' }} />
                  </ListItemIcon>
                  <ListItemText 
                    primary={benefit}
                    sx={{
                      '& .MuiListItemText-primary': {
                        color: '#666666',
                        fontSize: '1rem'
                      }
                    }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

