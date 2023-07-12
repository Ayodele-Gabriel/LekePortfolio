import Styled from "styled-components";
import { minQuery, maxQuery } from "../helpers";

export default Styled.div`
    a {
        cursor: pointer;
    }
    ol.details {
        margin: 0px;
        padding: 0px;
        list-style: none;
        margin-top: 1.5em;
        margin-bottom: 1em;
        border-top: 1px solid #FFFFFF;
        li {
            border-bottom: 1px solid #fff;
            padding: 0.6em 0px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #FFFDFD;
            font-size: 1rem;
            span {
                max-width: 45%;
                line-height: 150%;
                &:last-of-type {
                    text-align: right;
                }
            }
        }
        & +  a {
                color: #FFFDFD;
                display: flex;
                align-items: center;
                grid-gap: 0.25em;
        }
    }
    section.jumbotron--item {
        position: relative;
        div.animation--container {
            position: absolute;
            top: -${({ theme }) => theme.dimensions.navHeight};
            width: 100vw;
            height: ${({ theme }) =>
              `calc(100% + ${theme.dimensions.navHeight})`};
            z-index: -1;
            left: 50%;
            transform: translateX(-50%);
        }
        padding: 5em 0px;
        padding-bottom: 9em;
        ${({ theme }) => theme.mixins.maxContentWidth};
        h1 {
            font-size: 4.3rem;
            font-weight: 700;
            line-height: 98.6%;
            margin-bottom: 0.5em;
            color: #FFFDFD;
            ${maxQuery("sm")} {
                font-size: 2rem;
            }
        }
    }
    div.content {
        display: grid;
        grid-gap: 3.5em;
        position: relative;
        &:after {
            content: "";
            position: absolute;
            height: 100%;
            width: 100vw;
            top: 0px;
            left: 50%;
            transform: translateX(-50%);
            z-index: -1;
            background: linear-gradient(180deg, #0F2027 0%, #000000 0.01%, #1F3C46 100%);
        }
    }
    section.section--about {
        padding: 8em 0px;
        ${({ theme }) => theme.mixins.maxContentWidth};
        h3 {
            color: #FFFDFD;
            line-height: 125%;
            font-size: 1.4rem;
            font-weight: 400;
            margin-bottom: 1em;
            span {
                font-size: 0.8rem;
            }
            & + a {
                background: linear-gradient(104.62deg, #12C2E9 8.83%, #C471ED 55.36%, #F64F59 109.3%),
                linear-gradient(0deg, #FFFDFD, #FFFDFD);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                .icon {
                     background: linear-gradient(104.62deg, #12C2E9 8.83%, #C471ED 55.36%, #F64F59 109.3%),
                    linear-gradient(0deg, #FFFDFD, #FFFDFD);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                }
            }
        }
    }
    section.userDetails--container {
        div.item--row {
            display: grid;
            grid-gap: 1em;
            ${minQuery("lg")} {
                grid-template-columns: 30rem 1fr;
            }
            div.col--1 {
                ${maxQuery("lg")} {
                    order: 2;
                }
                img {
                    position: relative;
                    z-index: 1;
                }
            }
            div.col--2 {
                ${maxQuery("lg")} {
                    order: 1;
                }
                padding: 4em;
                background: linear-gradient(165.74deg, #090F11 6.88%, #1F3C46 95.08%);
                border-radius: 20px;
                h1 {
                    font-weight: 600;
                    font-size: 2.8rem;
                    line-height: 98.6%;
                    color: #FFFDFD;
                    margin-bottom: 1.5em;
                    ${maxQuery("sm")} {
                        font-size: 1.5rem;
                    }
                }
                a {
                    display: flex;
                    margin-top: 2em;
                    align-items: center;
                    grid-gap: 0.5em;
                    font-size: 1.2rem;
                    &:hover, &:focus {
                        text-decoration: underline;
                    }
                }
            }
        }
        &:last-of-type {
            padding-bottom: 4em;
            div.item--row {
            ${minQuery("lg")} {
                grid-template-columns: 1fr 30rem;
            }
            div.col--1 {
                order: 2;
            }
            }
        }
    }

    .section-payso {
        div.item--row {
            ${minQuery("lg")} {
                grid-template-columns: 1fr 30rem!important;
            }
        }
    }
`;
