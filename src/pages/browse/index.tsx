import { useState } from 'react';
import { useFetch } from 'usehooks-ts';

import PokemonCard, { PokemonCardProps } from './PokemonCard';
import Search from './Search';

import PageLayout from '@/components/PageLayout';
import SubHeader from '@/components/SubHeader';


import styles from '@/styles/Browse.module.css';

type fetchAllPokemonResponse = {
  data: PokemonCardProps[]
  error?: Error
}

export default function Browse() {
  const { error, data } = useFetch('/api/pokemon') as fetchAllPokemonResponse;

  const [search, setSearch] = useState('');

  return (
    <PageLayout page="Browse">
      <SubHeader>
        <Search search={search} setSearch={setSearch} />
      </SubHeader>
      <main className={styles.main}>
        <div className={styles.pokemon}>
          {!data && <div id="loading">Loading Pokemon data...</div>}
          {error && <div>Error fetching Pokemon data...</div>}
          {data && data
            .filter(({ name }: PokemonCardProps) => name.toLowerCase().includes(search.toLowerCase()))
            .map((p: PokemonCardProps) => (
              <PokemonCard
                key={p.id}
                {...p}
              />
            ))
          }
        </div>
      </main>
    </PageLayout>
  );
}
