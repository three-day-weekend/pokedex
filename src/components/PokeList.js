import Component from './Component.js';

class PokeList extends Component {
    renderTemplate(){
        return /*html*/ `
            <ul>
                <li>
                    <h2>venusaur</h2>
                    <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png" alt="venusaur">
                </li>
                <li>
                    <h2>bulbasaur</h2>
                    <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" alt="bulbasaur">
                </li>
                <li>
                    <h2>venusaur-mega</h2>
                    <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/003_f2.png" alt="venusaur-mega">
                </li>
            </ul>
        `;
    }
}

export default PokeList;