import { css } from 'styled-components'

const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  resetList: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `,
  maxWidth: css`
    max-width: ${({ theme }) => theme.dimensions.maxWidth};
    width: 80%;
    margin: 0 auto;
  `,

  maxContentWidth: css`
    width: 90%;
    max-width: 50rem;
    margin: 0 auto;
  `,
  horizontalScroll: css`
    & {
      max-width: 100vw;
      width: 100%;
      overflow-x: auto;
      scroll-behavior: smooth;
      -ms-overflow-style: none; /* IE 11 */
      scrollbar-width: none; /* Firefox 64 */
    }
    &::-webkit-scrollbar {
      display: none;
    }
  `,

  centeredBg: css`
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  `,
  hideScrollbar: css`
    &::-webkit-scrollbar {
      width: 0; /* Remove scrollbar space */
      background: transparent; /* Optional: just make scrollbar invisible */
    }
    /* Optional: show position indicator in red */
    &::-webkit-scrollbar-thumb {
      background: transparent;
    }
  `,
  scrollbar: css`
    & {
      overflow-y: overlay;
      scrollbar-width: thin;
    }
    &::-webkit-scrollbar {
      width: 8px;
      margin-top: 0.5em;
      margin-bottom: 0.5em;
      height: 80%;
      border-radius: 40px;
    }
    &::-webkit-scrollbar-track {
      background: #eaeaea;
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: #c4c4c4;
      border-radius: 40px;
      background: transparent;
    }
    &:hover {
      &::-webkit-scrollbar-track {
        /* background: #eaeaea; */
      }
      &::-webkit-scrollbar-thumb {
        background: #c4c4c4;
        border-radius: 40px;
      }
    }
  `,
  lineClamp: (lineNo) => css`
    display: -webkit-box;
    -webkit-line-clamp: ${lineNo};
    -webkit-box-orient: vertical;
    overflow: hidden;
  `,
}

export default mixins
