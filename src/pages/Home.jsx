import axios from 'axios';
import { useEffect, useState } from 'react';
import { Header, SearchFilter, CountryList } from '../components';




function Home() {
  const api = 'https://restcountries.com/v2/all'


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
    else if(filt === 'oceania'){
      return countries.filter((country) => 
        country.region === 'Oceania'
      )
    }
    else if(filt === 'all') {
      return countries
    }
    else {
      return countries.filter((country) => 
      country.name.toLowerCase().includes(filt.toLocaleLowerCase()))
    }
  }


  return (
    <div className="App">
      <Header day={day} setDay={setDay } />
      <SearchFilter day={day} filterDisplay={filterDisplay} setFilt={ setFilt} filt={filt} setFilterDisplay={setFilterDisplay} />
      <CountryList filterFunc={filterFunc} day={day} />
    </div>
  );
}

export default Home;
