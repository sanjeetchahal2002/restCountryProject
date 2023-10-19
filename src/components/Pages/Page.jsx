import { useContext,useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from '../../App';
import Loader from "../ErrorAndLoader/Loader";
import DetailedCard from "./DetailedCard";
import Error from "../ErrorAndLoader/Error";
function Dummy(){
    const {code} = useParams()
    const [data,setData] = useState([])
    const {isDark} = useContext(ThemeContext)
    const [loader,setLoader] = useState(true)
    const [error,SetError] = useState(false)
    let darkClass = '';
    darkClass = isDark ? 'dark' : 'light' 
    useEffect(()=>{fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    .then(res => {
        if(res.status !== 200){
            SetError(true);
        }else{
            return res.json()
        }
    }   
    )
    .then( res =>{
        if(!error){
            setData(res)
        }
        setLoader(false)
    })},[code])
    
    return (
       <div className= {`cards ${darkClass}`}>
            { loader ? <Loader/> : error ? <Error err = {`Error in fetching country You Must Check URL`} />: <DetailedCard country = {data}/>}
       </div>
    )
}

export default Dummy;