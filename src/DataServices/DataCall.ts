import { IPokemon, IEvolutions, ILocation, ILocationArray } from "../Interfaces/interfaces";


export const getData = async(pokemon: string | number) => {
    const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const pokedata: IPokemon = await promise.json();
    return pokedata;
}

export const getRandomPokemon = async() => {
    const rand = Math.floor(Math.random() * 651);
    const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${rand}`);
    const pokedata: IPokemon = await promise.json();
    return pokedata;
}

export const locatePokemon = async(pokemon: string | number) => {
    const promise = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/encounters`)
    const data = await promise.json()
    console.log(data)
    return data[0]?.location_area ? data[0].location_area.name.toUpperCase().replaceAll("-", " ") : "N/A"
}




