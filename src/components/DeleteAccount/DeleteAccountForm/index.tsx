import type { FC, FormEvent } from 'react'
import type { App } from '@models/app'
import { useState } from 'react'
import Image from 'next/image'
import Styles from './DeleteAccountForm.module.css'

interface DeleteAccountFormProps {
  app: App
  locale: string | undefined
}

export const DeleteAccountForm: FC<DeleteAccountFormProps> = ({ app }) => {
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const disabled = email.length <= 0

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
  }

  return (
    <div className={Styles.formWrapper}>
      <form className={Styles.formContainer} onSubmit={onSubmit}>
        <div className={Styles.appHeader}>
          <Image src={app.icon} width={100} height={100} alt={app.name} />
          <div className={Styles.appHeaderTextWrapper}>
            <h1 className={Styles.appTitle}>{app.name}</h1>
            <h2 className={Styles.appSubtitle}>By Felip&apos;s Tudio</h2>
          </div>
        </div>
        <h2 className={Styles.appTitle}>Request account deletion</h2>
        <input
          className={Styles.formInput}
          required
          type="email"
          placeholder="App account email*"
          value={email}
          onChange={({ currentTarget }) => {
            setEmail(currentTarget.value)
          }}
        />
        <textarea
          className={Styles.formInput}
          maxLength={150}
          placeholder="Message (optional)"
          value={message}
          onChange={({ currentTarget }) => {
            setMessage(currentTarget.value)
          }}
        />
        <span className={Styles.counter}>{message.length}/150</span>
        <h2 className={Styles.appTitle}>The following data will be deleted:</h2>
        <ul className={Styles.appSubtitle}>
          <li>All your links</li>
          <li>All your filters</li>
          <li>Your entire history</li>
        </ul>
        <input
          className={Styles.submitButton}
          type="submit"
          value="Confirm and submit"
          disabled={disabled}
        />
      </form>
    </div>
  )
}
