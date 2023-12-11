import Country from "./Country"
import './CountryList.css'

const CountryList = (props) => {
    return (
        <div className='country-list' style={{backgroundColor: props.day ? '#FAFAFA' : '#202C36'}}>
        {props.filterFunc().map((country, index) => {         
          return (
            <Country day={props.day} key={index} country={country } />
          )
        })}
      </div>
    )
}

export default CountryList;