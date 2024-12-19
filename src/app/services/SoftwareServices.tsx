'use client'
import React from 'react';
import Lottie from 'lottie-react';
import softwareservices from '../lotties/softwareservices.json'
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Paper,
  ThemeProvider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import theme from './theme';



// Custom styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  backgroundColor: theme.palette.background.paper,
  marginTop:'500px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

// const TechIcon = styled('img')({
//   width: 60,
//   height: 60,
//   marginBottom: 16,
// });

const SoftwareServices = () => {
  
  const technologies = [
    { name: 'React Native', icon: '/path-to-react-native-icon.svg' },
    { name: 'Swift', icon: '/path-to-swift-icon.svg' },
    { name: 'Kotlin', icon: '/path-to-kotlin-icon.svg' },
    { name: 'Flutter', icon: '/path-to-flutter-icon.svg' },
  ];

  const features = [
    'Custom software development services',
    'Web development services',
    'Mobile software development services',
    'Embedded systems development',
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'background.default',
        //  minHeight: '100vh',
          py: 16 }}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Box mb={4}>
                {/* <Typography variant="overline" color="text.secondary" gutterBottom>
                  UN-PUT-DOWNABLE
                </Typography> */}
                <Typography variant="h2" color="primary" fontWeight="bold" gutterBottom>
                    Software Services
                </Typography>
              </Box>
              <Typography variant="body1" color="text.secondary" paragraph>
              Every successful service website shares common elements that are essential for engaging visitors and converting them into clients. Consider clear service descriptions and compelling portfolios, client testimonials, and easy-to-use contact forms. We will find and analyze these key features in the examples so you can get valuable insights, inspiration, and ideas for your service website project. Let’s go!.
              </Typography>
              <List>
                {features.map((feature, index) => (
                  <ListItem key={index} disableGutters>
                    <ListItemIcon>
                      <FiberManualRecordIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={feature} 
                      primaryTypographyProps={{ color: 'primary' }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                {/* {technologies.map((tech, index) => (
                  <Grid item xs={6} key={index}>
                    <StyledPaper elevation={3}>
                      <TechIcon src={tech.icon} alt={tech.name} />
                      <Typography variant="subtitle1" color="text.secondary">
                        {tech.name}
                      </Typography>
                    </StyledPaper>
                  </Grid> ))} */}
                <Lottie animationData={softwareservices} loop={true}/>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        
      </Box>
      
    </ThemeProvider>
  );
};

export default SoftwareServices;