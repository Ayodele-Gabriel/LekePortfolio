import Styled from 'styled-components'
import { footerBg } from '../asset/png'
import { minQuery, maxQuery } from '../helpers'

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
        ${maxQuery('<lg')} {
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
        padding-bottom: 4em;
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
            max-width: 40rem;
            ${maxQuery('<lg')} {
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
            & + button {
                background: transparent;
                border: none;
            }
        }
        div.item-row {
            display: grid;
            grid-gap: 4em;
            ${minQuery('lg')} {
                grid-template-columns: 1fr 0.5fr;
                grid-gap: 8em;
                align-items: flex-start;
            }
            button {
                display: flex;
                font-size: 1rem!important;
                cursor: pointer;
                padding: 0px;
                grid-gap: 1em;
                align-items: center;
                svg {
                    font-size: 1.5rem;
                }
            }
            ol.details {
                margin-top: 0px;
            }
        }
    }
    section.problem-statement {
        margin-top: 3em;
        h1 {
            font-size: 1.6rem;
            margin-bottom: 1.5em;
        }
        div.row {
            display: grid;
            background: linear-gradient(165.74deg, #090F11 6.88%, #1F3C46 95.08%);
            border-radius: 20px;
            padding: 3em;
            grid-gap: 3em;
            ${minQuery('lg')} {
                grid-template-columns: 1fr 1fr;
                grid-gap: 10em;
                justify-content: space-between;
            }
            div.col-1 {
                ${maxQuery('lg')} {
                    order: 2;
                }
                p {
                    color: rgba(255, 253, 253, 0.51);
                    font-size: 1.1rem;
                }
                ol {
                    margin: 0px;
                    margin-top: 2em;
                    display: grid;
                    grid-gap: 0.5em;
                    padding: 0px;
                    list-style: none;
                    li {
                        position: relative;
                        border-radius: 10px;
                        padding: 1.5em;
                        padding-left: 2.5em;
                        &:before {
                            content: "";
                            width: 0.6rem;
                            top: 50%;
                            left: 1em;
                            transform: translateY(-50%);
                            height: 0.6rem;
                            position: absolute;
                            border-radius: 50%;
                            background: linear-gradient(104.62deg, #12C2E9 8.83%, #C471ED 55.36%, #F64F59 109.3%);
                        }
                        &:after {
                            content: "";
                            width: 100%;
                            top: 0px;
                            left: 0px;
                            position: absolute;
                            background: #070D10;
                            opacity: 0.2;
                            height: 100%;
                            border-radius: 10px;
                        }
                        color: #FFFDFD;
                    }
                }
            }
            div.col-2 {
                color: #FFFDFD;
                svg {
                    display: block;
                    font-size: 1.5rem;
                    margin-bottom: 1em;
                    margin-top: 1em;
                }
                div.content-item {
                    display: flex;
                    align-items: center;
                    grid-gap: 1em;
                    max-width: 25rem;
                    span {
                        font-size: 2rem;
                        font-weight: 500;
                    }
                    &:not(:last-of-type) {
                        margin-bottom: 1.5em;
                    }
                }
            }
        }
    }
    section.solution-cover {
        padding: 2em 0px;
        h1 {
            font-size: 1.3rem;
            margin-top: 3em;
        }
        img {
            width: 10rem;
        }
        div.row {
            display: grid;
            grid-gap: 1.5em;
            background: linear-gradient(165.74deg, #090F11 6.88%, #1F3C46 95.08%);
            border-radius: 20px;
            padding: 3em;
            ${minQuery('lg')} {
                margin-top: 3em;
                align-items: center;
                grid-template-columns: 1fr 1fr;
                grid-gap: 0px;
            }
            div.col-1 {
                display: flex;
                justify-content: center;
            }
            h2 {
                font-size: 1.3rem;
                color: #FFFDFD;
                margin-bottom: 0.5em;
            }
            p {
                color: #FFFDFD;
                opacity: 0.5;
                font-size: 1rem;
                margin-bottom: 2.5em;
                max-width: 30rem;
                line-height: 120%;
            }
        }
    }
    section.double-cover {
        display: grid;
        grid-gap: 1em;
        ${minQuery('lg')} {
            grid-template-columns: 0.8fr 1fr;
        }
        div.col {
            background: linear-gradient(165.74deg, #090F11 6.88%, #1F3C46 95.08%);
            border-radius: 20px;
            padding: 3em;
            h3 {
                color: #FFFDFD;
                font-size: 1.6rem;
                margin-bottom: 1.5em;
                font-weight: 600;
            }
            p, ol {
                color: #FFFDFD;
                opacity: 0.5;
                font-size: 1rem;
            }
            ol {
                margin: 0px;
                padding: 0px;
                list-style: none;
                li {
                    &:not(:last-of-type) {
                        margin-bottom: 2em;
                    }
                    position: relative;
                    padding-left: 1.1em;
                    &:before {
                        content: "";
                        width: 0.6rem;
                        position: absolute;
                        border-radius: 50%;
                        height: 0.6rem;
                        left: 0em;
                        top: 20%;
                        transform: translateY(-50%);
                        background: linear-gradient(104.62deg, #12C2E9 8.83%, #C471ED 55.36%, #F64F59 109.3%);
                    }
                }
            }
            &.col-2 {
                h3 {
                    font-size: 2.5rem;
                    font-weight: 600;
                    max-width: 24rem;
                }
            }
            div.semi-row {
                display: grid;
                grid-gap: 1.5em;
                margin-top: -1.5em;
                ${minQuery('lg')} {
                    grid-template-columns: 1fr 1fr;
                }
            }
        } 
    }
    section.section-sample {
        display: grid;
        background: pink;
        align-items: center;
        padding: 2em;
        margin-top: 1.5em;
        grid-gap: 1.5em;
        background: linear-gradient(165.74deg, #1F3C46 6.88%, #090F11 84.22%);
        border-radius: 20px;
        ${minQuery('lg')} {
            grid-template-columns: 1.5fr 1fr;
            grid-gap: 3em;

        }
        div.col {
            h2 {
                font-weight: 600;
                color: #FFFDFD;
                max-width: 20rem;
            }
            ol {
                margin: 0px;
                padding: 0px;
                color: #FFFDFD;
                list-style: none;
                display: grid;
                grid-gap: 1.5em;
                font-size: 1rem;
                margin-top: 2em;
                li {
                    position: relative;
                    padding-left: 1.5em;
                    &:before {
                        content: "";
                        position: absolute;
                        width: 0.5rem;
                        height: 0.5rem;
                        top: 50%;
                        left: 0em;
                        transform: translateY(-50%);
                        border-radius: 50%;
                        background: linear-gradient(104.62deg, #12C2E9 8.83%, #C471ED 55.36%, #F64F59 109.3%);
                    }
                }
            }
        }
    }
    section.section-rework {
        display: grid;
        margin-top: 1.5em;
        ${minQuery('lg')} {
            grid-template-columns: 1fr 1fr;
        }
        div.col-1 {
            background: linear-gradient(165.74deg, #1F3C46 77.59%, #090F11 95.08%);
            border-radius: 20px;
            padding: 3em;
            ${minQuery('lg')} {
                * {
                    max-width: 30rem;
                }
            }
            h1 {    
                color: #FFFDFD;
                font-weight: 600;
                font-size: 2.2rem;
                max-width: 15rem;
                margin-bottom: 0.5em;
            }
            p {
                color: rgba(255, 253, 253, 0.51);
                font-size: 1rem;
                line-height: 140%;
                &:first-of-type {
                    max-width: 20rem;
                }
            }
            ol {
                margin: 2em 0px;
                padding: 0px;
                display: grid;
                grid-gap: 1.5em;
                list-style: none;
                li {
                    color: #FFFDFD;
                    position: relative;
                    padding-left: 2em;
                    &:before {
                        content: "";
                        position: absolute;
                        width: 0.5rem;
                        height: 0.5rem;
                        border-radius: 50%;
                        left: 0px;
                        top: 10%;
                        background: linear-gradient(104.62deg, #12C2E9 8.83%, #C471ED 55.36%, #F64F59 109.3%);
                    }
                }
            }
        }
        div.col-2 {
            ${maxQuery('<lg')} {
                display: flex;
                justify-content: center;
            }
        }
    }
    section.section-monkey {
        margin-top: 3em;
        a {
            background: transparent;
            border: none;
            display: flex;
            align-items: center;
            margin: 2em 0px;
            font-size: 0.9rem;
            cursor: pointer;
            svg {
                margin-left: 0.5em;
                margin-bottom: 0.1em;
            }
        }
    }
    section.section-lession {
        padding: 3em 0px;
        padding-bottom: 5em;
        h1 {
            font-size: 1.5rem;
        }
        div.list-container {
            display: flex;
            flex-direction: column;
            grid-gap: 1.5em;
            justify-content: space-between;
            max-width: 55rem;
            margin: 0 auto;
            margin-top: 3em;
            ${minQuery('lg')} {
                flex-direction: row;
            }
        }
        div.list-item {
            display: flex;
            align-items: center;
            grid-gap: 1.5em;
            color: #FFFDFD;
            font-size: 1.01rem;
            max-width: 25rem;
            svg {
                font-size: 4rem;
                flex-shrink: 0;
            }
        }
    }
`
