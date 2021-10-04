import React from 'react';
import { Link } from 'react-router-dom'
//Import CSS
import './Card.css'

export default function Card(props) {

return (
  <div className='container'>
      <button onClick={()=>props.onClose(props.id)} className='button'>x</button>
      <Link to={`/city/${props.id}`} >
         <h4>{props.name}</h4>
      </Link>
      <table className='table'>
        <tr>
         <td className='row'>Min</td>
         <td className='row'>Max</td>
        </tr>
        <tr>
         <td className='row'>{props.min}</td>
         <td className='row'>{props.max}</td>
        </tr>
      </table>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`}
        alt={`${props.name}`}/>
    </div>
 );
};
