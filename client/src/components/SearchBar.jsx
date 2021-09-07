import React from 'react';

export default function SearchBar({onSearch}) {
// acá va tu código
let city =''

 return (
   <div>
     <nav>
       <input
         type= "text"
         name="Search City"
         />
       <button onClick={e => onSearch(e)}>
         Search
       </button>
     </nav>
   </div>
);
};
