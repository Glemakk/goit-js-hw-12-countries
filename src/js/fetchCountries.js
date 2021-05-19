import {BASE_URL} from './constants'

function fetchCountries(searchQuery) {
    return fetch(`${BASE_URL}${searchQuery}`).then(
        response => {
        return response.json();
        }
    );
};

console.log(fetchCountries);


export default fetchCountries;