const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountry(data))

}
const displayCountry = countries => {
    // for (const country of countries) {

    // }
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        console.log(country);
        countryDiv.innerHTML = `
        <h3>Name: ${country.name.common} </h3>
        <p>Capital: ${country.capital ?  country.capital[0]:'NO capital'} </p>
      <button onclick="loadCountryDetails('${country.cca2}')">details</button>
        `;
        countriesContainer.appendChild(countryDiv);
    });
}

const loadCountryDetails = (code) => {
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`

    fetch(url)
        .then(res => res.json())
        .then(data => displayCountryDetail(data[0]))
}

// in upper to show details the country 
const displayCountryDetail = country => {
    console.log(country);
    const CountryDetails = document.getElementById('country-details');
    CountryDetails.innerHTML = `
    <h2> Details : ${country.name.common}</h2>
    <img src="${country.flags.png}">
    `
}
loadCountries();