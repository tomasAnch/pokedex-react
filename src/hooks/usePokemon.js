import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"

export const usePokemon = ({ url, id }) => {

  const [ pokemon, setPokemon] = useState();

  const fetchPokemon = async() => {
    if( url ) {
      const { data } = await axios.get( url );
      setPokemon( data );
    } else if( id ) {
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ id }`);
        setPokemon( data );
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return { pokemon };

}
