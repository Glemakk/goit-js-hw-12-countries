import countryCardTpl from '../templates/country-card.hbs';

import { refs } from './constants'
import fetchCountries from './fetchCountries'


// const makeRenderCountry = qwe = 

refs.input.addEventListener('input', onSearch);

function onSearch(e) {
    const input = e.currentTarget;
    const searchQuery = input.value;
    // console.log(searchQuery)

    fetchCountries(searchQuery).then(renderCountryCard).catch(err =>
    console.log(err)
        );
}

// fetchCountries('italy').then(renderCountryCard).catch(err =>
//     console.log(err)
//         );

// fetch('https://restcountries.eu/rest/v2/name/poland')
//     .then(response => {
//         return response.json();
//     })
//     .then(renderCountryCard)
//     .catch(err => {
//         console.log(err);
//     });

function renderCountryCard(countryName) {
    const markup = countryCardTpl(countryName);
    // console.log(markup);
    refs.card.innerHTML = markup;
    }