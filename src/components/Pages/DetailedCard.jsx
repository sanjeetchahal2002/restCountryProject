
export default function DetailedCard(props){
    let {name,flags} = props.country[0]
    console.log(name.nativeName)
    return (
        <div className="detailedCard">
            <div className="detailedCard-left">
                <img src= {`${flags.png}`} alt="" />
            </div>
            <div className="detailedCard-right">
                <h2>{name.common}</h2>
                <span>Native Name:{}</span>
            </div>
        </div>
    )
}