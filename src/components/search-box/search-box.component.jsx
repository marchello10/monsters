import React from 'react'
import './search-box.styles.css'

//export const SearchBox = ( props ) => (
// tada props.placeholder; props.handleChange
export const SearchBox = ( {placeholder, handleChange} ) => (
    <input 
        className='search'
        type='search' 
        placeholder={placeholder}
        //setState is async, kodas vykdomas toliau ir state atsinaujina neiskart
        //antras setState par yra callbackas, kuris runs kai setState finish
        onChange={handleChange}
  />
)