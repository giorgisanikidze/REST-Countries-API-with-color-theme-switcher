import search from '../images/icon-search.svg'
import arrow from '../images/icon-arrow-down.svg'
import './SearchFilter.css'

const SearchFilter = (props) => {
    return (
        <div className='container' style={{backgroundColor: props.day ? '#FAFAFA' : '#202C36'}}>
            <div className='search-filter'>
                <div className='search' style={{ background: props.day ? '#FFF' : '#2B3844' }}>
                <img src={search} alt=''></img>
                <input onChange={(e) => {
                props.setFilt(e.target.value)
                }} type='text' placeholder='Search for a country' style={{background: props.day ? '#FFF' : '#2B3844', color : props.day ? '#C4C4C4': '#FFF'}}></input>
            </div>
            <div className='filter'>
                <div style={{background: props.day ? '#FFF' : '#2B3844'}} onClick={() => {props.setFilterDisplay(!props.filterDisplay)}}>
                <h3 style={{color: props.day ? '#111517' : '#FFF'}}>Filter by Region</h3>
                <img src={arrow } alt=''/>
                </div>
                <ul  className='list' style={{display: props.filterDisplay ? 'flex': 'none', background: props.day ? '#FFF' : '#2B3844', color: props.day ? '#111517' : '#FFF'}}>
                <li onClick={() => {
                    props.setFilt('all')
                    props.setFilterDisplay(false)
                }}>All</li>
                <li onClick={() => {
                    props.setFilt('africa')
                    props.setFilterDisplay(false)
                }}>Africa</li>
                <li onClick={() => {
                    props.setFilt('america')
                    props.setFilterDisplay(false)
                }}>America</li>
                <li onClick={() => {
                    props.setFilterDisplay(false)
                    props.setFilt('asia')
                }}>Asia</li>
                <li onClick={() => {
                    props.setFilt('europa')
                    props.setFilterDisplay(false)
                }}>Europa</li>
                <li onClick={() => {
                    props.setFilt('oceania')
                    props.setFilterDisplay(false)
                }}>Oceania</li>
                </ul>        
                </div>
            </div>
        </div>
    )
}

export default SearchFilter;