import { useState } from "react"

const CountryAddForm = ({countries, handleAddForm, selectedCountries}) => {
    
    const [countrySelected, setCountrySelected] = useState(false)

    countries = countries.filter((x) => !selectedCountries.includes(x));
    const countryOptions = countries.map((country) => {
      return <option value={country.cca3} key={country.cca3}>{country.name.common}</option>
    })

    const handleChange = function(event){
        if (event.target.value !== "Add Country"){
            setCountrySelected(true)
        } else {
            setCountrySelected(false)
        }
    }

    return (
        <form id="add-form" onSubmit={handleAddForm}>
            <select name="country" defaultValue="Add Country" onChange={handleChange}>
                <option value="Add Country">Add Country</option>
                {countryOptions}
            </select>
            <input type="submit" value="Add Country" disabled = {!countrySelected}></input>
        </form>
    )
}

export default CountryAddForm;