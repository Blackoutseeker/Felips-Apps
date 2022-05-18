import type { FC } from 'react'
import Image from 'next/image'
import GooglePlayBadge from '@assets/images/Google Play Badge.png'
import { SourceCodeButton } from '@components/index'
import Styles from './SectionFooter.module.css'

interface SectionFooterProps {
  googlePlayStoreUrl: string
  storeButtonTitle: string
  sourceCodeUrl: string
}

export const SectionFooter: FC<SectionFooterProps> = ({
  googlePlayStoreUrl,
  storeButtonTitle,
  sourceCodeUrl
}) => {
  return (
    <section className={Styles.footerContainer}>
      <a
        className={Styles.storeButton}
        href={googlePlayStoreUrl}
        target="_blank"
        rel="noreferrer"
        title={storeButtonTitle}
      >
        <Image
          src={GooglePlayBadge}
          width={193.8}
          height={75}
          alt={storeButtonTitle}
          quality={90}
        />
      </a>
      <SourceCodeButton href={sourceCodeUrl} />
    </section>
  )
}
