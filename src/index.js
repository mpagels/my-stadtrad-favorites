import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import reportWebVitals from './reportWebVitals'
import GlobalStyles from './GlobalStyles'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { i18n } from '@lingui/core'
import { I18nProvider } from '@lingui/react'
import { messages as enMessages } from './locales/en/messages'
import { messages as deMessages } from './locales/de/messages'
import { getLocaleFromLocalStorage } from './services/localStorage'
import { ToggleContextProvider } from './contenxt/ToggleContenxt'

const queryClient = new QueryClient()

const locale = getLocaleFromLocalStorage()

i18n.load({
  en: enMessages,
  de: deMessages,
})

i18n.activate(locale)

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <ToggleContextProvider>
          <I18nProvider i18n={i18n}>
            <App />
          </I18nProvider>
        </ToggleContextProvider>
      </QueryClientProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
