'use client'
import React from 'react';
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
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const TechIcon = styled('img')({
  width: 60,
  height: 60,
  marginBottom: 16,
});

const BusinessConsulting = () => {
  const technologies = [
    { name: 'React Native', icon: '/path-to-react-native-icon.svg' },
    { name: 'Swift', icon: '/path-to-swift-icon.svg' },
    { name: 'Kotlin', icon: '/path-to-kotlin-icon.svg' },
    { name: 'Flutter', icon: '/path-to-flutter-icon.svg' },
  ];

  const features = [
    'Native Applications',
    'Hybrid Apps',
    'Frameworks and Libraries',
    'Automated QA services',
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 16 }}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Box mb={4}>
                <Typography variant="overline" color="text.secondary" gutterBottom>
                  UN-PUT-DOWNABLE
                </Typography>
                <Typography variant="h2" color="primary" fontWeight="bold" gutterBottom>
                  MOBILE APPS
                </Typography>
              </Box>
              <Typography variant="body1" color="text.secondary" paragraph>
                No, we don't mind competing with the gold fish in keeping the attention span of your users. 
                We have built mobile apps for the most impatient, unforgivable of your users. 
                We feel a kick when these users turn into your brand advocates (read addicts).
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
                {technologies.map((tech, index) => (
                  <Grid item xs={6} key={index}>
                    <StyledPaper elevation={3}>
                      <TechIcon src={tech.icon} alt={tech.name} />
                      <Typography variant="subtitle1" color="text.secondary">
                        {tech.name}
                      </Typography>
                    </StyledPaper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default BusinessConsulting;

