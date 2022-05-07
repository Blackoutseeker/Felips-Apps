import type { FC } from 'react'
import type { App } from '@models/index'
import Link from 'next/link'
import Image from 'next/image'
import { FaGooglePlay, FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Styles from './AppCard.module.css'

interface AppCardProps {
  app: App
}

export const AppCard: FC<AppCardProps> = ({ app }) => {
  return (
    <li className={Styles.appCardContainer}>
      <Link href={`/${app.name}`} passHref>
        <a className={Styles.appLogoContainer} title={app.name}>
          <Image
            src={app.image}
            width={100}
            height={100}
            alt={app.name}
            quality={90}
          />
          <h3 className={Styles.appNameText} translate="no">
            {app.name}
          </h3>
        </a>
      </Link>
      <p className={Styles.appPresentationText}>
        {app.content.presentationText}
      </p>
      <div className={Styles.buttonsContainer}>
        <a
          href={app.googlePlayUrl}
          target="_blank"
          rel="noreferrer"
          title={app.content.viewOnGooglePlayStore}
        >
          <FaGooglePlay className={Styles.buttonIcon} size={30} />
        </a>
        <a
          href={app.sourceCodeUrl}
          target="_blank"
          rel="noreferrer"
          title={app.content.viewSourceCode}
        >
          <FaGithub className={Styles.buttonIcon} size={30} />
        </a>
      </div>
      <Link href={`/${app.name}`} passHref>
        <a className={Styles.linkButton} title={app.name}>
          <button>
            <FaExternalLinkAlt className={Styles.buttonIcon} size={15} />
          </button>
        </a>
      </Link>
    </li>
  )
}
