import React from "react";

export default function City(props) {
  let city = props.city[0];
    return (
        <div className="city">
                <div className="container">
                    <h2>{city.name}</h2>
                    <div className="info">
                        <div>Temperature: {city.temp} ºC</div>
                        <div>Weather: {city.weather}</div>
                        <div>Wind: {city.wind} km/h</div>
                        <div>Atmospheric Conditions: {city.clouds}</div>
                        <div>Latitude: {city.latitud}º</div>
                        <div>Longitude: {city.longitud}º</div>
                    </div>
            </div>
        </div>
    )
}
