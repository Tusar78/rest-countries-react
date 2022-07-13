import React from 'react';
import './Country.css';

const Country = ({country}) => {
  const {name: {common: name}, flags: {png: img}, population} = country;
  return (
    <div className='country'>
      <img src={img} alt="" className='country__flag' />
      <h2 className='country__name'>{name}</h2>
      <p className='country__population'>Population: {population}</p>
    </div>
  );
};

export default Country;