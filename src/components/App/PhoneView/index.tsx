import type { FC } from 'react'
import Image, { StaticImageData } from 'next/image'
import Styles from './PhoneView.module.css'

interface PhoneViewProps {
  image: StaticImageData | string
}

export const PhoneView: FC<PhoneViewProps> = ({ image }) => {
  return (
    <div className={Styles.phoneViewContainer}>
      <Image
        src={image}
        width={240}
        height={426.67}
        alt="Screenshot"
        quality={100}
      />
      <div className={Styles.phoneButton} />
    </div>
  )
}
