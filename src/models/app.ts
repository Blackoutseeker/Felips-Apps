import { StaticImageData } from 'next/image'
import { ContentTranslation } from './index'

export type App = {
  name: string
  image: StaticImageData | string
  sourceCodeUrl: string
  googlePlayUrl: string
  content: ContentTranslation
}
