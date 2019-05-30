import Component from './Component.js';
import PokeItem from './PokeItem.js';

class PokeList extends Component {
    render() {
        const dom = this.renderDOM();
        const pokemon = this.props.pokemon;

        pokemon.forEach(poke => {
            const pokeItem = new PokeItem({ pokemon: poke });
            const pokeItemDOM = pokeItem.render();
            dom.appendChild(pokeItemDOM);
        });
        
        return dom;
    }
    renderTemplate() {
        return /*html*/ `
            <ul></ul>
        `;
    }
}

export default PokeList;