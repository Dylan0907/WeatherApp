import React, {useState} from 'react';

export default function SearchBar({onSearch}) {

  const [city, setCity] = useState([]);

  function onChange (e) {
    console.log(e.target.value)
    setCity(e.target.value)
  }

 return (
   <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input
        type="text"
        placeholder="City..."
        onChange={(e)=> onChange(e)}
      />
      <input type="submit" value="Add" />
    </form>
  );
};
