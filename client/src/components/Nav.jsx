import React from 'react';
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom';

export default function Nav(props) {

  return (
  <React.Fragment>

    <Link to='/'>
      Weather App
    </Link>

    <Link to='/about'>
        <span>About</span>
    </Link>

    <SearchBar
      onSearch={props.onSearch}
      />
    
  </React.Fragment>
  )
}
