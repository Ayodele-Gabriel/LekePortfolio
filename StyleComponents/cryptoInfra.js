import Styled from "styled-components";
import { minQuery, maxQuery } from "../helpers";

export default Styled.div`
    a {
        cursor: pointer;
    }
    position: relative;
    .subtitle {
        font-size: 2.5rem!important;

        ${maxQuery("md")} {
            font-size: 1.5rem!important;
        }
    }
    h1 {
        color: #fff;
    }

     svg {
            height: auto!important;
        }

    ${maxQuery("lg")} {
        img, video {
            max-width: 100%!important;
            margin: 0 auto!important;
            display: block!important;
        }
    }

  
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
        opacity: 0.7;
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
            max-width: 45rem;
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
            font-size: 1.2rem;
            & + button {
                background: transparent;
                border: none;
            }
        }
        div.item-row {
            display: grid;
            grid-gap: 4em;
            ${minQuery("lg")} {
                grid-template-columns: 1fr 0.5fr;
                grid-gap: 4em;
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
            grid-gap: 3em;
            ${minQuery("lg")} {
                grid-template-columns: 1fr 1fr;
                grid-gap: 1em;
                justify-content: space-between;
            }
            p {
                color: rgba(255, 253, 253, 0.51);
                font-size: 1.5rem;
                display: flex;
                grid-gap: 0.5em;
            }

            div.problem-item {
                background: linear-gradient(165.74deg, #090F11 6.88%, #1F3C46 95.08%);
                border-radius: 20px;
                padding: 3em;
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
                    font-size: 1.1rem;
                    line-height: 120%;
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
            div.col-1 {
                ol {
                    margin-top: 5em;
                }
            }
            div.col-2 {
                display: grid;
                grid-gap: 1em;
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
            ${minQuery("lg")} {
                margin-top: 3em;
                align-items: center;
                grid-template-columns: 1fr 1fr;
                grid-gap: 0px;
            }
            div.col-1 {
                display: flex;
                justify-content: center;

                video {
                    width: 30rem;
                }
            }
            h2 {
                font-size: 1.5rem;
                color: #FFFDFD;
                font-weight: 500;
                max-width: 30rem;
                display: flex;
                grid-gap: 0.5em;
                margin-bottom: 0.5em;
                ${maxQuery("md")} {
                    font-size: 1.2rem;
                }
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
        padding-top: 3em;
        div.row {
            margin-top: 2em;
            display: grid;
            grid-gap: 1em;
            ${minQuery("lg")} {
                grid-template-columns: 0.8fr 1fr;
            }
           
            div.double-col {
                display: grid;
                grid-gap: 1.5em;

                div.col {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                     ${maxQuery("<lg")} {
                        img {
                            display: block!important;
                        }
                    }

                    h1 {
                        color: #FFFDFD;
                        opacity: 0.5;
                        margin: 0px;
                        line-height: 100%;
                    }
                    h3 {
                        font-size: 1.5rem;
                        line-height: 100%;
                        margin: 0px;

                        ${maxQuery("md")} {
                            font-size: 1.2rem;
                        }
                    }
                    p {
                        color: #FFFDFD;
                        font-size: 1.2rem;
                        /* opacity: 0.5; */
                    }
                }
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
                    ${maxQuery("md")} {
                        font-size: 1rem;
                    }
                }
            } 
            div.col-2 {
                h3 {
                    font-size: 2.5rem;
                    margin-bottom: 1em;
                    ${maxQuery("md")} {
                        font-size: 1.3rem;
                    }
                }
                div.img-cover {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 2.5em;
                    img {
                        margin: 0 auto;
                        display: block;
                    }
                }
                div.lists {
                    display: grid;
                    grid-gap: 2em;
                    h1 {
                        color: #FFFDFD;
                        opacity: 0.5;
                        margin: 0px;
                        line-height: 100%;
                    }
                    h3 {
                        font-size: 1.5rem;
                        line-height: 100%;
                        margin: 0px;
                        ${maxQuery("md")} {
                            font-size: 1rem;
                        }

                    }
                    p {
                        color: #FFFDFD;
                        margin-top: 0.5em;
                        font-size: 1.1rem;
                        opacity: 0.5;
                    }
                }
            }
        }
    }
    section.section-sample {
        margin-top: 5em;
        color: #FFFFFF;
        h1 {
            margin-bottom: 0.5em;
        }
         p {
            font-size: 1.3rem;
            line-height: 135%;
         }
        div.row {
             display: grid;
             margin-top: 5em;
            grid-gap: 1.5em;
          
            ${minQuery("lg")} {
                grid-template-columns: 1fr 1fr;
                grid-gap: 1.2em;

            }

            div.img-container {
                ${maxQuery("lg")} {
                    display: flex;
                    justify-content: center;
                }
            }
            div.col {
                padding: 4em;
                border-radius: 20px;
                background: linear-gradient(165.74deg, #1F3C46 6.88%, #090F11 84.22%);

                svg {
                    font-size: 3rem;
                    margin-bottom: 0.3em;
                }
                
                &.col-1 {
                    background: linear-gradient(165.74deg, #090F11 6.88%, #1F3C46 95.08%);
                    border-radius: 20px;

                   
                }
                &.col-2 {
                    background: linear-gradient(165.74deg, #1F3C46 27.94%, #090F11 95.08%);
                    border-radius: 20px;
                    ${maxQuery("lg")} {
                        div {
                            height: auto!important;
                        }
                    }
                    ${minQuery("md")} {
                        svg {
                            margin-top: -3em;
                            max-height: 50rem;
                        }

                        div.content {
                            margin-top: -12em;
                        }
                    }

                    /* div.lottie-cover {
                        border-radius: 20px;
                    } */
                }
            
                h3 {
                    margin-bottom: 1em;
                    line-height: 130%;
                    font-size: 1.5rem;
                }
                p {
                    font-size: 1rem;
                    color: #FFFDFD;
                    opacity: 0.7;
                }

                div.lists {
                    margin: 2em 0px;
                    display: grid;
                    grid-gap: 1em;
                    p {
                        display: flex;
                        align-items: flex-start;
                        grid-gap: 1em;
                        span {
                            &:first-child {
                                margin-top: 0.5em;
                                display: block;
                                height: 0.5em;
                                width: 0.5em;
                                flex-shrink: 0;
                                border-radius: 50%;
                                background: linear-gradient(104.62deg, #12C2E9 8.83%, #C471ED 55.36%, #F64F59 109.3%);
                            }
                        }
                    }
                }
            }
         
        }
    }
    section.section-code {
        display: grid;
        align-items: center;
        margin-top: 3em;
        grid-gap: 1.5em;
        background: linear-gradient(165.74deg, #1F3C46 27.94%, #090F11 95.08%);
        border-radius: 20px;
        padding: 4em 0px;
        padding-bottom: 0em;
        border-radius: 20px;
        max-height: 58rem;
        overflow: hidden;
        background: linear-gradient(114deg, #12C2E9 -15.3%, #C471ED 60.11%, #F64F59 98.78%);    

        header {
            padding: 0px 4em;
            h1 {
                margin-bottom: 0.5em;
            }

            p  {
                color: rgba(255, 253, 253, 1);
            }
        }
        img {
            margin: 0 auto;
            transform: translateX(5%) scale(1.1);
        }
    }

    section.section-bigquote {
        margin: 3.5em 0px;
        margin-bottom: 6em;

        svg {
            font-size: 5rem;
        }

        h1 {
            font-weight: 400;
            line-height: 120%;
            margin-bottom: 0.5em;
            ${minQuery("lg")} {
                max-width: 75%;
            }
        }
    }

    section.section-final {
        h1 {
            font-weight: 500;
            margin-bottom: 0.5em;
        }
        p {
            font-size: 1.3rem;
            opacity: 1;
            font-weight: 300;
            line-height: 120%;
        }

        video {
            max-width: 30rem;
            border-radius: 20px;
            margin: 0 auto;
            display: block;
            margin-top: 4em;
        }

       
        div.row {
            margin-top: 2.5em;
            display: grid;
            grid-gap: 1.5em;
            ${minQuery("lg")} {
                grid-template-columns: 1fr 1fr;
                grid-gap: 1em;
            }
            p {
                color: #FFFDFD;
                opacity: 0.5;
                font-size: 1.1rem;
                line-height: 120%;
            }

            img {
                display: block;
                margin: auto;
            }
            div.col-1 {
                padding: 2em;
                background: linear-gradient(165.74deg, #090F11 6.88%, #1F3C46 95.08%);
                border-radius: 20px;

                h1 {
                    font-size: 1.5rem;
                    margin-bottom: 1em;
                }

                div.lists {
                    margin-top: 2.5em;
                    display: grid;
                    grid-gap: 1.5em;

                    div {
                        background: #070D10;
                        padding: 1.2em 2em;
                        /* opacity: 0.2; */
                        border-radius: 10px;
                        p {
                            color: #fff;
                            opacity: 1;
                            display: flex;
                            align-items: center;
                            grid-gap: 1em;
                            &:before {
                                content: "";
                                height: 1em;
                                display: block;
                                width: 1em;
                                border-radius: 50%;
                                background: linear-gradient(104.62deg, #12C2E9 8.83%, #C471ED 55.36%, #F64F59 109.3%);

                            }
                        }
                    }
                }
            }
            div.col-2 {
                display: flex;
                flex-direction: column;
                padding: 2em;
                background: linear-gradient(165.74deg, #090F11 6.88%, #1F3C46 95.08%);
                border-radius: 20px; 
                ${maxQuery("lg")} {
                    align-items: center;
                }
               p {
                margin-bottom: 5em;
               }

               h1 {
                    margin-bottom: 1.5em;
               }


               
            }
        }
    }

    section.section-website {
        margin-top: 2em;
        position: relative;
        padding: 4em 0px;
        ${minQuery("lg")} {
            padding-bottom: 41em;
        }

        * {
            z-index: 2;
            position: relative;
        }
        
        &:after {
            content: "";
            background: linear-gradient(113.56deg, #12C2E9 -15.3%, #C471ED 60.11%, #F64F59 98.78%);
            border-radius: 20px;
            position: absolute;
            height: 80%;
            width: 100vw;
            left: 50%;
            z-index: 1;
            top: 0px;
            transform: translateX(-50%);
        }
        * {
            position: relative;
            z-index: 3;
        }
        h1 {
            max-width: 55rem;
            font-weight: 500;
            font-size: 2.4rem;
            margin: auto;

            ${maxQuery("md")} {
                font-size: 1.5rem;
            }
        }

        div.action-row {
            display: flex;
            margin-top: 2em;
            padding-bottom: 2em;
            justify-content: space-between;
            ${minQuery("lg")} {
                margin-top: 4em;
            }
            a {
                color: #fff;
                &:hover, &:focus {
                    text-decoration: underline;
                }
            }
        }

        div.asset-row {
            display: grid;
            width: 100vw;
            position: absolute;
            left: 50%;
            margin-top: -3em;
            transform: translateX(-50%);
            grid-template-columns: 1fr auto;
            z-index: 2;

            
            ${maxQuery("<lg")} {
                img {
                    display: none!important;
                }
            }
        }
    }
`;
