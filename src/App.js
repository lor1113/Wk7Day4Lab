import './App.css';
import React, { useState, useEffect } from 'react';

import CountryListContainer from './containers/CountryListContainer';

function App() {
    const [countries, setCountries] = useState([]);

    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }

    useEffect(() => {
      getCountries();
    }, [])
  return (
    <div id="full-page-wrap">
      <CountryListContainer countries={countries}/>
      <CountryDetailContainer countries={countries}/>
    </div>
  );
}

export default App;
