import type { FC } from 'react'
import { useRouter } from 'next/router'
import { getStaticTranslationForUserLocale } from '@services/pageTranslation'
import Styles from './Message404.module.css'

export const Message404: FC = () => {
  const { locale } = useRouter()
  const staticTranslation = getStaticTranslationForUserLocale(locale)
  const {
    page: {
      body: { message404 }
    }
  } = staticTranslation

  return (
    <div className={Styles.messageWrapper}>
      <h1 className={Styles.messageText}>{message404}</h1>
    </div>
  )
}
