import countryCardTpl from '../templates/country-card.hbs';
import countryCardsTpl from '../templates/countries-cards.hbs'

import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';
import { success } from '@pnotify/core';
import { error } from '@pnotify/core';
import { alert } from '@pnotify/core';

import fetchCountries from './fetchCountries'
import getRefs from './constants'
var _ = require('lodash');


const refs = getRefs();
refs.input.addEventListener('input', _.debounce(onSearch, 500));

function onSearch(e) {
    const input = e.target;
    const searchQuery = input.value;
    clearCountryCard();
    // console.log(searchQuery)
    if (searchQuery.length === 0) {
        return;
    }else {
        fetchCountries(searchQuery)
            .then(country => {
                if (country.length === 1) {
                    renderCountryCard(country);
                    success(`Find ${country[0].name}`)
                    
                } else if (country.length > 10) {
                    error({
                        text: 'Opps! Too many matches found!',
                    });
                } else if (country.length <= 10) {
                    refs.card.innerHTML = countryCardsTpl(country);
                    alert({ text: 'Please enter a more specific query!', });
      }
            }).catch(err =>
    console.log(err)
    )
    }


function renderCountryCard(countryName) {
    const markup = countryCardTpl(countryName);
    countryCardsTpl
    refs.card.innerHTML = markup;
    }

    function clearCountryCard() {
  refs.card.innerHTML = '';
}