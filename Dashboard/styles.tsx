import Styled from "styled-components";

export const dashboardContainerStyle = Styled.div``;

export default Styled.div`
    ${({ theme }) => theme.mixins.maxWidth};
    position: relative;
    height: 100vh;
 
`;

export const DashboardTopStyle = Styled.div`
    display: grid;
    position: fixed;
    background: ${({ theme }) => theme.colors.bgColor};
    ${({ theme }) => theme.mixins.maxWidth};
    grid-template-columns: auto 1fr auto;
    justify-content: space-between;
    grid-gap: 1em;
    align-items: center;
    padding-bottom: 1em;
    z-index: 3;
    height: ${({ theme }) => theme.dimensions.navHeight};
    a.app-logo {
      padding-left: 1em;
      svg {
        font-size: 10rem;
      }
    }

    div.middle-container {
      display: flex;
      justify-content: center;

      div.workspace-container {
        background: #2b2b2d 0% 0% no-repeat padding-box;
        box-shadow: inset 0px 0px 1px #00000029, 0px 10px 12px #00000029;
        border-radius: 44px;
        display: flex;
        padding: 0.7em;
        padding-right: 1.5em;
        grid-gap: 1em;
        align-items: center;
        position: relative;
        cursor: pointer;
        user-select: none;


        div.dropdown-lists {
          position: absolute;
          background: #111111;
          /* z-index: 999; */
          box-shadow: 0px 10px 20px #0000003D;
          width: 18rem;
          top: 8em; 
          left: 50%;
          transform: translate(-50%);
          opacity: 0;
          border-radius: 10px;
          pointer-events: none;
          transition: all 0.8s;
          &:before {
            content: "";
            width: 10px;
            display: block;
            height: 10px;
            background: #111111;
            position: absolute;
            left: 50%;
            transform: rotate(45deg) translateX(-50%);
          }
          &:after {
            content: "";
            width: 200vw;
            height: 200vh;
            transform: translate(-50%, -50%);
            position: fixed;
            top: 0px;
            left: 0px;
            
          }

          button {
            display: flex;
            align-items: center;
            justify-content: space-between;
            background: transparent;
            width: 100%;
            cursor: pointer;
            position: relative;
            z-index: 999;
            padding: 1em 0.5em;
            padding-left: 1.5em;
            box-shadow: none;
            border: none;
            color: #D8D8D8;
            &:not(:last-of-type) {
              border-bottom: 1px solid #18181A
            }
            span {
              display: flex;
              align-items: center;
              grid-gap: 1em;
              font-size: 1rem;
              svg {
                font-size: 1rem;
              }
            }
            &:last-of-type {
              color: #C12020;
              svg {
              }
            }
          }

          &.active-dropdown_lists {
            opacity: 1;
            pointer-events: auto;
            top: 5em; 
          }
        }

        div.initials-container {
          background-color: #ba5f3d;
          border: 6px solid #18181a;
          border-radius: 50%;
          height: 2.5rem;
          width: 2.5rem;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.9rem;
        }
        p {
          font-weight: 500;
          font-size: 1.1rem;
        }
        svg {
          font-size: 2rem;
        }
        &.active-workspace {
          button.chevon-btn {
            svg {
              transform: rotate(180deg)
            }
          }
        }
      }
    }

    button.add-btn {
      display: flex;
      align-items: center;
      grid-gap: 0.5em;
      .icon {
        stroke-width: 10px;
      }
    }
`;

export const MainDashboardContainer = Styled.main`
    ${({ theme }) => theme.mixins.maxWidth};
    position: fixed;
    z-index: 1;
    top: ${({ theme }) => theme.dimensions.navHeight};
    aside {
      padding-top: 1.5em;
      position: fixed;
      z-index: 99;
      padding-right: 3em;
      transform: translateZ(0);
      background: ${({ theme }) => theme.colors.bgColor};
      width: ${({ theme }) => theme.dimensions.navWidth};
      a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #d8d8d899;
        font-weight: 500;
        text-decoration: none;
        margin-bottom: 1.5em;
        font-size: 1.2rem;
        position: relative;
        padding-left: 0.8em;
        div.badge-item {
          background: #1f1f21 0% 0% no-repeat padding-box;
          box-shadow: inset 0px 0px 1px #00000029;
          border-radius: 10px;
          font-size: 0.8rem;
          font-weight: 400;
          height: 2rem;
          padding: 0px;
          width: 2rem;
          color: #d8d8d899 !important;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        &:hover,
        &:focus,
        &.active {
          color: #fff;
          outline: none;
          &:before {
            content: '';
            position: absolute;
            width: 0.4rem;
            height: 0.4rem;
            left: 0px;
            top: 50%;
            transform: translateY(-50%);
            background: ${({ theme }) => theme.colors.primary};
            border-radius: 50%;
          }
        }
      }
    }

    div.dashboard-content {
        padding-left: ${({ theme }) =>
          `calc(${theme.dimensions.navWidth} + 2em)`};
      header.dashboard-header {
        display: flex;
        position: fixed;
        background: ${({ theme }) => theme.colors.bgColor};
        ${({ theme }) => theme.mixins.maxWidth};
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
        justify-content: space-between;
        align-items: center;
        padding: 1em 3em;
        padding-right: 2em;
        padding-left: ${({ theme }) =>
          `calc(${theme.dimensions.navWidth} + 2em)`};
        border-bottom: 1px solid #111111;
        h1 {
          font-size: 1.4rem;
          color: #d8d8d8;
          font-weight: 500;
        }
      }
      div.dashboard-content_cover {
        flex: 1;
        min-height: 100vh;
        padding-right: 2em;
        padding-top: ${({ theme }) =>
          `calc(${theme.dimensions.navHeight} + 6rem)`};
          div.dashboard-content-container {
            padding-bottom: 3em;
          }
      }
    }
`;
