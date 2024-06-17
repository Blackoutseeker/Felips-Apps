import { StaticImageData } from 'next/image'
import { Framework } from '@utils/constants'
import type { ContentTranslation, DeleteTranslation } from './index'

export type App = {
  name: string
  icon: StaticImageData | string
  framework: Framework
  sourceCodeUrl: string
  googlePlayUrl: string
  content: ContentTranslation
  screenshots: StaticImageData[] | string[]
  delete?: DeleteTranslation
}
