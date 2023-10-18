import { useContext } from 'react';
import { BsMoon ,BsMoonFill } from 'react-icons/bs';
import { ThemeContext } from '../../App';
function NavBar(){
    const {isDark,setDark} = useContext(ThemeContext)
    let darkClass = '';
    darkClass = isDark ? 'dark' : 'light'
    return(
        <div className={`navbar ${darkClass}` } >
            <div className='navbar-inner'>
            <h1>Where in the world?</h1>
            <div className='navbar-button'>
                {!isDark ? <BsMoon/> : <BsMoonFill/>}
                <button  
                    onClick={()=> setDark(!isDark)
                    }
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