// eslint-disable-next-line no-unused-vars
import React from 'react'
import Sbg from '../assets/bgc/sunny.jpg'
import '../styles/searchSec.css'


function SearchSection() {
    const apiKey='59dffb9db87e7740ea261d5a4fc03294';
    // const url=`https://api.openweathermap.org/data/2.5/weather?q={cityName}&appid=${apiKey}&units=metric`
    let input =document.getElementById('city')
    let searchBtn =document.getElementById('search')
    const getWeather= async (city)=>{
        const response=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${"Bengaluru"}&appid=${apiKey}&units=metric`)
        const data =(await response).json()
        console.log(data);
        console.log(city);
        console.log(searchBtn);
        
        // !useEffect
    }
    getWeather()
    // searchBtn.addEventListener("click",(e)=>{
    //     e.preventDefault();
    //     let city = input.value.trim();
    //     if(city){
    //         getWeather(city)
    //     }
    // })

  return (
    <div>
        <div className="search-container">
            <div className="search-box">
                <input type="text" id='city' placeholder='Enter City ...' />
                <button className='btn btn-outline-dark' id="search"><i className="ri-search-eye-line"></i></button>
            </div>

            {/* <DisplaySection/> */}
            <div className="weather-data">
            <img src={Sbg} alt="" />
            <h2><span id="cityName">Bangalore</span></h2>
            <h2 id="Temp">30 <span><i className="ri-celsius-line"></i></span></h2>
            <div className="other-details">
                <div className="status-box">
                    <h4>Humidity</h4>
                    <h4 id='humidity'>30 <i className="ri-percent-fill"></i></h4>
                </div>
                <div className="status-box">
                    <h4>Wind</h4>
                    <h4><span id='wind'></span>M/s</h4>
                </div>
            </div>

        </div>
        </div>
    </div>
  )
}

export default SearchSection