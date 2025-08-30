
const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

<<<<<<< HEAD
    
    const abilities = pokeDetail.abilities.map((abilitieSlot) => abilitieSlot.ability.name)

    const [ability] = abilities
    pokemon.abilities = abilities
    pokemon.ability = ability

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)

=======
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
>>>>>>> 627a1ca6aebeb81b88429225fe0a5754e6a58a33
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
}
