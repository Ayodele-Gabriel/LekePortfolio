import Styled from "styled-components";
import { footerBg } from "../asset/png";
import { minQuery, maxQuery } from "../helpers";

export default Styled.div`
    a {
        cursor: pointer;
    }
    position: relative;
    &:after {
        content: "";
        position: absolute;
        width: 100vw;
        top: -${({ theme }) => theme.dimensions.navHeight};
        height: ${({ theme }) => `calc(100% + ${theme.dimensions.navHeight})`};
        left: 50%;
        transform: translateX(-50%);
        z-index: -1;
        background: linear-gradient(180deg, #0F2027 0%, #000000 0.01%, #1F3C46 100%);
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
    h3.about {
        color: #FFFDFD;
        line-height: 125%;
        font-size: 1.4rem;
        ${maxQuery("<lg")} {
            font-size: 1.2rem;
        }
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
    section.jumbotron--item {
        padding-top: 4rem;
        ${({ theme }) => theme.mixins.maxContentWidth};
        h1 {
            font-size: 4.3rem;
            font-weight: 700;
            line-height: 98.6%;
            color: #FFFDFD;
            margin-bottom: 0.5em;
            background: linear-gradient(104.62deg, #12C2E9 8.83%, #C471ED 55.36%, #F64F59 109.3%),
            linear-gradient(0deg, #FFFDFD, #FFFDFD);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            ${maxQuery("<lg")} {
                font-size: 2.5rem;
            }
        }
        hr {
            margin-bottom: 2em;
            background: #fff;
        }
        h3.about {
            opacity: 0.5;
            margin-bottom: 1.5em;
        }
    }
    section.list--cover {
        ${({ theme }) => theme.mixins.maxContentWidth};
        padding-bottom: 8em;
        h1 {
            font-size: 2rem; 
            margin-bottom: 0em; 
            background: linear-gradient(104.62deg, #12C2E9 8.83%, #C471ED 55.36%, #F64F59 109.3%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        div.list--item {
            border-bottom: 1px solid #fff;
            padding: 2em 0px;
            div.top--row {
                display: grid;
                grid-gap: 1em;
                color: #ffff;
                font-weight: 600;
                margin-bottom: 0.8em;
                font-size: 1.2rem;
                ${minQuery("md")} {
                    grid-template-columns: auto auto;
                    justify-content: space-between;
                }
            }
            p.detail {
                color: #FFFDFD;
                opacity: 0.5;
                line-height: 150%;
                ${minQuery("md")} {
                    width: 80%;
                    max-width: 45rem;
                }
            }
        }
    }
`;
