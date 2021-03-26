import Layout from '../layout'
import Head from 'next/head'
import { Pokemons } from '../components/pokemons'

export default function Home(): React.ReactElement {
  return (
    <Layout>
      <Head>
        <title>Pokechi | Home</title>
      </Head>
      <Pokemons />
    </Layout>
  )
}
