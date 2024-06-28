export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      LINKEDIN_PROFILE_URL: string
      GOOGLE_PLAY_PROFILE_URL: string
      GITHUB_PROFILE_URL: string

      AD_EXCHANGE: string
      PUBLISHER_ID: string
      RELATIONSHIP_TYPE: string
      CERTIFICATION_AUTHORITY: string

      GOOGLE_AD_SENSE_ID: string
    }
  }
}
