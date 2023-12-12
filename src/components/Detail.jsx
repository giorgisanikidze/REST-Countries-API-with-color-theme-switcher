import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Detail.css'

const Detail = (props) => {
  const [country, setCountry] = useState(null);
  const { code } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/alpha/${code}`
        );
        const data = await response.json();
        setCountry(data[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [code]);

  if (!country) {
    return <div>Loading...</div>;
  }

  return (
    <div className="country-detail" style={{background: props.day ? "#FFF" : '#202C36'}}>
      <Link to={'/'}  style={{textDecoration: 'none'}}>
        <span style={{background: props.day ? "#FFF" : '#2B3844', color: props.day ? "#111517" : '#FFF'}} className='back'>{'<'} back</span>
        </Link>

      <div className="middle">
        <img src={country.flags.png} alt="" />
        <div className="middle-right">
          <h2 style={{color: props.day ? "#111517" : '#FFF'}}  className='country-name'>{country.name.common}</h2>
          <div className="specs">
            <div className="specs-left" >
              <p style={{color: props.day ? "#111517" : '#FFF'}}>Native Name: <span>{country.name.nativeName[0] }</span></p>
              <p style={{color: props.day ? "#111517" : '#FFF'}}>Population: <span>{country.population }</span></p>
              <p style={{color: props.day ? "#111517" : '#FFF'}}>Region: <span>{country.region }</span></p>
              <p style={{color: props.day ? "#111517" : '#FFF'}}>Sub Region: <span>{country.subregion }</span></p>
              <p style={{color: props.day ? "#111517" : '#FFF'}}>Capital: <span>{country.capital }</span></p>
            </div>
            <div className="specs-right">
              <p style={{color: props.day ? "#111517" : '#FFF'}}>Top Level Domain: <span>{country.tld }</span></p>
              <p style={{color: props.day ? "#111517" : '#FFF'}}>Currencies: <span>{country.currencies[0] }</span></p>
              <p style={{color: props.day ? "#111517" : '#FFF'}}>Languages: <span>{country.languages.deu }</span></p>
            </div>
          </div>
            <div className="border-countries">
              <p style={{color: props.day ? "#111517" : '#FFF'}}>Border Countries:</p>
              <div className="countries">
                <span style={{background: props.day ? "#FFF" : '#2B3844', color: props.day ? "#111517" : '#FFF'}}>france</span>
                <span style={{background: props.day ? "#FFF" : '#2B3844', color: props.day ? "#111517" : '#FFF'}}>belgium</span>
              </div>
            </div>

        </div>


      </div>

      
    </div>
  );
};

export default Detail;
