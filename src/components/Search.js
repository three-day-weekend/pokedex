import Component from './Component.js';
import hashStorage from '../hash-storage.js';

class Search extends Component {
    render() {
        const dom = this.renderDOM();
        const input = dom.querySelector('input');

        dom.addEventListener('submit', event => {
            event.preventDefault();
            const queryProps = {
                pokemon: input.value
            };
            queryProps.page = 1;
            hashStorage.set(queryProps);
        });

        window.addEventListener('hashchange', () => {
            setInputFromHash();
        });

        function setInputFromHash() {
            const pokemon = hashStorage.get().pokemon;
            if(pokemon) {
                input.value = pokemon;
            }
        }

        setInputFromHash();

        return dom;
    }
    renderTemplate() {
        return /*html*/ `
            <form>
                <input type="text">
                <button>Submit</button>
            </form>
        `;
    }
}

export default Search;