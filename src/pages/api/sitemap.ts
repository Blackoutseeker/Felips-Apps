import type { NextApiRequest, NextApiResponse } from 'next'
import { locales, apps } from '@utils/constants'
import { SitemapStream, streamToPromise } from 'sitemap'
import { Readable } from 'stream'

type Link = {
  url: string
  changefreq:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'anual'
    | 'never'
  priority: number
}

export default async (request: NextApiRequest, response: NextApiResponse) => {
  const links: Link[] = [{ url: '/', changefreq: 'weekly', priority: 1 }]

  locales.forEach(locale => {
    links.push({
      url: `/${locale}`,
      changefreq: 'weekly',
      priority: 1
    })
  })

  apps.forEach(app => {
    links.push({
      url: `/${app}`,
      changefreq: 'weekly',
      priority: 1
    })
  })

  apps.forEach(app => {
    locales.forEach(locale => {
      links.push({
        url: `/${locale}/${app}`,
        changefreq: 'weekly',
        priority: 1
      })
    })
  })

  const stream = new SitemapStream({
    hostname: `https://${request.headers.host}`
  })

  response.writeHead(200, {
    'Content-Type': 'application/xml'
  })

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data: { toString: () => any }) => data.toString())

  response.end(xmlString)
}
