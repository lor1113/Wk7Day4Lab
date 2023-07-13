import React, { useState } from 'react';
import './CountryListContainer.css';
import CountryAddForm from '../components/CountryAddForm';
import CountryRemoveForm from '../components/CountryRemoveForm';
import SelectedCountryList from '../components/SelectedCountryList'


const CountryListContainer = ({countries}) => {
    const [selectedCountries, setSelectedCountries] = useState([]);

    const country_populations = countries.map(x => x["population"])
    const popSum = country_populations.reduce((partialSum, a) => partialSum + a, 0);

    const handleAddForm = function(event) {
        event.preventDefault()
        const countryToAddCCA3 = document.forms["add-form"].country.value
        const countryToAdd = countries.find(x => x.cca3 === countryToAddCCA3);
        const newCountriesSelected = selectedCountries.concat([countryToAdd])
        setSelectedCountries(newCountriesSelected)
        document.forms["add-form"].reset()
    }

    const handleRemoveForm = function(event){
        event.preventDefault()
        const countryToRemoveCCA3 = document.forms["remove-form"].country.value
        const newCountriesSelected = selectedCountries.filter((x) => x.cca3 !== countryToRemoveCCA3);
        setSelectedCountries(newCountriesSelected)
    }

    return (
        <>
        <h2>Total Country Population: {popSum}</h2>
        <br></br>
        <CountryAddForm countries={countries} handleAddForm={handleAddForm} selectedCountries={selectedCountries}/>
        <br></br>
        <SelectedCountryList selectedCountries={selectedCountries}/>
        <br></br>
        <CountryRemoveForm selectedCountries={selectedCountries} handleRemoveForm={handleRemoveForm}/>
    </>
    )
}
export default CountryListContainer;
