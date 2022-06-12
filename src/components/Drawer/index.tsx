import { FC, useState } from 'react'
import { useRouter } from 'next/router'
import { getStaticTranslationForUserLocale } from '@services/pageTranslation'
import { locales, languages } from '@utils/constants'
import {
  FaBars,
  FaTimes,
  FaLinkedin,
  FaGooglePlay,
  FaGithub
} from 'react-icons/fa'
import Link from 'next/link'
import { HiTranslate } from 'react-icons/hi'
import Styles from './Drawer.module.css'

export const Drawer: FC = () => {
  const { locale, push, asPath } = useRouter()
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

  const changeLocale = async (locale: string) => {
    await push(asPath, undefined, {
      locale,
      scroll: false,
      shallow: true
    }).then(handleDrawerToggle)
  }

  const renderLanguageItems = () =>
    locales.map((locale, index) => {
      const language = languages[index]
      return (
        <li
          key={locale}
          className={Styles.listItem}
          onClick={() => changeLocale(locale)}
        >
          {language}
        </li>
      )
    })

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
      <ul className={Styles.buttonsList}>
        <li>
          <a
            href={process.env.LINKEDIN_PROFILE_URL!}
            target="_blank"
            rel="noreferrer"
            className={Styles.listItem}
          >
            <FaLinkedin size={40} className={Styles.icon} />
            <span>{titles.linkedInProfile}</span>
          </a>
        </li>
        <li>
          <a
            href={process.env.GOOGLE_PLAY_PROFILE_URL!}
            target="_blank"
            rel="noreferrer"
            className={Styles.listItem}
          >
            <FaGooglePlay size={40} className={Styles.icon} />
            <span>{titles.googlePlayStoreProfile}</span>
          </a>
        </li>
        <li>
          <a
            href={process.env.GITHUB_PROFILE_URL!}
            target="_blank"
            rel="noreferrer"
            className={Styles.listItem}
          >
            <FaGithub size={40} className={Styles.icon} />
            <span>{titles.gitHubProfile}</span>
          </a>
        </li>
        <li className={Styles.listItem}>
          <HiTranslate size={40} className={Styles.icon} />
          <hr className={Styles.divider} />
        </li>
        {renderLanguageItems()}
      </ul>
    </div>
  )
}
