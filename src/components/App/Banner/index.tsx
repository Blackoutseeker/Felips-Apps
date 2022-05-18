import type { FC } from 'react'
import Image, { StaticImageData } from 'next/image'
import { Framework } from '@utils/constants'
import { SiFlutter, SiReact } from 'react-icons/si'
import Styles from './Banner.module.css'

interface BannerProps {
  appIcon: StaticImageData | string
  appName: string
  appFramework: string
  appDevelopmentText: string
}

export const Banner: FC<BannerProps> = ({
  appIcon,
  appName,
  appFramework,
  appDevelopmentText
}) => {
  const handleFrameworkIcon = () => {
    switch (appFramework) {
      case Framework.Flutter:
        return <SiFlutter color="#fff" size={45} />
      case Framework.ReactNative:
        return <SiReact color="#fff" size={45} />
      default:
        return null
    }
  }

  return (
    <div className={Styles.bannerContainer}>
      <div className={Styles.logoContainer}>
        <div className={Styles.iconContainer}>
          <Image
            src={appIcon}
            layout="fill"
            objectFit="contain"
            alt={appName}
            quality={90}
          />
        </div>
        <h3 className={Styles.appNameText} translate="no">
          {appName}
        </h3>
      </div>
      <div className={Styles.developmentContainer}>
        <span className={Styles.developmentText}>{appDevelopmentText}</span>
        <div className={Styles.developmentLogo}>
          {handleFrameworkIcon()}
          <span className={Styles.frameworkText} translate="no">
            {appFramework}
          </span>
        </div>
      </div>
    </div>
  )
}
