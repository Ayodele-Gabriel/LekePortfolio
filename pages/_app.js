import { ThemeProvider } from 'styled-components'
import { IconContext } from 'react-icons'
import { TopNav, Footer } from '../component'
import { GlobalStyle, theme } from '../StyleComponents'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <IconContext.Provider value={{ className: 'icon' }}>
          <GlobalStyle />
          <TopNav />
          <main className="page--container">
            <Component {...pageProps} />
            <Footer />
          </main>
        </IconContext.Provider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
