// mock
// Información creada para probar algo.
const pokemones = [
    {name: 'Pikachu', type: 'Lightning'},
    {name: 'Charmander', type: 'Fire'},
    {name: 'Charizard', type: 'Fire'},
    {name: 'Raichu', type: 'Lightning'},
    {name: 'Miutwo', type: 'Unknown'},
    {name: 'Charmaleon', type: 'Fire'}

]

const findPokemon = (name) => {
    return pokemones.find((pokemon) => pokemon.name.toLocaleLowerCase().trim() == name.toLocaleLowerCase().trim());
}

const filterBySubstring = (substring) => {
    return pokemones.filter((pokemon) => pokemon.name.toLocaleLowerCase().trim().includes(substring.toLocaleLowerCase().trim()));
}

console.log('Pokemon list');
console.log(pokemones);

document.getElementById('findPokemonButton').addEventListener('click', (e) => {
    e.preventDefault();
    const pokemonName = document.getElementById('pokemonNameInput').value;
    const foundPokemon = findPokemon(pokemonName);
    console.log(`Found pokemon: ${foundPokemon.name} type: ${foundPokemon.type}`);
});

document.getElementById('searchPokemonButton').addEventListener('click', (e) => {
    e.preventDefault();
    const substringPokemon = document.getElementById('pokemonSubstringInput').value;
    const foundPokemon = filterBySubstring(substringPokemon);
    console.log(foundPokemon);
    //console.log(`Found pokemon: ${foundPokemon.name} type: ${foundPokemon.type}`);
});

// Opciones para filtras los pokemones
/*
Opción 1.
    1. Traernos todos los pokemons de la API.
    2. Filtrarlos directamente desde nuestro código.

Opción 2.
    1. Traernos todos los pokemons de la API.
    2. Filtrar aquellos que cumplan con una condición y hacer peticiones a esos pokemones.

*/

