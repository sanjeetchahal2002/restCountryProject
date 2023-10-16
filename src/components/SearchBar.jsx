import {useContext} from  'react'
import {PiMagnifyingGlassLight} from 'react-icons/pi'
import { ThemeContext } from '../App';
function SearchBar(props){
    const {isDark,isDarkMode} = useContext(ThemeContext)
    let {setCountrySearch,setFilter} = props
    return(
        <div className={`searchBar ${isDarkMode}`}>
            <span className={!isDark ? 'searchBar-light' : 'searchBar-dark'}>
                <PiMagnifyingGlassLight/>
                <input type="text" placeholder="Search for a country"
                     className={`searchBar-span`}
                onChange={(e)=>setCountrySearch(e.target.value)} />
            </span>
        
            <select name="" id=""  onChange={(e)=>setFilter(e.target.value)}>
                <option name="" id="">Filter by Region</option>
                <option name="" id="">Africa</option>
                <option name="" id="">America</option>
                <option name="" id="">Asia</option>
                <option name="" id="">Europe</option>
                <option name="" id="">Oceania</option>
                <option name="" id="">Antarctic</option>
            </select>
        </div>
    )
}
export default SearchBar;