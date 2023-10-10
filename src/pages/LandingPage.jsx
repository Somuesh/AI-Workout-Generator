import React from 'react';
import banner from '../assets/slider-3.jpeg';
import { Box, Stack, Typography } from '@mui/material';
import { ChoiceForm } from '../components/ChoiceForm/ChoiceForm'

export const LandingPage = () => {
    return (
        <>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#010c12',
            }}>
                <Typography variant='h3' id="heading-text" p={1}> One Stop Fitness </Typography>
            </Box>
            <Stack display={'flex'} sx={{
                flexDirection: {
                    lg: 'row',
                    sm: 'column',
                    md: 'row',
                },
            }}>
                <Box display={'flex'} sx={{ flex: '1' }}><img width={'100%'} src={banner} alt='slider-banner' /></Box>
                <Box display={'flex'} sx={{ flex: '1' }}><ChoiceForm /></Box>
            </Stack>
        </>
    )
}
