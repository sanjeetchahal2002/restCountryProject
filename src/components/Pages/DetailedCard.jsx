import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
export default function DetailedCard(props){
    let countyCodeMapping= {}
    const[data,setData] = useState({})
    async function fetchAll(){
        await fetch('https://restcountries.com/v3.1/all')
        .then((res) => res.json())
        .then((res) => {
            res.map((ele) => {
                countyCodeMapping[ele.cca3] = ele.name.common
            })
            setData(countyCodeMapping)
        })
    }
    useEffect(()=>{
        fetchAll()
    },[])
    let {name,flags,population,region,subregion,capital,tld,currencies,languages,borders,cca3} = props.country[0]
    let capitalShow = capital && capital.length >= 0 ? capital[0] : "";
    let nativename = name.nativeName && Object.values(name.nativeName).length >=0  ? Object.values(name.nativeName)[0].common : ""
    let currency = currencies ? Object.values(currencies) : []
    currency = currency.map((ele) => (ele.name)).join(',')
    let language = languages ?   Object.values(languages) : []
    language = language.join(',')
    return (
        <div className="detailedCard">
            <div>
            <Link to='/'>
                <button>  &#x2190; Back</button>
            </Link>
            </div>
            <div className="detailedCard-content">
            <div className="detailedCard-left">
                <img src= {`${flags.png}`} alt="" />
            </div>
            <div className="detailedCard-right">
                <div className="name">
                <h2>{name.common}</h2>
                </div>
                <div className="other-content">
                  <div>
                    <p>Native Name: <span>{nativename}</span></p>
                    <p>Population: <span>{population}</span></p>
                    <p>Region: <span>{region}</span></p>
                    <p>Sub Region: <span>{subregion}</span></p>
                    <p>Capital: <span>{capitalShow}</span></p>
                </div>  
                <div>
                    <p>Top Level Domain: <span>{tld}</span></p>
                    <p>Currencies: <span>{currency}</span></p>
                    <p>Languages: <span>{language}</span></p>
                </div>
                </div>
                <div className="borders">Borders : <div className="borders-bnt">{borders !== undefined ? borders.map((ele) => <Link to = {`/alpha/${ele}`} key={ele}><button key={ele}>{data[ele]}</button></Link>) : []}</div></div>
            </div>
            </div>
        </div>
    )
}