import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const PokemonContext = createContext({});

const PokemonProvider = ({ children }) => {

  let allPokemonsUrl = "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0";
  const defaultState = {
    name: 'All',
    url: allPokemonsUrl,
  };

  const [ allPokemons, setAllPokemons ] = useState( null );
  const [ pokemonsFiltered, setPokemonsFiltered ] = useState( null );

  const [ types, setTypes ] = useState( [defaultState] );
  const [ filterSelected, setFilterSelected ] = useState( defaultState )

  const changeTypeSelected = async( type ) => {
    setFilterSelected( type );

    const { data } = await axios.get( type?.url );
    let pokemons = data?.pokemon?.map(
      ({ pokemon }) => pokemon?.url
    );

    type.name !== 'All'
      ? setPokemonsFiltered( pokemons )
      : setPokemonsFiltered( allPokemons );
  };

  const getPokemonsType = async() => {
    const { data } = await axios.get('https://pokeapi.co/api/v2/type');

    console.log(data)
    setTypes([ ...types, ...data.results ]);
  };

  const getAllPokemons = async() => {
    const { data } = await axios.get(allPokemonsUrl);

    let pokemons = data?.results?.map(
      ( pokemon ) => pokemon?.url
    );

    setAllPokemons(pokemons);
    setPokemonsFiltered(pokemons);
  }

  useEffect(() => {
    getPokemonsType();
    getAllPokemons()
  }, []);
  

  return (
    <PokemonContext.Provider value={{types, filterSelected, pokemonsFiltered, changeTypeSelected}}>
        {children}
    </PokemonContext.Provider>
  );

};

export default PokemonProvider;
