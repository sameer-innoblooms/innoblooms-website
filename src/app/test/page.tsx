import React from 'react';
import { Button, Box } from '@mui/material';

const MyComponent = () => {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
            bgcolor="grey.100"
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Button variant="contained" color="success" sx={{ width: '160px' }}>
                    Submit
                </Button>
                <Button variant="outlined" color="default" sx={{ width: '160px' }}>
                    Cancel
                </Button>
                <Button variant="outlined" color="default" sx={{ width: '160px' }}>
                    Help
                </Button>
            </Box>
        </Box>
    );
};

export default MyComponent;