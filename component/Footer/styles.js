import Styled from 'styled-components'
import { maxQuery } from '../../helpers'
import { footerBg } from '/asset/png'

export default Styled.div`
      position: relative;
      padding: 4em 0px;
      &:after {
          content: "";
          top: 0px;
          width: 100vw;
          height: 100%;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1;
          background-image: url("/asset/png/footerBg.png");
          background-position: center center;
          background-size: 100vw;
      }
      * {
          position: relative;
          z-index: 2;
      }
      h1 {
          font-size: 2.5rem;
            ${maxQuery('sm')} {
                        font-size: 1.2rem;
                    }
          margin-bottom: 0.5em;
              background: linear-gradient(104.62deg, #12C2E9 8.83%, #C471ED 55.36%, #F64F59 109.3%),
          linear-gradient(0deg, #FFFDFD, #FFFDFD);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      }
      p {
          border-bottom: 1px solid #FFFFFF;
          max-width: 20rem;
          font-size: 1.3rem;
          padding: 0.5em 0px;
          color: #FFFDFD;
          a {
              display: flex;
              grid-gap: 0.5em;
              &:hover, &:focus {
                text-decoration: underline;
              }
              .icon {
                  font-size: 0.8rem;
              }
          }
          &:first-of-type {
              border-top: 1px solid #FFFFFF;
          }
      }
`
