import {useContext} from  'react'
import {PiMagnifyingGlassLight} from 'react-icons/pi'
import { ThemeContext } from '../../App';
function SearchBar(props){
    const {isDark} = useContext(ThemeContext)
    // console.log(dataArray)
    let {setCountrySearch,setFilter,filter,setSubRegionFilter,setSortBy,setOrderBy,dataArray} = props
    let darkClass = '';
    darkClass = isDark ? 'dark' : 'light'
    const regionArray = [...new Set (dataArray.map((ele) => ele.region))]
   
    let subRegionArray = {};

    subRegionArray['Filter by Region'] =[];
    dataArray.forEach((ele) => {
        if(!subRegionArray[ele.region]){
            subRegionArray[ele.region] = new Set();
        }else{
            subRegionArray[ele.region].add(ele.subregion)
        }
    })
    let subRegionofFilter = [...subRegionArray[filter]] 
    return(
        <div className={`searchBar ${darkClass}`}>
            
            <span className={!isDark ? 'searchBar-light' : 'searchBar-dark'}>
                <PiMagnifyingGlassLight/>
                <input type="text" placeholder="Search for a country . . ."
                     className={`searchBar-span`}
                onChange={(e)=>setCountrySearch(e.target.value)} />
            </span>
            
            <select name="" id=""  onChange={(e)=>{
                setFilter(e.target.value);
                setSubRegionFilter('')
            }}>
                <option name="" id="">Filter by Region</option>
                {regionArray.map((ele) => (<option key = {ele}name="" id="">{ele}</option>))}
            </select>
            
            <select name="" id=""  onChange={(e)=> setSubRegionFilter(e.target.value)}>
            <option key = 'Filter by SubRegion' name="" id="">Filter by SubRegion</option>
            {subRegionofFilter.map((subRegion) =>{
                if(subRegion){
                    return <option  key = {subRegion}>{subRegion}</option>
                }
            })}
            </select>

            <select name="" id=""  onChange={(e)=> setSortBy(e.target.value)}>
                <option >Sort By</option>
                <option >Area</option>
                <option >Population</option>
            </select>
            
            <select name="" id=""  onChange={(e)=> setOrderBy(e.target.value)}>
                <option >Order By</option>
                <option >Ascending</option>
                <option >Descending</option>
            </select>

        </div>
    )
}
export default SearchBar;