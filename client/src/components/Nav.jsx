import React from 'react';
import SearchBar from './SearchBar'

export default function Nav(props) {

  return (
  <React.Fragment>
    Weather App
    <SearchBar
      onSearch={props.onSearch}
      />
  </React.Fragment>
  )
}
