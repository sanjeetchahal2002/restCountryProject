import { Link } from "react-router-dom"

function Card(props){
    let {flags,name,population,region,capital} = props.country
    return(
        <Link to = {`/country/${name.common}`}>
        <div className="card">
            <img src= {flags.png} alt="" />
            <div className="card-text">
            <h2>{name.common}</h2>
            <span>Population:<span>{population}</span></span>
            <span>Region:<span>{region}</span></span>
            <span>Capital:<span>{capital}</span></span>
            </div>
        </div>
        </Link>
    )
}

export default Card