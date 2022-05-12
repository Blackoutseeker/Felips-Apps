import type { FC } from 'react'
import { useRouter } from 'next/router'
import { getStaticTranslationForUserLocale } from '@services/pageTranslation'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Styles from './SourceCodeButton.module.css'

interface SourceCodeButtonProps {
  href: string
}

export const SourceCodeButton: FC<SourceCodeButtonProps> = ({ href }) => {
  const { locale } = useRouter()
  const staticTranslation = getStaticTranslationForUserLocale(locale)
  const {
    page: {
      body: { titles }
    }
  } = staticTranslation

  return (
    <a
      className={Styles.buttonWrapper}
      href={href}
      target="_blank"
      rel="noreferrer"
      title={titles.viewSourceCode}
    >
      <button className={Styles.sourceCodeButton}>
        <FaGithub color="#fff" size={30} />
        <span className={Styles.buttonText}>{titles.viewSourceCode}</span>
        <FaExternalLinkAlt color="#fff" size={20} />
      </button>
    </a>
  )
}
