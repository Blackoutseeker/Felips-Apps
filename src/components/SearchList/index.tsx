import { FC, memo } from 'react'
import type { App } from '@models/index'
import Link from 'next/link'
import Image from 'next/image'
import Styles from './SearchList.module.css'

interface AppItemProps {
  app: App
}

const AppItem: FC<AppItemProps> = ({ app }) => {
  return (
    <div>
      <Link href={`/${app.name}`} passHref>
        <a className={Styles.appItem} title={app.name}>
          <div className={Styles.appLogo}>
            <Image
              src={app.image}
              width={100}
              height={100}
              alt={app.name}
              quality={90}
            />
          </div>
          <div className={Styles.appInfo}>
            <h3 className={Styles.appNameText}>{app.name}</h3>
            <p className={Styles.appPresentationText}>
              {app.content.presentationText}
            </p>
          </div>
        </a>
      </Link>
    </div>
  )
}

const MemoizedAppItem = memo(AppItem)

interface SearchListProps {
  apps: App[]
}

export const SearchList: FC<SearchListProps> = ({ apps }) => {
  const renderAppItems = () =>
    apps.map((app, index: number) => {
      const showDivider: boolean = index !== apps.length - 1
      return (
        <li key={app.name}>
          <MemoizedAppItem app={app} />
          {showDivider && <hr className={Styles.divider} />}
        </li>
      )
    })
  return <ul className={Styles.searchList}>{renderAppItems()}</ul>
}
