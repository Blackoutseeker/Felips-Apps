import type { FC } from 'react'
import type { StaticImageData } from 'next/image'
import { PhoneView } from '@components/index'
import Styles from './Screenshot.module.css'

interface ScreenshotProps {
  screenshotText: string
  screenshotImage: StaticImageData | string
  isReverse?: boolean
}

export const Screenshot: FC<ScreenshotProps> = ({
  screenshotText,
  screenshotImage,
  isReverse
}) => {
  return (
    <section
      className={
        isReverse
          ? Styles.screenshotReverseContainer
          : Styles.screenshotContainer
      }
    >
      <p className={Styles.screenshotText}>{screenshotText}</p>
      <PhoneView image={screenshotImage} />
    </section>
  )
}
