import React, {useState} from 'react';
import './App.css';
//Import components
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';


function App() {
  const [cities, setCities] = useState([]);

  let apiKey ="4ae2636d8dfbdc3044bede63951a019b"

  function onSearch(city) {
   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
     .then(r => r.json())
     .then((resource) => {
       if(resource.main !== undefined){
         const city = {
           min: Math.round(resource.main.temp_min),
           max: Math.round(resource.main.temp_max),
           img: resource.weather[0].icon,
           id: resource.id,
           wind: resource.wind.speed,
           temp: resource.main.temp,
           name: resource.name,
           weather: resource.weather[0].main,
           clouds: resource.clouds.all,
           latitud: resource.coord.lat,
           longitud: resource.coord.lon
         };
         console.log(city)
         setCities(oldCities => [...oldCities, city]);
       } else {
         alert("We weren't able to find the city!");
       }
     });
   }

   function onClose(id) {
      setCities(oldCities => oldCities.filter(c => c.id !== id));
    }

  return (
    <div className="App">
      <div>
        <Nav onSearch={onSearch} />
        <Cards
          cities={cities}
          onClose={onClose}
          />
      </div>
    </div>
  );
}

export default App;
