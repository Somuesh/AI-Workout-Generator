import React, { useContext, useState } from 'react';
import { Box, Button, Icon, InputAdornment, MenuItem, Stack, TextField, Typography } from '@mui/material'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import { FormContext } from '../../App';
import { toast } from 'react-toastify';

const notify = () => toast("Empty Input Fields!");

export const ChoiceForm = () => {
    const { setUserPref, setShowResult } = useContext(FormContext)
    const [newPreference, setNewPreference] = useState({
        muscle_group: '',
        fitness: '',
        age: '',
        duration: '',
        gender: '',
    })

    const handlePreference = (e) => {
        e.preventDefault();
        if(newPreference.muscle_group!=='' && newPreference.age!=='' && newPreference.duration!=='' 
        && newPreference.gender!=='' && newPreference.fitness!==''){
            setUserPref(newPreference);
            setShowResult(true)
        }
        else{
            notify()
        }
    }

    return (
        <>
            <Stack p={2} justifyContent={'center'} width={'100%'} sx={{ backgroundColor: '#010c12' }}>
                <form>
                    <Stack sx={{
                        padding: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Box>
                            <Typography color={'#fff'} variant='h6' fontWeight={'bold'}> Give Your Preferences: </Typography>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'space-evenly'
                        }}>
                            <TextField
                                // label="Muscle Group"
                                variant="outlined"
                                sx={{
                                    marginTop: '0.5rem',
                                    backgroundColor: 'white',
                                    borderRadius: 1,
                                    color: '#000'
                                }}
                                value={newPreference.muscle_group}
                                placeholder='Muscle Group'
                                required
                                onChange={(e) => setNewPreference((prev) => ({ ...prev, muscle_group: e.target.value }))}
                            />
                            <Typography variant='caption' color={'#fff'} >*Biceps, Triceps, Abdomnial, Chest, Legs, or Full Body</Typography>
                            <Box>
                                <TextField
                                    // label="Fitness level"
                                    variant="outlined"
                                    required
                                    sx={{
                                        marginTop: '0.5rem',
                                        backgroundColor: 'white',
                                        borderRadius: 1,
                                        width: '60%'
                                    }}
                                    value={newPreference.fitness}
                                    placeholder='Fitness level'
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><Icon><FitnessCenterIcon /></Icon></InputAdornment>,
                                    }}
                                    onChange={(e) => setNewPreference((prev) => ({ ...prev, fitness: e.target.value }))}
                                />
                                <TextField
                                    // label="Duration"
                                    variant="outlined"
                                    select
                                    sx={{
                                        marginTop: '0.5rem',
                                        backgroundColor: 'white',
                                        borderRadius: 1,
                                        width: '40%'
                                    }}

                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><Icon><AlarmOnIcon /></Icon></InputAdornment>,
                                    }}
                                    value={newPreference.duration}
                                    placeholder='Duration'
                                    required
                                    onChange={(e) => setNewPreference((prev) => ({ ...prev, duration: e.target.value }))}
                                >   <MenuItem value="" checked>Duration</MenuItem>
                                    <MenuItem value="30-min">30 min</MenuItem>
                                    <MenuItem value="1-hour">1 hour</MenuItem>
                                    <MenuItem value="2-hour">2 hour</MenuItem>
                                    <MenuItem value="3-hour">3 hour</MenuItem>

                                </TextField>
                                <Typography variant='caption' color={'#fff'} >*Begineer, Intermediate, Expert, Athlete</Typography>
                            </Box>

                            <Box>
                                <TextField type='Age' 
                                // label="Age" 
                                required variant="outlined" sx={{
                                    marginTop: '0.5rem',
                                    backgroundColor: 'white',
                                    borderRadius: 1,
                                    width: '30%'
                                }}
                                    value={newPreference.age}
                                    placeholder='Age'
                                    onChange={(e) => setNewPreference((prev) => ({ ...prev, age: e.target.value }))}
                                />
                                <TextField select type='Gender' 
                                // label="Gender" 
                                variant="outlined" required sx={{
                                    marginTop: '0.5rem',
                                    backgroundColor: 'white',
                                    borderRadius: 1,
                                    width: '70%'
                                }}
                                    value={newPreference.gender}
                                    InputProps={{
                                        startAdornment: <InputAdornment position="start"><Icon><FemaleIcon /></Icon> or <Icon><MaleIcon /></Icon></InputAdornment>,
                                    }}
                                    onChange={(e) => setNewPreference((prev) => ({ ...prev, gender: e.target.value }))}
                                >   <MenuItem value="">Gender</MenuItem>
                                    <MenuItem value="male">Male</MenuItem>
                                    <MenuItem value="female">Female</MenuItem>
                                </TextField>
                            </Box>

                            <Button type='submit' id="choiceSubmit-btn"
                            sx={{
                                marginTop: '1rem',
                                backgroundColor: '#57565e',
                                color: '#fff',
                                padding: '10px',
                                '&:hover': { border: '1px solid #fff', color: '#fff', background: '#81808e' }
                            }}
                                fullWidth
                                onClick={(e)=>{
                                    console.log("button clicked")
                                    handlePreference(e)
                                }}
                            >Submit</Button>
                        </Box>
                    </Stack>
                </form>
            </Stack>
        </>
    )
}
