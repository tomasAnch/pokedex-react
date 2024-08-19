import { useContext } from "react"
import { PokeballIconSmall } from "../../assets/pokeball"
import { PokemonList } from "../../components/PokemonList"
import { PokemonContext } from "../../context/PokemonContext"

import styles from './styles.module.scss'
import { Pagination } from "../../components/Pagination"
import { usePagination } from "../../hooks/usePagination"

export const Home = () => {

  const { pokemonsFiltered } = useContext( PokemonContext );
  const { page, nextPage, previousPage, backToHome } = usePagination();

  let perPage = 12;

  return (
    <div className={styles.home}>
      <header>
        <div>
          <PokeballIconSmall />
          <span>Pokédex</span>
        </div>
      </header>
      <PokemonList
        page={ page }
        perPage={ perPage } 
        pokemonsUrls={ pokemonsFiltered } 
      />
      <Pagination 
        page={page}
        perPage={perPage}
        nextPage={nextPage}
        previousPage={previousPage}
        maxItems={pokemonsFiltered?.length}
      />
    </div>
  )

}
