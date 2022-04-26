type StaticTranslation = {
  page: {
    head: {
      description: string
      keywords: string[]
    }
    body: {
      searchInputPlaceholder: string
      titles: {
        goToHomePage: string
        clearSearchInput: string
        linkedInProfile: string
        googlePlayStoreProfile: string
        gitHubProfile: string
        viewSourceCode: string
        sendEmail: string
        donations: {
          payPal: string
          buyMeACoffee: string
        }
      }
    }
  }
}

export default StaticTranslation
