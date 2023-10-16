import React from "react";
import Card from "./Card";
import Error from "./Error";
function Main(props){
    let {dataArray,countrySearch,filter} = props;

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


      const newArray=(countrySearch === '' && filter === 'Filter by Region')?dataArray:dataArray.filter((country)=> checkFilter(country));

    return (
      newArray.length > 0 ? newArray.map((country,index)=>{
      return (<Card key = {index} country = {country}/>)
    }) : <Error err = 'No such countries found'/>
    )

}
export default Main;