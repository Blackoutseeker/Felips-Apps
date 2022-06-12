export const localizations = {
  'en-US': 'English (US)',
  'pt-BR': 'Português (Brasil)'
}

export const languages = Object.values(localizations)

export const locales = Object.keys(localizations)

export enum Framework {
  Flutter = 'Flutter',
  ReactNative = 'React Native'
}

export const apps = ['Lineker', 'Qr Coder', 'Mister', 'Bookep']

export const pages = ['home', ...apps]
