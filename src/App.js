import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { Stack } from '@mui/material';
import { Output } from './components/Output/Output';
import { NavBar } from './components/NavBar/NavBar';

import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
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
  const [userPref, setUserPref] = useState(initialState)

  useEffect(() => {
    const fetchInfo = async (value) => {
      console.log(value)
      const url = 'https://reqres.in/api/users?page='+value
      const {data} = await axios.get(url)
      console.log("API call: ", url, data.data)
      return data;
    }

    fetchInfo(userPref.age);
  }, [userPref])

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
