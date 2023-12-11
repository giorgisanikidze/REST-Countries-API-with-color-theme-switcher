import moon from '../images/icon-moon.svg'
import './Header.css'
const Header = (props) => {
    return(
        <div className='header' style={{backgroundColor: props.day ? '#FFF' : '#2B3844'}}>
            <h2 className='title' style={{color: props.day ? '#111517' : '#FFF'}}>Where in the world?</h2>
            <div className='mode-change' onClick={() => {props.setDay(!props.day)}}>
                <img src={moon} alt=''/>
                <p style={{color: props.day ? '#111517' : '#FFF'}}>Dark Mode</p>
            </div>
      </div>
    )
}

export default Header;