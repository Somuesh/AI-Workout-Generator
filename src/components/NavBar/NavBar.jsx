import { Box, Typography } from '@mui/material'
import React from 'react';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

export const NavBar = () => {
    const handleMenu = (value) =>{
        console.log(value)
    }

    return (
        <>
            <Box display={'flex'} id='output' flexDirection={'row'} component={'div'} p={0.8} justifyContent={'center'} alignItems={'center'}>
                <Box p={2} sx={{
                    backgroundColor: '#010c12',
                    display: 'flex',
                    color: 'white',
                    flex: '1',
                    flexDirection: 'row',
                    borderRadius: '5px 0 0 5px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    '&:hover':{
                        border: '1px solid black',
                        backgroundColor: '#81808e',
                    }
                }}
                >
                    <SettingsSuggestIcon /><Typography variant={'p'} onClick={(e) => {
                        handleMenu(e.target.innerHTML)
                    }} sx={{ fontWeight: 'bold' }}>AI Generated Workout Plans</Typography>
                </Box>
                <Box p={2} sx={{
                    backgroundColor: '#57565e',
                    display: 'flex',
                    color:'white',
                    flex: '1',
                    flexDirection: 'row',
                    borderRadius: '0 5px 5px 0',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    '&:hover':{
                        border: '1px solid black',
                        backgroundColor: '#81808e',
                    }
                }}
                >
                    <LibraryBooksIcon /><Typography variant={'p'} onClick={(e) => {
                        handleMenu(e.target.innerHTML)
                    }} sx={{ fontWeight: 'bold' }}>Browse Workout Plans</Typography>
                </Box>
            </Box>
        </>
    )
}
