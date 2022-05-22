import { NextApiHandler } from 'next'

const handler: NextApiHandler = (request, response) => {
  const adExchange: string = process.env.AD_EXCHANGE!
  const publisherId: string = process.env.PUBLISHER_ID!
  const relationshipType: string = process.env.RELATIONSHIP_TYPE!
  const certificationAuthority: string = process.env.CERTIFICATION_AUTHORITY!

  const appAdsContent = `${adExchange}, ${publisherId}, ${relationshipType}, ${certificationAuthority}`

  response.status(200).send(appAdsContent)
}

export default handler
