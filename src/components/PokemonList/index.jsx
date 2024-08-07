import { PokemonCard } from '../PokemonCard';
import styles from './styles.module.scss'

export const PokemonList = ({ pokemonsUrls, page, perPage }) => {
  return (
    <div>
      { pokemonsUrls?.map((pokemonUrl) => (
        <PokemonCard key={ pokemonUrl } url={ pokemonUrl } />
      ))}
    </div>
  );
};
