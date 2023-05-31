// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { getPokemonResponse } from '../../../utils/pokeCache';

type Query = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req;
  const { name } = query as Query;

  const pokemon = await getPokemonResponse(name);

  res.status(200).json(pokemon);
}