import { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import { maxQuery } from '../helpers'

const GlobalStyle = createGlobalStyle`
  ${normalize};
    * {
        box-sizing: border-box;
    }
    body, html {
        font-family: 'Lato', sans-serif;
        font-family: 'Space Grotesk', sans-serif;
        ${maxQuery('<lg')} {
          font-size: 95%;
        }
    }
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    h1, h2, h3, h4, p {
    margin: 0px;
    padding: 0px;
    }
    img {
      max-width: 100%;
      max-height: 100%;
    }
    main.page--container {
        width: 90%;
        padding-top: ${({ theme }) => theme.dimensions.navHeight};
        max-width: ${({ theme }) => theme.dimensions.maxWidth};
        margin: 0 auto;
      }
`
export default GlobalStyle
