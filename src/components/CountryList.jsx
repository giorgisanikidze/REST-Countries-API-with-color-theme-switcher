import { Link } from "react-router-dom"
import Country from "./Country"
import './CountryList.css'

const CountryList = (props) => {
  return (
      
    <div className='country-list' style={{backgroundColor: props.day ? '#FAFAFA' : '#202C36'}}>
        {props.filterFunc().map((country, index) => {         
          return (
            <Link to={'/detail'}>
              <Country day={props.day} key={country.numericCode} country={country} />
              </Link>

            )
        })}
      </div>
      
    )
}

export default CountryList;