import React, { useState,useCallback } from "react";
import '../App.css';
import {WEB_HANDLERS} from '../data/remote/WebHandlers'
import {CURRENT_WEATHER} from '../data/remote/Urls'
import { Grid} from "@mui/material";


const Weather = () => {
  
  
  let [item, setItem] = useState([]);
  let [city,setCity] = useState("")

  const SearchCity = useCallback(() =>{
    WEB_HANDLERS(`${CURRENT_WEATHER}${city}`,(item) =>{
      setItem(item)},()=>{})
  },[city])
  console.log(item);
  
   
  return (
    <div className="main">
        <h2>Search City Here</h2>
      <input
      className="input"
        type='search'
        placeholder='Please Enter City Name'
        onChange={(e) => setCity(e?.target?.value)}
        value={city}
        
      />
      <br />
       <button className="btn" onClick={SearchCity}>Search</button>
      <br />
      
        {item?.city?.name &&
      <div >
     
     
     
     <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
  {item.list.map((data, index) => (
    <Grid item xs={2} sm={2} md={4} key={index}>
      <div className="card">
      {data.weather.map((rawData,index)=>(
          <div key="index">
          
          <h3>{rawData.description}</h3>
          </div>
        ))}
      <h3>City : {item?.city?.name},{item?.city?.country} </h3>
      <h3>temperature : <h1>{(data?.main?.temp -273).toFixed(1) } {'\u00b0'}C</h1></h3>
        <h3>Humidity {data?.main?.humidity}{'\u00b0'}</h3>
        <h3>Feels Like {(data?.main?.feels_like-273).toFixed(1)}{'\u00b0'}</h3>
        <h3>Wind Speed : {data?.wind?.speed} m/s</h3> 
        <h3>Date and Time : {data?.dt_txt.toLocaleString()}</h3>
       
        </div>
    </Grid>
  ))}
</Grid>
    
        
        
        
        
       
      
 
     
      
  =
     </div>
     }
        
     
    </div>
  );
};

export default Weather;
