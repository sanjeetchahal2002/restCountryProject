import { BsMoon ,BsMoonFill } from 'react-icons/bs';
function NavBar(props){
    let {changeDark,isDark,isDarkMode} = props
    return(
        <div className={`navbar ${isDarkMode}` } >
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
    )
}
export default NavBar;