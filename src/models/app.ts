import { StaticImageData } from 'next/image'
import type { ContentTranslation } from './index'

export type App = {
  name: string
  icon: StaticImageData | string
  sourceCodeUrl: string
  googlePlayUrl: string
  content: ContentTranslation
  screenshots: StaticImageData[] | string[]
}
