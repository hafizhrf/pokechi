import React from 'react'
import Head from 'next/head'
import { NextComponentType } from 'next'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { ApolloClient, InMemoryCache, ApolloProvider  } from '@apollo/client';

import 'normalize.css'

// import Global from '../styles/index.styled'

interface Props {
  Component: NextComponentType
  pageProps: unknown
}

const client = new ApolloClient({
  uri: 'https://graphql-pokemon2.vercel.app',
  cache: new InMemoryCache()
});

const theme = createMuiTheme({
  // palette: {
  //   primary: {
  //     main: '#fce973',
  //     contrastText: '#000',
  //   },
  // },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
})

function App({ Component, pageProps }: Props): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <Head>
          <title>Perpustakaan SMK Negeri 1 Kota Bekasi</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        {/* <Global /> */}
        <Component {...pageProps} />
      </ApolloProvider>
    </ThemeProvider>
  )
}

export default App
