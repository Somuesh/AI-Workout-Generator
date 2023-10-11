import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Stack } from '@mui/material';
import { Output } from './components/Output/Output';
import { NavBar } from './components/NavBar/NavBar';

import { createContext, useState } from 'react';
import { LandingPage } from './pages/LandingPage';
import { ToastContainer } from 'react-toastify';

export const FormContext = createContext()
export const DataContext = createContext()

function App() {
  const initialData = {
    heading: 'heading-Initial',
    subheading: 'subHeading-initial',
    image: 'image-initial.jpg',
    content: 'initial-content',
  }

  const [initData, setInitData] = useState([initialData])

  const initialState = {
    muscle_group: '',
    fitness: '',
    age: '',
    duration: '',
    gender: '',
  }
  const [userPref, setUserPref] = useState(initialState);



  const [showResult, setShowResult] = useState(false);

  return (
    <>
      <DataContext.Provider value={{ initData, setInitData }}>
        <FormContext.Provider value={{ userPref, setUserPref, setShowResult }}>
          <ToastContainer />
          {!showResult && <>
            <NavBar />
            <LandingPage />
          </>}
          {showResult && <Stack>
            <NavBar />
            <Output />
          </Stack>}
        </FormContext.Provider>
      </DataContext.Provider>
    </>
  );
}

export default App;
