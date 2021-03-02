import { useQuery, gql } from '@apollo/client'

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
  const { loading, error, data } = useQuery(POKEMONS)

  if (loading) return <p>Loading...</p>
  if (error) console.log(error)

  return data.pokemons.map((i, key) => <p key={key}>{i.name}</p>)
}

export { Pokemons }
