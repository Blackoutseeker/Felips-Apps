import type { FC } from 'react'
import { useRouter } from 'next/router'
import { SourceCodeButton } from '@components/index'
import { getStaticTranslationForUserLocale } from '@services/pageTranslation'
import { FaPaypal } from 'react-icons/fa'
import Styles from './Footer.module.css'

export const Footer: FC = () => {
  const { locale } = useRouter()
  const staticTranslation = getStaticTranslationForUserLocale(locale)
  const {
    page: {
      body: { titles }
    }
  } = staticTranslation

  return (
    <footer className={Styles.footer}>
      <SourceCodeButton />
      <div className={Styles.emailContainer}>
        <a
          className={Styles.emailText}
          href="mailto:felipsdev@gmail.com"
          title={titles.sendEmail}
        >
          felipsdev@gmail.com
        </a>
      </div>
      <a
        className={Styles.payPalButtonWrapper}
        href="https://www.paypal.com/donate/?hosted_button_id=NEXQJS4U5HGC6"
        target="_blank"
        rel="noreferrer"
        title={titles.donations.payPal}
      >
        <button className={Styles.payPalButton}>
          <FaPaypal color="#fff" size={30} />
          <span>PayPal</span>
        </button>
      </a>
      <a
        href="https://www.buymeacoffee.com/Blackoutseeker"
        target="_blank"
        rel="noreferrer"
        title={titles.donations.buyMeACoffee}
      >
        <button className={Styles.buyMeACoffeeButton}>
          <div className={Styles.chocolateIconWrapper}>🍫</div>
          <span>Buy me a chocolate</span>
        </button>
      </a>
    </footer>
  )
}
