import { useState } from "react"

const CountryRemoveForm = ({selectedCountries, handleRemoveForm}) => {
    
    const [countrySelected, setCountrySelected] = useState(false)

    const countryOptions = selectedCountries.map((country) => {
      return <option value={country.cca3} key={country.cca3}>{country.name.common}</option>
    })

    const handleChange = function(event){
        if (event.target.value !== "Remove Country"){
            setCountrySelected(true)
        } else {
            setCountrySelected(false)
        }
    }

    const handleRemoveFormEvent = function(event){
        setCountrySelected(false)
        handleRemoveForm(event)
    }

    return (
        <form id="remove-form" onSubmit={handleRemoveFormEvent}>
            <select name="country" defaultValue="Remove Country" onChange={handleChange}>
                <option value="Remove Country">Remove Country</option>
                {countryOptions}
            </select>
            <input type="submit" value="Remove Country" disabled = {!countrySelected}></input>
        </form>
    )
}

export default CountryRemoveForm;