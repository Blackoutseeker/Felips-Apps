import { StaticImageData } from 'next/image'
import type { ContentTranslation } from './index'

export type App = {
  name: string
  image: StaticImageData | string
  sourceCodeUrl: string
  googlePlayUrl: string
  content: ContentTranslation
}
