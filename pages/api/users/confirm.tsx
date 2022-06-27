import { NextApiRequest, NextApiResponse } from 'next';
import withHandler from '@libs/server/withHandler';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { token } = req.body;
    console.log(token);
    res.status(200).end();
}

export default withHandler('POST', handler);
