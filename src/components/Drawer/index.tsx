import { FC, useState } from 'react'
import { useRouter } from 'next/router'
import { getStaticTranslationForUserLocale } from '@services/pageTranslation'
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGooglePlay,
  FaGithub
} from 'react-icons/fa'
import Link from 'next/link'
import Styles from './Drawer.module.css'

export const Drawer: FC = () => {
  const { locale } = useRouter()
  const staticTranslation = getStaticTranslationForUserLocale(locale)
  const {
    page: {
      body: { titles }
    }
  } = staticTranslation

  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false)

  const handleDrawerToggle = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  if (!isDrawerOpen) {
    return (
      <button onClick={handleDrawerToggle} className={Styles.openDrawerButton}>
        <FaBars color="#fff" size={20} />
      </button>
    )
  }
  return (
    <div className={Styles.drawerContainer}>
      <header className={Styles.drawerHeader}>
        <button
          onClick={handleDrawerToggle}
          className={Styles.closeDrawerButton}
        >
          <FaTimes color="#fff" size={20} />
        </button>
        <Link href={`/${locale}`} passHref>
          <a translate="no" className={Styles.logo}>
            Felip&apos;s Apps
          </a>
        </Link>
      </header>
      <ul className={Styles.socialMediasList}>
        <li>
          <a
            href={process.env.LINKEDIN_PROFILE_URL!}
            target="_blank"
            rel="noreferrer"
            className={Styles.socialMediaItem}
          >
            <FaLinkedin size={40} className={Styles.icon} />
            <span className={Styles.socialMediaText}>
              {titles.linkedInProfile}
            </span>
          </a>
        </li>
        <li>
          <a
            href={process.env.GOOGLE_PLAY_PROFILE_URL!}
            target="_blank"
            rel="noreferrer"
            className={Styles.socialMediaItem}
          >
            <FaGooglePlay size={40} className={Styles.icon} />
            <span className={Styles.socialMediaText}>
              {titles.googlePlayStoreProfile}
            </span>
          </a>
        </li>
        <li>
          <a
            href={process.env.GITHUB_PROFILE_URL!}
            target="_blank"
            rel="noreferrer"
            className={Styles.socialMediaItem}
          >
            <FaGithub size={40} className={Styles.icon} />
            <span className={Styles.socialMediaText}>
              {titles.gitHubProfile}
            </span>
          </a>
        </li>
      </ul>
    </div>
  )
}
