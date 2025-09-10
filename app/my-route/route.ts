import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  console.log(payload);

  const data = await payload.find({
    collection: 'users'
  })
  

  return Response.json(data)
}
