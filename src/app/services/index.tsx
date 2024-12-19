import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const Services = () => {
  return (
    <div>
      <Box>
        <Typography
          variant="h5"
          sx={{
            textDecoration: "underline",
            textAlign: "center",
            color: "#a6a5b1",
            mt: 5,
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Our Services
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5" sx={{ textAlign: "center", mt: 2, mb: 2, color: 'grey' }}>
          AI automation, consulting, software solutions, and resource
          augmentation.
        </Typography>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4 }}
        sx={{ 
          px: { xs: 2, sm: 4, md: 6 },
          justifyContent: "center" 
        }}
      >
        <Grid 
          item 
          xs={12} 
          sm={6} 
          md={3}
          sx={{ 
            mb: { xs: 2, sm: 3 } 
          }}
        >
          <Box
            sx={{
              border: "0.5px solid #ccc",
              borderRadius: 4,
              backgroundImage:
                "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0HBQhqTWYHgeWqNH4t12K_ULKEI4qkpsBQ70d5lr9SFxyYci2ykV7GBtnNprabaI2HC0&usqp=CAU')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: { xs: "250px", sm: "300px", md: "350px" },
              display: "flex",
              alignItems: "flex-end",
              p: 3,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              Business Consulting
            </Typography>
          </Box>
        </Grid>

        <Grid 
          item 
          xs={12} 
          sm={6} 
          md={3}
          sx={{ 
            mb: { xs: 2, sm: 3 } 
          }}
        >
          <Box
            sx={{
              border: "1px solid #ccc",
              borderRadius: 4,
              backgroundImage:
                "url('https://5.imimg.com/data5/CN/HB/GLADMIN-36236926/consulting-service-500x500.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: { xs: "250px", sm: "300px", md: "350px" },
              display: "flex",
              alignItems: "flex-end",
              p: 3,
            }}
          >
            <Typography
              variant="h6"
              sx={{ 
                fontWeight: "bold", 
                color: "white" 
              }}
            >
              Resource Augmentation
            </Typography>
          </Box>
        </Grid>

        <Grid 
          item 
          xs={12} 
          sm={6} 
          md={3}
          sx={{ 
            mb: { xs: 2, sm: 3 } 
          }}
        >
          <Box
            sx={{
              border: "1px solid #ccc",
              borderRadius: 4,
              backgroundImage:
                "url('https://i.gifer.com/origin/5a/5ab98406cc6c8fbba9ddb014c2bcdb80_w200.gif')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: { xs: "250px", sm: "300px", md: "350px" },
              display: "flex",
              alignItems: "flex-end",
              p: 3,
            }}
          >
            <Typography
              variant="h6"
              sx={{ 
                fontWeight: "bold", 
                color: "white" 
              }}
            >
              Automation with AI
            </Typography>
          </Box>
        </Grid>

        <Grid 
          item 
          xs={12} 
          sm={6} 
          md={3}
          sx={{ 
            mb: { xs: 2, sm: 3 } 
          }}
        >
          <Box
            sx={{
              border: "1px solid #ccc",
              borderRadius: 4,
              backgroundImage:
                "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfcbTOtAiENq2m9sVfBJH0GzBY3_WYViSNRA&s')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: { xs: "250px", sm: "300px", md: "350px" },
              display: "flex",
              alignItems: "flex-end",
              p: 3,
            }}
          >
            <Typography
              variant="h6"
              sx={{ 
                fontWeight: "bold", 
                color: "white" 
              }}
            >
              Software Services
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Services;