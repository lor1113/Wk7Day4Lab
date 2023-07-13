import React, { useState } from 'react';
import CountryDetailSelect from '../components/CountryDetailSelect';
import CountryDetailDisplay from '../components/CountryDetailDisplay';

const CountryDetailContainer = ({countries}) => {
    const [selectedCountry, setSelectedCountry] = useState(null);

    return(
        <>
        <div><CountryDetailSelect countries={countries}/></div>
        <div><CountryDetailDisplay selectedCountry={selectedCountry}/></div>
        </>
    )    
}

export default CountryDetailContainer;