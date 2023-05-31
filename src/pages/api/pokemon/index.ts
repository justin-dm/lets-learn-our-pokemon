// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { getBrowseResponse } from '../../../utils/pokeCache';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await getBrowseResponse();
  res.status(200).json(response);
}