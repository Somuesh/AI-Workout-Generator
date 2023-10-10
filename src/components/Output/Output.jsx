import { Skeleton, Stack } from '@mui/material'
import React, { Suspense, lazy } from 'react'

import workout1 from '../../assets/workout1.jpg';
import workout2 from '../../assets/workout2.jpg';

const OutputCard = lazy(() => import('../OutputCard/OutputCard'));

const renderLoader = () => <>
  <Skeleton animation="wave" height="20vh"></Skeleton>
</>;

export const Output = () => {
  return (
    <>
        <Stack component='section' id='output-content' display={'flex'} flexDirection={'column'} p={1} sx={{
          // height: '80vh',
          backgroundColor: '#640095'
        }}>
        <Suspense fallback={renderLoader()}>
          <OutputCard heading={'WorkOut Plan 1'} content={'A spiritual discipline based on an extremely subtle science, which focuses on bringing harmony between mind and body'} subheading={'Do some Yoga'} image={workout1} />
          <OutputCard heading={'WorkOut Plan 2'} content={'A spiritual discipline based on an extremely subtle science, which focuses on bringing harmony between mind and body'} subheading={'Do some Yoga'} image={workout2} />
        </Suspense>
        </Stack>
    </>
  )
}
