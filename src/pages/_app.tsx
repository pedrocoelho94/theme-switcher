import '../styles/global.ts'
import type { AppProps } from 'next/app'
import GlobalStyles from '../styles/global'
import { DefaultTheme, ThemeProvider } from 'styled-components'

import light from '../styles/themes/light'
import dark from '../styles/themes/dark'
import Header from '../components/Header'
import usePersistedState from '../utils/usePersistedState'
import ClientOnly from '../components/ClientOnly'

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ClientOnly>
        <Header toggleTheme={toggleTheme} />
      </ClientOnly>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
