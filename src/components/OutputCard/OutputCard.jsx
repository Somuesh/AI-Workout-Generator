import React from 'react';
import { Box, Divider, Stack, Typography } from '@mui/material';


const OutputCard = ({ type, heading, image, subheading1, subheading2, content }) => {
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
                <Typography variant='caption'>Type: {type} </Typography>
                    <Typography variant='p' fontWeight={'bold'}>{heading} :</Typography>
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
                        <Box display={'flex'} justifyContent={'space-evenly'}>
                        <Typography variant='caption'>Equipments: {subheading1}</Typography>
                        <Typography variant='caption'>For: {subheading2}</Typography>
                        </Box>
                        <Typography variant='p' component={'p'} textAlign={'justify'}>
                            {content}
                        </Typography>
                    </Box>
                </Stack>
            </Stack>
        </>
    )
}


export default OutputCard;