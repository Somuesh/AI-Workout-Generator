import React from 'react';
import { Box, Divider, Stack, Typography } from '@mui/material';


const OutputCard = ({ heading, image, subheading, content }) => {
    return (
        <>
            <Stack spacing={1.25} p={2} my={1} sx={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '5px',
                border: '1px solid white',
                flex: 1,
                color: 'black',
                backgroundColor: 'white',
                alignItems: 'center'
            }}>
                <Stack>
                    <Typography variant='h6' fontWeight={'bold'}>{heading} :</Typography>
                    <Divider />
                </Stack>
                <Stack p={2} spacing={2} justifyContent={'center'} alignItems={'center'}
                    sx={{
                        sm: {
                            display: 'flex',
                            flexDirection: 'column'
                        }
                    }}
                >
                    <Box>
                        <img
                            width={250}
                            max-width={250}
                            max-height={300}
                            src={image}
                            alt={image}
                            style={{ borderRadius: '5px' }}
                            loading="lazy"
                        />
                    </Box>
                    <Box p={2}>
                        <Typography variant='caption'>{subheading}</Typography>
                        <Typography variant='p' component={'p'}>
                            {content}
                        </Typography>
                    </Box>
                </Stack>
            </Stack>
        </>
    )
}


export default OutputCard;