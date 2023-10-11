import { Skeleton, Stack } from '@mui/material'
import React, { Suspense, lazy, useContext, useEffect, useState } from 'react'
// import workout1 from '../../assets/workout1.jpg';
// import workout2 from '../../assets/workout2.jpg';
import { FormContext } from '../../App';

const OutputCard = lazy(() => import('../OutputCard/OutputCard'));

const renderLoader = () => <>
  <Skeleton animation="wave" height="20vh"></Skeleton>
</>;

export const Output = () => {
  const {userPref} = useContext(FormContext)
  const [data, setData] = useState([])
  const fetchInfo = async (muscles, fitness) => {
    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscles}&difficulty=${fitness}`, {
        mode: 'cors',
        headers: {
          'X-Api-Key': 'qV3Lg2HEB1eWAd0FkorkmA==AG6otZTyr8dR0dEy'
        }
      });
      const data = await response.json();
      setData(data)
    }
    catch (e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    fetchInfo(userPref.muscle_group, userPref.fitness);
  }, [userPref])


  return (
    <>
        <Stack component='section' id='output-content' display={'flex'} flexDirection={'column'} p={1} sx={{
          // height: '80vh',
          backgroundColor: '#010c12'
        }}>
        <Suspense fallback={renderLoader()}>
        {Array.from(data).slice(0,3).map((workout, index)=>{
          return (
            <OutputCard key={index} type={workout.type} heading={workout.name} content={workout.instructions} subheading1={workout.equipment} subheading2={workout.muscle} image={'https://random.imagecdn.app/500/500'} />
          )
        })}
          
        </Suspense>
        </Stack>
    </>
  )
}
