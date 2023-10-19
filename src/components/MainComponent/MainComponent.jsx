import {useEffect, useState,useContext } from "react"
import SearchBar from "./SearchBar"
import Content from "./Content"
import Loader  from "../ErrorAndLoader/Loader"
import Error from "../ErrorAndLoader/Error"
import { ThemeContext } from '../../App';

function MainComponent(){
    const {isDark} = useContext(ThemeContext)
    const [dataArray,setDataArray] = useState([])
    const [countrySearch,setCountrySearch] = useState('')
    const [filter,setFilter] = useState('Filter by Region')
    const [subRegionFilter,setSubRegionFilter] = useState('')
    const [sortBy,setSortBy] = useState('')
    const [orderBy,setOrderBy] = useState('')
    const [loader,setLoader] = useState(true)
    const [error,setError] = useState(false)
      
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then((res) => {
          if(res.status !== 200){
            setError(true)
          }
          return res.json();
        })
        .then((res) => {
          setDataArray(res)
          setTimeout(()=>{
            setLoader(false)
          },1000)
        })
  },[]) 
  let darkClass = '';
  darkClass = isDark ? 'dark' : 'light' 
  return(
    <>
            <SearchBar setCountrySearch={setCountrySearch} setFilter={setFilter} filter={filter} setSubRegionFilter = {setSubRegionFilter}
            setSortBy = {setSortBy}
            setOrderBy = {setOrderBy}
            dataArray = {dataArray}
            />
            <div className= {`cards ${darkClass}`}>
            {
                !loader ? ( !error ? <Content dataArray ={dataArray} countrySearch = {countrySearch} filter = {filter} 
                    subRegionFilter = {subRegionFilter}
                    sortBy ={sortBy}
                    orderBy = {orderBy}
                    /> :<Error err = {`Error In Fetching`}/>)
                    :<Loader/> 
                }
            </div>
            </>
    )
}
export default MainComponent;