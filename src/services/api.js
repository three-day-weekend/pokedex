const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';

const api = {
    getPokemon() {
        return fetch(URL)
            .then(response => response.json());
    }
};

export default api;