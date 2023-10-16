import { createContext, useEffect, useState } from "react"
import NavBar from "./components/NavBar"
import SearchBar from "./components/SearchBar"
import Main from "./components/Content"
import Loader  from "./components/Loader"
import Error from "./components/Error"

export const ThemeContext = createContext()

function App() {
  
  const [dataArray,setDataArray] = useState([])
  const [countrySearch,setCountrySearch] = useState('')
  const [filter,setFilter] = useState('Filter by Region')
  const [isDark,setDark] = useState(false)
  const [isDarkMode,setIsDarkMode] = useState('light')
  const [loader,setLoader] = useState(true)
  const [error,setError] = useState(false)
  
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
        .then((res) => {
          if(res.status === 404){
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
  
  return (
    <ThemeContext.Provider value={{isDarkMode,isDark}}>
     <NavBar changeDark = {changeDark}/>
     <SearchBar setCountrySearch={setCountrySearch} setFilter={setFilter}/>
     <div className= {`cards ${isDarkMode}`}>
     {
      !loader ? ( !error ? <Main dataArray ={dataArray} countrySearch = {countrySearch} filter = {filter}/> :<Error err = 'Error In Fetching'/>)
      :<Loader/> 
     }
     </div>
    </ThemeContext.Provider>
  )
}
export default App;