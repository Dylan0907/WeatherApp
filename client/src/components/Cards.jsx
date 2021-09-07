import React from 'react';
import Card from './Card'
export default function Cards({cities}) {
  return (
    <React.Fragment>
    {cities.map((c)=>{
      return <Card
        max={c.main.temp_max}
        min={c.main.temp_min}
        name={c.name}
        img={c.weather[0].icon}
        onClose={() => alert(c.name)}
      />
      })
    }
    </React.Fragment>
  )
};
