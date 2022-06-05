import { NextApiRequest, NextApiResponse } from 'next';
import withHandler from '@libs/server/withHandler';
import client from '@libs/server/client';

async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { phone, email } = req.body;
    const payload = phone ? { phone: +phone } : { email };
    const token = await client.token.create({
        data: {
            payload: '1234',
            user: {
                connectOrCreate: {
                    where: { ...payload },
                    create: {
                        name: 'Anonymous',
                        ...payload
                    }
                }
            }
        }
    });
    // if (email) {
    //     user = await client.user.findUnique({ where: { email } });

    //     if (user) console.log('found it.');
    //     if (!user) {
    //         console.log('Did not find. Will create');
    //         user = await client.user.create({ data: { name: 'Anonymous', email } });
    //     }

    //     console.log(user);
    // }

    // if (phone) {
    //     user = await client.user.findUnique({ where: { phone: +phone } });

    //     if (user) console.log('found it.');
    //     if (!user) {
    //         console.log('Did not find. Will create');
    //         user = await client.user.create({ data: { name: 'Anonymous', phone: +phone } });
    //     }

    //     console.log(user);
    // }
    console.log(token);
    return res.status(200).end();
}

export default withHandler('POST', handler);
