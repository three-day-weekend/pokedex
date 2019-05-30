import QUERY from '../QUERY.js';
const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';

const api = {
    getPokemon(queryProps) {
        let url = '';
        if(queryProps) {
            url = QUERY.stringify(queryProps);
        }
        return fetch(`${URL}?${url}`)
            .then(response => response.json());
    }
};

export default api;