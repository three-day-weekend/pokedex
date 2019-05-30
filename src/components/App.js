import Component from './Component.js';
import Header from './Header.js';
import PokeList from './PokeList.js';
import api from '../services/api.js';
import Loading from './Loading.js';
import Search from './Search.js';
import hashStorage from '../hash-storage.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        const headerDOM = header.render();

        const pokeList = new PokeList({ pokemon: [] });
        const pokeListDOM = pokeList.render();

        const loading = new Loading({ done: false });
        const loadingDOM = loading.render();

        const search = new Search();
        const searchDOM = search.render();

        dom.prepend(headerDOM);
        main.appendChild(loadingDOM);

        main.appendChild(searchDOM);
        main.appendChild(pokeListDOM);

        function loadPokemon() {
            loading.update({ done: false });
            const queryProps = hashStorage.get();

            api.getPokemon(queryProps)
                .then(pokemon => {
                    pokeList.update({ pokemon: pokemon.results });
                })
                .finally(() => {
                    loading.update({ done: true });
                });
        }

        loadPokemon();

        window.addEventListener('hashchange', () => {
            loadPokemon();
        });

        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <div>
                <main></main>
            </div>
        `;
    }
}

export default App;