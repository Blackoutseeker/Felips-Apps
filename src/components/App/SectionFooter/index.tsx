import type { FC } from 'react'
import { GoogleBadge, SourceCodeButton } from '@components/index'
import Styles from './SectionFooter.module.css'

interface SectionFooterProps {
  googlePlayStoreUrl: string
  locale: string
  storeButtonTitle: string
  sourceCodeUrl: string
}

export const SectionFooter: FC<SectionFooterProps> = ({
  googlePlayStoreUrl,
  locale,
  storeButtonTitle,
  sourceCodeUrl
}) => {
  return (
    <section className={Styles.footerContainer}>
      <GoogleBadge
        googlePlayStoreUrl={googlePlayStoreUrl}
        locale={locale}
        storeButtonTitle={storeButtonTitle}
      />
      <SourceCodeButton href={sourceCodeUrl} />
    </section>
  )
}
