import SelectedCountry from '../components/SelectedCountry';

const selectedCountryList = ({selectedCountries}) => {
    const countryItems = selectedCountries.map((country, index) => {
      return <SelectedCountry country={country} key={index}/>
    });

    return (
      <>{countryItems}</>
      )
}

export default selectedCountryList;