import { useQuery, gql } from '@apollo/client'
import { Grid } from '@material-ui/core'
import PokemonCard from '../card'

const POKEMONS = gql`
  query {
    pokemons(first: 10000) {
      name
      image
      types
      attacks {
        fast {
          name
          damage
          type
        }
        special {
          name
          damage
          type
        }
      }
    }
  }
`

const Pokemons = (): React.ReactElement => {
  const { loading, data } = useQuery<PokemonList>(POKEMONS)

  if (loading) return <p>Loading...</p>

  return (
    <Grid container spacing={2}>
      {data.pokemons.map((pokemon, key) => (
        <Grid key={key} item md={4} sm={6}>
          <PokemonCard pokemon={pokemon} />
        </Grid>
      ))}
    </Grid>
  )
}

export { Pokemons }
