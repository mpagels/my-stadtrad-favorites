export function getLocaleFromLocalStorage() {
  return localStorage.getItem('stadtrad-locale') || 'de'
}
export function setLocaleInLocalStorage(locale) {
  localStorage.setItem('stadtrad-locale', locale)
}
