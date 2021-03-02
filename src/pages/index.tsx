import Head from 'next/head'
import { Pokemons } from '../components/pokemons'

export default function Home(): React.ReactElement {
  return (
    <div>
      <Head>
        <title>Pokechi | Home</title>
      </Head>
      <div>
        <Pokemons />
      </div>
    </div>
  )
}
