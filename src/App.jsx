import { useEffect, useState } from "react"

import NavBar from "./components/NavBar"
import SearchBar from "./components/SearchBar"
import Card from "./components/Card"
function App() {
  const[dataArray,setDataArray] = useState([])
  const [countrySearch,setCountrySearch] = useState('')
  const [filter,setFilter] = useState('Filter by region')
  const [isDark,setDark] = useState(false)
  const[ isDarkMode,setIsDarkMode] = useState('light')
  // let regionData = []
  function changeDark(){
      setDark(!isDark)
      if(!isDark){
        setIsDarkMode('dark')
      }else{
        setIsDarkMode('light') 
      }
  }
  useEffect(()=>{
      fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((res) => {
         setDataArray(res)
      })
  },[])
  function checkFilter(country){
    if(countrySearch != ''){
      if(country.name.common.toLowerCase().includes(countrySearch.toLowerCase())){
        if(filter != 'Filter by Region'){
          if(country.region.includes(filter)){
            return true;
          }
        }else{
          return true
        }
      }
    }else{
      if(filter != 'Filter by Region' ){
        if(country.region.includes(filter)){
          return true;
        }
      }else{
        return true;
      }
    }
    return false;
  }
  return (
    <>
     <NavBar changeDark = {changeDark} isDarkMode={isDarkMode} isDark = {isDark}/>
     <SearchBar setCountrySearch={setCountrySearch} setFilter={setFilter} isDark = {isDark} isDarkMode={isDarkMode}/>
     <div className= {`cards ${isDarkMode}`}>
     {
      countrySearch === '' && filter === 'Filter by region'?
      dataArray.map((country,index)=>{
        return (<Card key = {index} country = {country}/>)
      })
      :dataArray.filter((country)=> checkFilter(country))
      .map((country,index) =>{
        return (<Card key = {index} country = {country}/>)
      }) 
     }
     </div>
    </>
  )
}
export default App
