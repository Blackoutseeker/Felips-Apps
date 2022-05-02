import { FC, useState, useRef, ChangeEvent } from 'react'
import { useRouter } from 'next/router'
import { getStaticTranslationForUserLocale } from '@services/pageTranslation'
import { FaSearch, FaTimes, FaArrowLeft } from 'react-icons/fa'
import Styles from './SearchBar.module.css'

export const SearchBar: FC = () => {
  const { locale } = useRouter()
  const staticTranslation = getStaticTranslationForUserLocale(locale)
  const {
    page: {
      body: { titles, searchInputPlaceholder }
    }
  } = staticTranslation

  const [searchText, setSearchText] = useState<string>('')
  const [isSearching, setIsSearching] = useState<boolean>(false)

  const searchInputRef = useRef<HTMLInputElement>(null)

  const handleSearchTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value)
  }

  const setFocusOnSearchInput = () => {
    searchInputRef.current?.focus()
  }

  const clearSearchInput = () => {
    setSearchText('')
    setFocusOnSearchInput()
  }

  const handleSearchingToggle = () => {
    setIsSearching(!isSearching)
    clearSearchInput()
  }

  return (
    <>
      <div className={Styles.searchBarContainer}>
        <FaSearch className={Styles.icon} size={15} />
        <input
          className={Styles.searchInput}
          placeholder={searchInputPlaceholder}
          value={searchText}
          onChange={handleSearchTextChange}
          ref={searchInputRef}
        />
        <button
          className={Styles.clearButton}
          onClick={clearSearchInput}
          title={titles.clearSearchInput}
        >
          <FaTimes className={Styles.icon} size={15} />
        </button>
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
            ref={searchInputRef}
          />
          <button onClick={clearSearchInput}>
            <FaTimes className={Styles.icon} size={20} />
          </button>
        </header>
      )}
    </>
  )
}
