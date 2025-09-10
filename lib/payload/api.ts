import configPromise from '@payload-config'
import { getPayload } from 'payload'

export async function getHomePageData() {
  const payload = await getPayload({
    config: configPromise,
  })

  const [news, exchangeRates, quickLinks, economicIndicators] = await Promise.all([
    payload.find({
      //@ts-expect-error News not found in the slug 
      collection: 'news',
      limit: 4,
      sort: '-date',
    }),
    payload.find({
           //@ts-expect-error Exchnage rates not found in the slug 
      collection: 'exchange-rates',
      where: {
        isActive: {
          equals: true,
        },
      },
      sort: 'currency',
    }),
    payload.find({
           //@ts-expect-error Quick links not found in the slug 
      collection: 'quick-links',
      where: {
        isActive: {
          equals: true,
        },
      },
      sort: 'order',
      limit: 4,
    }),
    payload.find({
           //@ts-expect-error Economic Indicators not found in the slug 
      collection: 'economic-indicators',
      where: {
        isActive: {
          equals: true,
        },
      },
      sort: 'indicator',
    })
  ])

  return {
    news,
    exchangeRates,
    quickLinks,
    economicIndicators,
  }
}