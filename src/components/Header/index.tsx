import { FC, useState, useCallback, useEffect } from 'react'
import type { App } from '@models/index'
import { useRouter } from 'next/router'
import { getStaticTranslationForUserLocale } from '@services/pageTranslation'
import { locales, languages } from '@utils/constants'
import { Drawer, SearchBar } from '@components/index'
import Link from 'next/link'
import { HiTranslate } from 'react-icons/hi'
import OutsideClickHandler from 'react-outside-click-handler'
import { FaLinkedin, FaGooglePlay, FaGithub } from 'react-icons/fa'
import Styles from './Header.module.css'

interface HeaderProps {
  apps: App[]
}

export const Header: FC<HeaderProps> = ({ apps }) => {
  const { locale, asPath, push } = useRouter()
  const staticTranslation = getStaticTranslationForUserLocale(locale)
  const {
    page: {
      body: { titles }
    }
  } = staticTranslation

  const [lastScrollY, setLastScrollY] = useState<number>(0)
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(false)
  const [isLanguagesListOpen, setIsLanguagesListOpen] = useState<boolean>(false)

  const switchListVisibility = () => {
    setIsLanguagesListOpen(!isLanguagesListOpen)
  }

  const changeLocale = async (locale: string) => {
    await push(asPath, undefined, {
      locale,
      scroll: false,
      shallow: true
    })
  }

  const renderLanguageItems = () =>
    locales.map((locale, index) => {
      const language = languages[index]
      return (
        <li
          key={locale}
          className={Styles.languageItem}
          onClick={() => changeLocale(locale)}
        >
          {language}
        </li>
      )
    })

  const handlePageScrollY = useCallback(() => {
    setLastScrollY(window.scrollY)
    setIsHeaderVisible(window.scrollY < lastScrollY)
  }, [lastScrollY])

  useEffect(() => {
    window.addEventListener('scroll', handlePageScrollY)
    return () => {
      window.removeEventListener('scroll', handlePageScrollY)
    }
  }, [handlePageScrollY])

  return (
    <header
      className={
        isHeaderVisible ? Styles.headerVisible : Styles.headerInvisible
      }
    >
      <Drawer />
      <Link href={`/${locale}`} passHref>
        <a title={titles.goToHomePage} translate="no" className={Styles.logo}>
          Felip&apos;s Apps
        </a>
      </Link>
      <SearchBar apps={apps} />
      <div className={Styles.buttonsContainer}>
        <button
          className={Styles.translateButton}
          onClick={switchListVisibility}
        >
          <HiTranslate className={Styles.icon} size={30} />
          {isLanguagesListOpen && (
            <OutsideClickHandler onOutsideClick={switchListVisibility}>
              <ul className={Styles.languagesList}>{renderLanguageItems()}</ul>
            </OutsideClickHandler>
          )}
        </button>
        <a
          href={process.env.LINKEDIN_PROFILE_URL!}
          target="_blank"
          rel="noreferrer"
          title={titles.linkedInProfile}
        >
          <FaLinkedin className={Styles.icon} size={30} />
        </a>
        <a
          href={process.env.GOOGLE_PLAY_PROFILE_URL!}
          target="_blank"
          rel="noreferrer"
          title={titles.googlePlayStoreProfile}
        >
          <FaGooglePlay className={Styles.icon} size={30} />
        </a>
        <a
          href={process.env.GITHUB_PROFILE_URL!}
          target="_blank"
          rel="noreferrer"
          title={titles.gitHubProfile}
        >
          <FaGithub className={Styles.icon} size={30} />
        </a>
      </div>
    </header>
  )
}
