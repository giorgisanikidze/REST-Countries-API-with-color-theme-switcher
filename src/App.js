import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from 'axios';
import { useEffect, useState } from 'react';
import {Header, Home, Detail} from './components';




function App() {
  const api = 'https://restcountries.com/v3.1/all'


  let [day, setDay] = useState(true);
  let [filterDisplay, setFilterDisplay] = useState(false);
  let [countries, setCountries] = useState([]);
  let [filt, setFilt] = useState('all');


  const getCountries = async () => {
    const countries = await axios.get(api)
    const data = await countries.data;
    setCountries(data)
  }

  useEffect(() => {
    getCountries()
  }, [])

  const filterFunc = () => {
    if (filt === 'africa') {
      return countries.filter((country) =>
        country.region === 'Africa'
      )
    } else if (filt === 'asia') {
      return countries.filter((country) =>
        country.region === 'Asia'
      )
    }
    else if (filt === 'america') {
      return countries.filter((country) =>
        country.region === 'Americas'
      )
    } else if (filt === 'europa') {
      return countries.filter((country) =>
        country.region === 'Europe'
      )

    }
    else if (filt === 'oceania') {
      return countries.filter((country) =>
        country.region === 'Oceania'
      )
    }
    else if (filt === 'all') {
      return countries
    }
    else {
      return countries.filter((country) =>
        country.name.common.toLowerCase().includes(filt.toLocaleLowerCase()))
    }
  }


 



  
  return (
    <BrowserRouter>
        <Header day={day} setDay={setDay} />
      <Routes>
        <Route path="/" exact element={<Home day={day} setDay={setDay}  filterDisplay={filterDisplay} setFilt={setFilt} filt={filt} setFilterDisplay={setFilterDisplay} filterFunc={filterFunc}/>} />

        <Route path="/country/:code" element={<Detail day={day} setDay={setDay} />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
