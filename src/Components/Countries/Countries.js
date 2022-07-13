import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

// Base URL
const BASE_URL = `https://restcountries.com/v3.1/all`;

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(`${BASE_URL}`)
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  return (
    <section className='section container'>
      <div className="countries__container grid">
        {
          countries.map((country, index) => {
            return <Country key={index} country={country}></Country>
          })
        }
      </div>
    </section>
  );
};

export default Countries;