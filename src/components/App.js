import Component from './Component.js';
import Header from './Header.js';
import PokeList from './PokeList.js';


class App extends Component {
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        const headerDOM = header.render();

        const pokeList = new PokeList();
        const pokeListDOM = pokeList.render();

        dom.prepend(headerDOM);
        main.appendChild(pokeListDOM);

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