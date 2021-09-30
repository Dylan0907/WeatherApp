import React from 'react';
import Card from './Card'
export default function Cards(props) {
  let cities = props.cities;
  return (
    <React.Fragment>
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
    </React.Fragment>
  )
};
