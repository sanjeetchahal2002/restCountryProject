import { useContext,useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from '../../App';
import Loader from "../ErrorAndLoader/Loader";
import DetailedCard from "./DetailedCard";
function Dummy(){
    const {code} = useParams()
    console.log(code)
    const [data,setData] = useState([])
    const {isDark} = useContext(ThemeContext)
    const [loader,setLoader] = useState(true)
    let darkClass = '';
    darkClass = isDark ? 'dark' : 'light' 
    useEffect(()=>{fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    .then(res => res.json()   
    )
    .then( res =>{
        setData(res)
        setLoader(false)
    })},[code])
    
    return (
       <div className= {`cards ${darkClass}`}>
            { loader ? <Loader/> : <DetailedCard country = {data}/>}
       </div>
    )
}

export default Dummy;