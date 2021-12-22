import { NextApiRequest, NextApiResponse} from 'next'

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res:NextApiResponse) => {
    const users= [
        {id: 1, name: 'Jorge'},
        {id: 2, name: 'Dani'},
        {id: 3, name: 'Rafael'}
    ]
    return res.json(users)
}
