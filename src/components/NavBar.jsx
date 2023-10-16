import { useContext } from 'react';
import { BsMoon ,BsMoonFill } from 'react-icons/bs';
import { ThemeContext } from '../App';
function NavBar(props){
    const {isDark,isDarkMode} = useContext(ThemeContext)
    let {changeDark} = props
    return(
        <div className={`navbar ${isDarkMode}` } >
            <div className='navbar-inner'>
            <h1>Where in the world?</h1>
            <div className='navbar-button'>
                {!isDark ? <BsMoon/> : <BsMoonFill/>}
                <button  
                    onClick={()=>{
                        changeDark()
                    }}
                    >
                   <span>
                   Dark Mode
                   </span>
                </button>
            </div>                 
            </div>
        </div>
    )
}
export default NavBar;