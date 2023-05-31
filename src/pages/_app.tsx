import { ApolloProvider } from '@apollo/client';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import pokeapi from '@/utils/pokeapi';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={pokeapi}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
