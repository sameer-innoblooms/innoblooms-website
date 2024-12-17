"use client"
import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const ServiceSubcategories = [
  { 
    category: 'Web Development', 
    subcategories: [
      { text: 'Frontend Development', href: '/services/frontend' },
      { text: 'Backend Development', href: '/services/backend' },
      { text: 'Full Stack Solutions', href: '/services/fullstack' }
    ]
  },
  { 
    category: 'Digital Marketing', 
    subcategories: [
      { text: 'SEO Optimization', href: '/services/seo' },
      { text: 'Social Media Marketing', href: '/services/social-media' },
      { text: 'Content Marketing', href: '/services/content-marketing' }
    ]
  },
  { 
    category: 'Cloud Solutions', 
    subcategories: [
      { text: 'Cloud Migration', href: '/services/cloud-migration' },
      { text: 'Cloud Management', href: '/services/cloud-management' },
      { text: 'Cloud Security', href: '/services/cloud-security' }
    ]
  }
];

const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter()
  const pathname = usePathname()

  return (
    <Box 
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      sx={{ position: 'relative' }}
      onClick = {()=> router.push('/services')}
    >
      <Typography
        variant="h6"
        color="white"
        component="div"
        sx={{ 
          px: 4, 
          py: 3, 
          fontSize: { xs: "16px", sm: "18px" },
          cursor: 'pointer',
          fontWeight: '10px',
          textDecoration: pathname === '/services' ? "underline" : "",
        }}
      >
        Services
      </Typography>
      
      {isOpen && (
        <Box
          sx={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '300px',
            bgcolor: 'white',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            borderRadius: '8px',
            p: 2,
            zIndex: 1000,
          }}
        >
          {ServiceSubcategories.map((serviceGroup) => (
            <Box key={serviceGroup.category} sx={{ mb: 2 }}>
              <Typography 
                variant="subtitle1" 
                sx={{ 
                  fontWeight: 'bold', 
                  color: 'black', 
                  mb: 1,
                  borderBottom: '1px solid #eee'
                }}
              >
                {serviceGroup.category}
              </Typography>
              {serviceGroup.subcategories.map((subcat) => (
                <Link 
                  key={subcat.text} 
                  href={subcat.href} 
                  passHref
                >
                  <Typography
                    sx={{
                      color: 'black',
                      p: 1,
                      '&:hover': {
                        bgcolor: '#f0f0f0',
                        borderRadius: '4px'
                      }
                    }}
                  >
                    {subcat.text}
                  </Typography>
                </Link>
              ))}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ServicesDropdown;