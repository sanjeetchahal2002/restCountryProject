import React from "react";
import Card from "../Card/Card";
import Error from "../ErrorAndLoader/Error";
function Main(props){
    let {dataArray,countrySearch,filter,subRegionFilter,orderBy,sortBy} = props;

    function checkFilter(country){
      if(countrySearch != ''){
        if(!country.name.common.toLowerCase().includes(countrySearch.toLowerCase())) {
          return false;
        }
      }
      if(filter != 'Filter by Region'){
        if(!country.region.includes(filter)) {
          return false;
        }
      }
      if(subRegionFilter != 'Filter by SubRegion'){
        if(country.subregion) {
          if( !country.subregion.includes(subRegionFilter)){
            return false;
          }
        }
      }
      return true;
    }


    function getsort(data){
      if(sortBy === 'Area' ){
        if(orderBy === 'Ascending'){
          data.sort((a,b) => a.area - b.area)
        }
        if(orderBy === 'Descending'){
          data.sort((a,b) => (b.area-a.area))
        }
      }
      if(sortBy === 'Population' ){
        if(orderBy === 'Ascending'){
          data.sort((a,b) => a.population - b.population)
        }
        if(orderBy === 'Descending'){
          data.sort((a,b) => (b.population-a.population))
        }
      }
    } 

    const newArray=(countrySearch === '' && filter === 'Filter by Region')?dataArray:dataArray.filter((country)=> checkFilter(country));
    getsort(newArray)


    return (
      newArray.length > 0 ? newArray.map((country,index)=>{
      return (<Card key = {index} country = {country}/>)
    }) : <Error err = 'No such countries found'/>
    )

}
export default Main;

