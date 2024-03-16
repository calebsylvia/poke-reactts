export const getData = async(pokemon: string | number) => {
    const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const pokedata = await promise.json();
    return pokedata;
}

export const getRandomPokemon = async() => {
    const rand = Math.floor(Math.random() * 651);
    const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${rand}`);
    const pokedata = await promise.json();
    return pokedata;
}

