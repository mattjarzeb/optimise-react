import type { NextApiRequest, NextApiResponse } from 'next'
import faker from 'faker'
import { Data } from '../../interfaces/data.interface'

const mockData = (limit = 5000) => {
  return new Array(limit).fill(0).map(() => ({
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phone: faker.phone.phoneNumber(),
    address: {
      street: faker.address.streetName(),
      city: faker.address.city(),
      code: faker.address.zipCode(),
    },
    image: faker.image.imageUrl(600, 400, undefined, true),
    lorem: faker.lorem.paragraph(),
  }))
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data[]>) {
  const mock = mockData(Number(req.query.limit))
  res.status(200).json(mock)
}

export const ssrHandler = (limit?: number) => {
  return mockData(limit)
}
