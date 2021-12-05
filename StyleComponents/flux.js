import Styled from 'styled-components'
import { footerBg } from '../asset/png'
import { minQuery, minMaxQuery, maxQuery } from '../helpers'

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
    p {
        color: #FFFDFD;
        font-size: 1rem;
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
            font-size: 2rem;
            margin-bottom: 1.5em;
        }
        div.row {
            display: grid;
            grid-gap: 2em;
            ${minQuery('lg')} {
                grid-template-columns: 1fr 1fr;
                grid-gap: 1em;
                justify-content: space-between;
            }
            p {
                color: rgba(255, 253, 253, 0.51);
                font-size: 1.1rem;
            }
             h2 {
                    margin-bottom: 1.5em;
                }
            header {
                position: relative;
                img {
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    height: 10rem;
                    width: 160rem;
                }
                p {
                    color: rgba(255, 253, 253, 0.51);
                    font-size: 1rem;
                    margin-bottom: 1em;
                }
                h2 {
                    color: #FFFDFD;
                    font-size: 2rem;
                    font-weight: 600;
                }
            }
            div.col-1 {
                background: linear-gradient(165.74deg, #1F3C46 77.59%, #090F11 95.08%);
                border-radius: 20px;
                padding: 3em;
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
                div.semi-row {
                    display: grid;
                    grid-row: 1fr 1fr;
                    grid-gap: 1em;
                    div.semi-1 {
                        background: linear-gradient(165.74deg, #090F11 6.88%, #1F3C46 95.08%);
                        border-radius: 20px;
                        padding 3em;
                        div.bottom-container {
                            margin-top: 2em;
                            div.item-row {

                            }
                        }
                        div.item-row {
                            display: grid;
                            grid-template-columns: 1fr 1fr;
                            grid-gap: 0.5em;
                            max-width: 25rem;
                            margin-top: 1.5em;
                            div.item {
                                display: flex;
                                align-items: center;
                                position: relative;
                                padding: 1em;
                                padding-bottom: 0px;
                                height: 3.5em;
                                border-radius: 10px;
                                &:after {
                                    content: "";
                                    position: absolute;
                                    background: #070D10;
                                    opacity: 0.2;
                                    height: 100%;
                                    width: 100%;
                                    left: 0px;
                                }
                                grid-gap: 1.5em;
                            }
                        }
                    }
                    div.semi-2 {
                        background: linear-gradient(165.74deg, #090F11 6.88%, #1F3C46 95.08%);
                        border-radius: 20px;
                        padding 3em;

                    }
                }
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
    
    section.section-insight {
        padding: 5em 0px;
        h1 {
            max-width: 40rem;
            font-size: 2.3rem;
        }
        div.row {
            display: grid;
            margin-top: 3em;
            grid-gap: 1em;
            ${minQuery('lg')} {
                grid-template-columns: 1fr 25rem;
            }
            div.col-1 {
                background: linear-gradient(165.74deg, #090F11 6.88%, #1F3C46 95.08%);
                border-radius: 20px;
                padding: 2.5em;
                h1 {
                    color: #FFFDFD;
                    font-weight: 600;
                    font-size: 2rem;
                    line-height: 120%;
                }
                div.item-row {
                    display: flex;
                    flex-direction: column;
                    ${minQuery('lg')} {
                        align-items: center;
                        padding-right: 3em;
                        flex-direction: row;
                    }
                    div.pie-container {
                        width: 15rem;
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                        ${minMaxQuery('md', '<lg')} {
                            transform: translateX(50%);
                        }
                        ${maxQuery('md')} {
                            width: 20rem;
                            overflow: hidden;
                        }
                        svg {
                            font-size: 25rem;
                            flex-basis: 25rem;
                            flex-shrink: 0;
                            transform: scale(1.3) translateX(-0.1em);
                        }
                    }
                    p {
                        color: #FFFDFD;
                        ${minQuery('lg')} {
                            padding-left: 5em;
                        }
                        line-height: 115%;
                        font-size: 1rem;
                    }
                }
            }
            div.col-2 {
                background: linear-gradient(165.74deg, #1F3C46 33.03%, #090F11 95.08%);
                border-radius: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 2.5em;
                padding-bottom: 0px;
                img {
                    /* width: 20rem!important; */
                    /* transform: scale(2); */
                }
            }
        }
    }

    section.section-create {
        display: grid;
        grid-gap: 1.5em;
        ${minQuery('lg')} {
            grid-template-columns: 1fr 1fr;
        }
        h2 {
            font-size: 2rem;
            max-width: 20rem;
            color: #FFFDFD;
            font-weight: 600;
            margin-bottom: 0.5em;
        }
        p {
            color: #FFFDFD;
            font-size: 1.1rem;
            line-height: 120%;
        }
        div.img-cover {
            margin-top: 2.5em;
            background: linear-gradient(165.74deg, #090F11 6.88%, #1F3C46 95.08%);
            border-radius: 20px;
            padding: 3em 4em;
            svg {
                font-size: 3rem;
            }
            p {
                color: #FFFDFD;
                margin-bottom: 3em;
                line-height: 120%;
                opacity: 0.7;
                max-width: 25rem;
            }
            h3 {
                color: #FFFDFD;
                font-size: 1.3rem;
                margin: 2em 0px;
                margin-bottom: 1em;
            }
            div.img-container {
                display: flex;
                justify-content: center;
                img {
                    margin: 0 auto;
                    justify-self: center;
                }
            }
            &:nth-child(2) {
                background: linear-gradient(165.74deg, #1F3C46 27.94%, #090F11 95.08%);
                border-radius: 20px;
            }
        }
    }

    section.section-question {
        padding: 5em 0px;
        svg {
            font-size: 4rem;
        }
        h1 {
            color: #FFFDFD;
            font-weight: normal;
            font-size: 2.4rem;
            max-width: 45rem;
        }
        p {
            color: #FFFDFD;
            margin-top: 0.5em;
            font-size: 1.2rem;
            opacity: 0.5;
            font-weight: 600;
        }
    }

    section.section-refresh {
        background: linear-gradient(165.74deg, #1F3C46 27.94%, #090F11 95.08%);
        border-radius: 20px;
        padding: 3em 4em;
        padding-bottom: 0px;
        h2 {
            font-size: 2.5rem;
            color: #FFFDFD;
            font-weight: 600;
            margin-bottom: 0.5em;
        }
        h2, p {
            max-width: 40rem;
        }
        p {
            color: #FFFDFD;
            margin-bottom: 2.5em;
            font-size: 1rem;
        }
    }

    section.section-exciting {
        margin-top: 1.5em;
        background: linear-gradient(113.56deg, #12C2E9 -15.3%, #C471ED 60.11%, #F64F59 98.78%);
        border-radius: 20px;
        padding: 4em 4em;
        padding-bottom: 0px;
        /* transform: matrix(1, 0, 0, -1, 0, 0); */
        div.row {
            display: grid;
            grid-gap: 1.5em;
            ${minQuery('lg')} {
                grid-template-columns: 1fr 1fr;
                align-items: center;
            }
            div.col-1 {
                h1 {
                    font-size: 2.5rem;
                    max-width: 20rem;
                    color: #FFFDFD;
                }
            }
            div.col-2 {
                p {
                    color: #FFFDFD;
                    margin-bottom: 2em;
                    max-width: 25rem;
                }
                a {
                    display: flex;
                    align-items: center;
                    color: #FFFDFD;
                    grid-gap: 0.5em;
                    width: fit-content;
                    &:hover, &:focus {
                        text-transform: underline;
                    }
                }
            }
        }
        div.img-container {
            background: blue;
            display: flex;
            justify-content: center;
            img {
                width: 381.09px!important;
                height: 613.18px;
                background: pink;
            }
        }
    }

    section.section-impact {
        padding: 3.5em 0px;
        padding-bottom: 4em;
        h1 {
            font-size: 2.5rem;
        }
        div.impact-lists {
            display: grid;
            margin-top: 2em;
            grid-gap: 1.5em;
            ${minQuery('lg')} {
                grid-template-columns: 1fr 1fr;
            }
            div.impact-item {
                display: flex;
                grid-gap: 1em;
                align-items: center;
                svg {
                    font-size: 5rem;
                }
                h1 {
                    font-size: 1.8rem;
                    font-size: 600;
                    color: #FFFDFD;
                    margin-bottom: 0.25em;
                }
                p {
                    color: #FFFDFD;
                    font-size: 1rem;
                    opacity: 0.7;
                    max-width: 25rem;
                }
            }
        }
    }
`
