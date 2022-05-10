import { FC, useState, useRef, ChangeEvent } from 'react'
import type { App } from '@models/index'
import { useRouter } from 'next/router'
import { getStaticTranslationForUserLocale } from '@services/pageTranslation'
import { FaSearch, FaTimes, FaArrowLeft } from 'react-icons/fa'
import { SearchList } from '@components/index'
import Styles from './SearchBar.module.css'

interface SearchBarProps {
  apps: App[]
}

export const SearchBar: FC<SearchBarProps> = ({ apps }) => {
  const { locale } = useRouter()
  const staticTranslation = getStaticTranslationForUserLocale(locale)
  const {
    page: {
      body: { titles, searchInputPlaceholder }
    }
  } = staticTranslation

  const [searchText, setSearchText] = useState<string>('')
  const [isSearching, setIsSearching] = useState<boolean>(false)

  const desktopInputRef = useRef<HTMLInputElement>(null)
  const mobileInputRef = useRef<HTMLInputElement>(null)

  const handleSearchTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }

  const setFocusOnSearchInput = () => {
    desktopInputRef.current?.focus()
    mobileInputRef.current?.focus()
  }

  const clearSearchInput = () => {
    setSearchText('')
    setFocusOnSearchInput()
  }

  const handleSearchingToggle = () => {
    setIsSearching(!isSearching)
    clearSearchInput()
  }

  const filterAppBySearchText = (app: App): boolean => {
    const appName = app.name.toLowerCase()
    const search = searchText.toLowerCase()
    return appName.includes(search)
  }

  const filteredApps = apps.filter(filterAppBySearchText)

  const showSearchList: boolean =
    searchText.length > 0 &&
    filteredApps.length > 0 &&
    (desktopInputRef.current === document.activeElement ||
      mobileInputRef.current === document.activeElement)

  return (
    <>
      <div className={Styles.searchWrapper}>
        <div className={Styles.searchBarContainer}>
          <FaSearch className={Styles.icon} size={15} />
          <input
            className={Styles.searchInput}
            placeholder={searchInputPlaceholder}
            value={searchText}
            onChange={handleSearchTextChange}
            ref={desktopInputRef}
          />
          <button
            className={Styles.clearButton}
            onClick={clearSearchInput}
            title={titles.clearSearchInput}
          >
            <FaTimes className={Styles.icon} size={15} />
          </button>
        </div>
        {showSearchList && <SearchList apps={filteredApps} />}
      </div>
      {!isSearching ? (
        <button
          onClick={handleSearchingToggle}
          className={Styles.openSearchButton}
        >
          <FaSearch color="#fff" size={20} />
        </button>
      ) : (
        <header className={Styles.searchHeader}>
          <button onClick={handleSearchingToggle}>
            <FaArrowLeft className={Styles.icon} size={20} />
          </button>
          <input
            className={Styles.searchHeaderInput}
            placeholder={searchInputPlaceholder}
            value={searchText}
            onChange={handleSearchTextChange}
            ref={mobileInputRef}
          />
          <button onClick={clearSearchInput}>
            <FaTimes className={Styles.icon} size={20} />
          </button>
          {showSearchList && <SearchList apps={filteredApps} />}
        </header>
      )}
    </>
  )
}
