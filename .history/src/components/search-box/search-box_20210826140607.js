import React from 'react';
import './search-box.css';

const SearchBox = ({ placeholder, handleChange }) => (
    <input className='search' type='search' placeholder='Search monsters' onChange={handleChange}/>
)