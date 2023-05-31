import { useRouter } from 'next/router';
import { useFetch } from 'usehooks-ts';

import Pokemon, { PokemonProps } from './Pokemon';
import BackButton from './BackButton';

import PageLayout from '@/components/PageLayout';
import SubHeader from '@/components/SubHeader';
import Container from '@/components/Container';

type fetchPokemonResponse = {
  data?: PokemonProps
  error?: Error
};

export default function PokemonPage() {
  const router = useRouter();
  const slug = router.query.slug as string;
  const { error, data } = useFetch(`/api/pokemon/${slug}`) as fetchPokemonResponse;

  return (
    <PageLayout page={slug}>
      <SubHeader>
        <BackButton />
      </SubHeader>
      <Container>
        {!data && <div>Loading Pokemon data...</div>}
        {error && <div>Error fetching Pokemon data...</div>}
        {(data && !error) && <Pokemon {...data} />}
      </Container>
    </PageLayout>
  );
}