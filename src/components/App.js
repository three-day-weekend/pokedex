import Component from './Component.js';
import Header from './Header.js';


class App extends Component {
    render() {
        const dom = this.renderDOM();

        const header = new Header();
        const headerDOM = header.render();
        
        dom.prepend(headerDOM);

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