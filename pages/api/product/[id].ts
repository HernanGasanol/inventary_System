import type { NextApiRequest, NextApiResponse } from 'next'

type product = {
  name: string,
  price:number,
  quantity:number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<product>
) {
  res.status(200).json({ name: 'John Doe' ,price:2000,quantity:2000})
}
