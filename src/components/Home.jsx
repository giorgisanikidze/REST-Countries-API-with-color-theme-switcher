import Header from "./Header"
import SearchFilter from "./SearchFilter"
import CountryList from "./CountryList"

const Home = (props) => {
    return (

        <>
            <Header day={props.day} setDay={props.setDay} />
            <SearchFilter day={props.day} filterDisplay={props.filterDisplay} setFilt={props.setFilt} filt={props.filt} setFilterDisplay={props.setFilterDisplay} />
            <CountryList filterFunc={props.filterFunc} day={props.day} />
        </>
  )
}

export default Home