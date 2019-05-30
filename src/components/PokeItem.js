import Component from './Component.js';

class PokeItem extends Component {
    renderTemplate(){
        const pokemon = this.props.pokemon;
        return /*html*/ `
            <li>
                <h2>${pokemon.pokemon}</h2>
                <img src="${pokemon.url_image}" alt="${pokemon.pokemon}">
            </li>
        `;
    }
}

export default PokeItem;