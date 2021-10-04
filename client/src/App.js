import React, {useState} from 'react';
import { Route } from 'react-router-dom'
import './App.css';
//Import components
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About.jsx'
import City from './components/City.jsx'

function App() {
  const [cities, setCities] = useState([]);

  let apiKey ="4ae2636d8dfbdc3044bede63951a019b"

  function onSearch(city) {
   let repeated = cities.filter(c => c.name === city);
   if(repeated.length===0) {
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
          }
          setCities(oldCities => [...oldCities, city]);
        } else {
          alert("We weren't able to find the city!");
        }
      });
    } else {
      alert("There is a city with that name already!");
    }
   }

   function onClose(id) {
      setCities(oldCities => oldCities.filter(c => c.id !== id));
   }

   function onFilter(cityId) {
     let city = cities.filter(c => c.id === parseInt(cityId));
     return city;
   }

  return (
    <div className="App">
      <div>
        <Route
            path='/'
            render={() => <Nav onSearch={onSearch} />}
        />
        <Route
            path='/about'
            component={About}
        />
        <Route
           exact
           path='/'
           render = {() => <Cards cities={cities} onClose={onClose} />}
        />
        <Route
           exact
           path='/city/:cityId'
           render={({match}) => <City
           city={onFilter(match.params.cityId)}
           />}
        />
      </div>
    </div>
  );
}

export default App;
