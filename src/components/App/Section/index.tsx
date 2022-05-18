import type { FC } from 'react'
import Styles from './Section.module.css'

interface SectionProps {
  title: string
  bodyText: string
  isMotivation?: boolean
}

export const Section: FC<SectionProps> = ({
  title,
  bodyText,
  isMotivation
}) => {
  return (
    <section className={Styles.sectionContainer}>
      <h4 className={Styles.title}>{title}</h4>
      <p className={isMotivation ? Styles.motivationText : Styles.bodyText}>
        {isMotivation ? <span>&ldquo;</span> : null}
        {bodyText}
        {isMotivation ? <span>&rdquo;</span> : null}
      </p>
    </section>
  )
}
