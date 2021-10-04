import React from 'react';
import Card from './Card'
//Import CSS
import './Cards.css';

export default function Cards(props) {
  let cities = props.cities;
  return (
    <div className='cards'>
    {cities.map((c)=>{
      return <Card
        id={c.id}
        max={c.max}
        min={c.min}
        name={c.name}
        img={c.img}
        onClose={props.onClose}
      />
      })
    }
    </div>
  )
};
