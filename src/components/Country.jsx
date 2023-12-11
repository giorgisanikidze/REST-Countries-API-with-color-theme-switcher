import './Country.css'
const Country = (props) => {
    return (
        <div  className='country' key={props.index} style={{backgroundColor: props.day ? '#FAFAFA' : '#2B3844'}}>
            <img src={props.country.flag} alt=''></img>
            <h2 style={{color: props.day ? '#111517' : '#FFF'}}>{props.country.name}</h2>
            <div className='stats' >
                <h3 style={{color: props.day ? '#111517' : '#FFF'}}>Population: <span>{ props.country.population}</span></h3>
                <h3 style={{color: props.day ? '#111517' : '#FFF'}}>Region: <span>{props.country.region }</span></h3>
                <h3 style={{color: props.day ? '#111517' : '#FFF'}}>capital: <span>{props.country.capital }</span></h3>
            </div>
          </div>
    )
}

export default Country;