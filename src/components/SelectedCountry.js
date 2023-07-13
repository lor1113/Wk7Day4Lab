import React from 'react';

const SelectedCountry = ({country}) => {

  return (
    <div>
      {country.name.common} {country.flag}
    </div>
  )
}

export default SelectedCountry;