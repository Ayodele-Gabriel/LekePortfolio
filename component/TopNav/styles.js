import Styled from 'styled-components'

export default Styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100vw;
    div.content--container {
      height: ${({ theme }) => theme.dimensions.navHeight};
      display: flex;
      justify-content: space-between;
      align-items: center;
      ${({ theme }) => theme.mixins.maxWidth};
      color: #FFFDFD;
      * {
        position: relative;
        z-index: 4;
      }
      div.col--1 {
        a {
          display: flex;
          align-items: center;
          height: 100%;
          grid-gap: 1em;
          svg {
            font-size: 3.5rem;
          }
          p {
            font-size: 1.2rem;
            font-weight: 500;
          }
        }
      }
      nav {
        display: flex;
        align-items: center;
        grid-gap: 1.5em;
        a, button {
          font-size: 1rem;
          border: none;
          cursor: pointer;
          background: transparent;
          &:focus, &:hover {
            text-decoration: underline;
          }
        }
        .withCircle {
          color: #FFFDFD;
          border: 1px solid #FFFFFF;
          border-radius: 500px 500px 500px 500px;
          padding: 1em;
        }
      }
    }
`
