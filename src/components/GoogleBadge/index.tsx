import type { FC } from 'react'
import { locales } from '@utils/constants'
import Image from 'next/image'
import Styles from './GoogleBadge.module.css'

interface GoogleBadgeProps {
  googlePlayStoreUrl: string
  locale: string
  storeButtonTitle: string
}

export const GoogleBadge: FC<GoogleBadgeProps> = ({
  googlePlayStoreUrl,
  locale,
  storeButtonTitle
}) => {
  const formatLocale = (): string => {
    if (locale.includes('en')) return 'en'
    if (locales.includes(locale)) return locale.toLowerCase()

    return locale.toLocaleLowerCase()
  }

  return (
    <a
      className={Styles.badgeWrapper}
      href={`${googlePlayStoreUrl}&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1`}
      target="_blank"
      rel="noreferrer"
      title={storeButtonTitle}
    >
      <Image
        src={`https://play.google.com/intl/en/badges/static/images/badges/${formatLocale()}_badge_web_generic.png`}
        width={190}
        height={75}
        alt={storeButtonTitle}
      />
    </a>
  )
}
