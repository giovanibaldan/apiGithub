import React from 'react';
import { Box, CircularProgress } from '@mui/material';

function Loading() {
    return (
        <div style={darkBackground}>
            <Box sx={{ display: 'flex' }}>
                <CircularProgress size={85} color="primary" />
            </Box>
        </div>
    );
}

const darkBackground = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
};

export default Loading;
