import React from 'react';

export default function Card(props) {
// acá va tu código
let {max, min, name, img} = props
return (
  <div>
    <button>x</button>
    <h5>{name}</h5>
    <div>
      <h6>min: {min}</h6>
      <h6>max: {max}</h6>
      <img src={`http://openweathermap.org/img/wn/${img}@2x.png`}/>
    </div>
  </div>
)
};
