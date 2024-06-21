import type { FC, FormEvent } from 'react'
import type { App } from '@models/app'
import { useState } from 'react'
import { formatEmailPlaceholder } from '@utils/format'
import Image from 'next/image'
import Styles from './DeleteAccountForm.module.css'

interface DeleteAccountFormProps {
  app: App
  locale: string | undefined
}

export const DeleteAccountForm: FC<DeleteAccountFormProps> = ({ app }) => {
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')

  const emailPlaceholder = formatEmailPlaceholder(
    app.delete?.emailPlaceholder ?? ''
  )

  const disabled = email.length <= 0

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
  }

  const renderDataList = app.delete?.dataList.map(data => (
    <li key={data}>{data}</li>
  ))

  return (
    <div className={Styles.formWrapper}>
      <form className={Styles.formContainer} onSubmit={onSubmit}>
        <div className={Styles.appHeader}>
          <Image src={app.icon} width={100} height={100} alt={app.name} />
          <div className={Styles.appHeaderTextWrapper}>
            <h1 className={Styles.appTitle}>{app.name}</h1>
            <h2 className={Styles.appSubtitle}>{app.delete?.author}</h2>
          </div>
        </div>
        <h2 className={Styles.appTitle}>{app.delete?.title}</h2>
        <input
          className={Styles.formInput}
          required
          type="email"
          placeholder={emailPlaceholder}
          value={email}
          onChange={({ currentTarget }) => {
            setEmail(currentTarget.value)
          }}
        />
        <textarea
          className={Styles.formInput}
          maxLength={150}
          placeholder={app.delete?.messagePlaceholder}
          value={message}
          onChange={({ currentTarget }) => {
            setMessage(currentTarget.value)
          }}
        />
        <span className={Styles.counter}>{message.length}/150</span>
        <h2 className={Styles.appTitle}>{app.delete?.listTitle}</h2>
        <ul className={Styles.dataList}>{renderDataList}</ul>
        <input
          className={Styles.submitButton}
          type="submit"
          value={app.delete?.submitButtonTitle}
          disabled={disabled}
        />
      </form>
    </div>
  )
}
