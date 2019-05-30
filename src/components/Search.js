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
            hashStorage.set(queryProps);
        });

        window.addEventListener('hashchange', () => {
            setInputFromHash();
        });

        function setInputFromHash() {
            input.value = hashStorage.get().pokemon;
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