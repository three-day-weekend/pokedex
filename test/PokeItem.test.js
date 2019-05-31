import PokeItem from '../src/components/PokeItem.js';

const test = QUnit.test;

QUnit.module('PokeItem');

test('Makes PokeItem from template', (assert) => {
    // Arrange
    const pokemon = {
        pokemon: 'venusaur',
        url_image: 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png'
    };

    const pokeItem = new PokeItem({ pokemon });
    const rendered = pokeItem.renderTemplate();

    // Act


    // Assert
    assert.htmlEqual(rendered, /*html*/`
        <li>
            <h2>venusaur</h2>
            <img src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png" alt="venusaur">
        </li>
    `);
});