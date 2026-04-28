import Styled from 'styled-components'
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
        background: linear-gradient(180deg, #0B0F1A 0%, #000000 0.01%, #0F1E3A 100%);
    }

    /* ── shared detail list ── */
    ol.details {
        margin: 0px;
        padding: 0px;
        list-style: none;
        margin-top: 1.5em;
        margin-bottom: 1em;
        border-top: 1px solid rgba(255,255,255,0.2);
        li {
            border-bottom: 1px solid rgba(255,255,255,0.1);
            padding: 0.6em 0px;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            color: #FFFDFD;
            font-size: 0.95rem;
            span {
                max-width: 60%;
                line-height: 150%;
                &:last-of-type {
                    text-align: right;
                }
            }
        }
        & + a {
            color: #FFFDFD;
            display: flex;
            align-items: center;
            grid-gap: 0.25em;
        }
    }

    h3.about {
        color: rgba(255,253,253,0.75);
        line-height: 145%;
        font-size: 1.15rem;
        ${maxQuery('<lg')} {
            font-size: 1rem;
        }
        font-weight: 400;
        margin-bottom: 1.5em;
    }

    /* ── HERO ── */
    section.jumbotron--item {
        padding-top: 4rem;
        padding-bottom: 4em;
        h1 {
            font-size: 3.6rem;
            font-weight: 700;
            line-height: 105%;
            color: #FFFDFD;
            margin-bottom: 0.6em;
            background: linear-gradient(104.62deg, #4FC3F7 8.83%, #7C4DFF 55.36%, #FF6B6B 109.3%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            max-width: 42rem;
            ${maxQuery('<lg')} {
                font-size: 2.2rem;
            }
        }
        div.item-row {
            display: grid;
            grid-gap: 4em;
            ${minQuery('lg')} {
                grid-template-columns: 1fr 0.55fr;
                grid-gap: 6em;
                align-items: flex-start;
            }
            button {
                display: flex;
                font-size: 1rem !important;
                cursor: pointer;
                padding: 0px;
                grid-gap: 1em;
                align-items: center;
                background: transparent;
                border: none;
                svg {
                    font-size: 1.5rem;
                }
            }
        }
    }

    /* ── CONTEXT ── */
    section.section-context {
        margin-top: 3em;
        h1 {
            font-size: 1.5rem;
            margin-bottom: 1.5em;
        }
        div.row {
            display: grid;
            background: linear-gradient(155deg, #0D1B2A 0%, #1A2E4A 100%);
            border-radius: 20px;
            padding: 3em;
            grid-gap: 3em;
            ${minQuery('lg')} {
                grid-template-columns: 1fr 0.5fr;
                grid-gap: 5em;
            }
        }
        div.col-1 {
            p {
                color: rgba(255,253,253,0.65);
                font-size: 1.05rem;
                line-height: 160%;
                margin-bottom: 1.2em;
            }
        }
        div.col-2 {
            display: flex;
            flex-direction: column;
            grid-gap: 2em;
        }
        div.stat-block {
            span.stat-number {
                font-size: 3.5rem;
                font-weight: 700;
                background: linear-gradient(104.62deg, #4FC3F7 8.83%, #7C4DFF 55.36%, #FF6B6B 109.3%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                display: block;
                line-height: 1.1;
            }
            p {
                color: rgba(255,253,253,0.55);
                font-size: 0.9rem;
                margin-top: 0.4em;
                line-height: 140%;
            }
        }
    }

    /* ── CASE SECTIONS ── */
    section.section-case {
        margin-top: 4em;
        div.case-label {
            display: inline-block;
            font-size: 0.75rem;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            color: rgba(255,253,253,0.35);
            border: 1px solid rgba(255,255,255,0.1);
            border-radius: 50px;
            padding: 0.3em 1em;
            margin-bottom: 1em;
        }
        h1 {
            font-size: 1.5rem;
            margin-bottom: 1.5em;
        }

        /* ── Graveyard block ── */
        div.graveyard-block {
            background: linear-gradient(155deg, #12091F 0%, #1C1033 100%);
            border: 1px solid rgba(124,77,255,0.2);
            border-radius: 20px;
            padding: 3em;
            margin-bottom: 2em;
            h2.graveyard-title {
                font-size: 1.3rem;
                font-weight: 600;
                color: #FFFDFD;
                margin-bottom: 1.2em;
                display: flex;
                align-items: center;
                grid-gap: 0.5em;
                &::before {
                    content: "⚰";
                    font-size: 1.1rem;
                }
            }
            p {
                color: rgba(255,253,253,0.6);
                font-size: 1rem;
                line-height: 165%;
                margin-bottom: 1em;
            }
        }
        div.experiment-grid {
            display: grid;
            grid-gap: 1em;
            margin-top: 2em;
            ${minQuery('lg')} {
                grid-template-columns: 1fr 1fr 1fr;
            }
        }
        div.experiment-item {
            border-radius: 12px;
            padding: 1.5em;
            position: relative;
            span.experiment-label {
                display: block;
                font-size: 0.85rem;
                font-weight: 600;
                color: #FFFDFD;
                margin-bottom: 0.75em;
            }
            p {
                font-size: 0.9rem;
                line-height: 145%;
                margin-bottom: 0 !important;
            }
            &.bad {
                background: rgba(255,80,80,0.08);
                border: 1px solid rgba(255,80,80,0.2);
            }
            &.warning {
                background: rgba(255,180,0,0.08);
                border: 1px solid rgba(255,180,0,0.2);
            }
            &.good {
                background: rgba(79,195,247,0.08);
                border: 1px solid rgba(79,195,247,0.2);
            }
        }

        /* ── Solution block ── */
        div.solution-block {
            background: linear-gradient(155deg, #0D1B2A 0%, #1A2E4A 100%);
            border-radius: 20px;
            padding: 3em;
            h2 {
                font-size: 1.3rem;
                font-weight: 600;
                color: #FFFDFD;
                margin-bottom: 1em;
            }
            p {
                color: rgba(255,253,253,0.65);
                font-size: 1rem;
                line-height: 165%;
                margin-bottom: 1.2em;
            }
        }
        div.aha-block {
            background: rgba(79,195,247,0.06);
            border: 1px solid rgba(79,195,247,0.15);
            border-radius: 14px;
            padding: 2em;
            margin: 1.5em 0;
            h3 {
                font-size: 1.05rem;
                color: #4FC3F7;
                margin-bottom: 0.75em;
            }
            p {
                color: rgba(255,253,253,0.65);
                margin-bottom: 0;
            }
        }
        div.fixes-grid {
            margin-top: 1.5em;
            h3 {
                font-size: 1rem;
                color: #FFFDFD;
                margin-bottom: 1em;
            }
            ul {
                margin: 0;
                padding: 0;
                list-style: none;
                display: grid;
                grid-gap: 0.75em;
                li {
                    color: rgba(255,253,253,0.65);
                    font-size: 0.95rem;
                    line-height: 150%;
                    padding-left: 1.5em;
                    position: relative;
                    &::before {
                        content: "";
                        position: absolute;
                        left: 0;
                        top: 0.55em;
                        width: 0.45rem;
                        height: 0.45rem;
                        border-radius: 50%;
                        background: linear-gradient(104.62deg, #4FC3F7 8.83%, #7C4DFF 55.36%, #FF6B6B 109.3%);
                    }
                }
            }
        }

        /* ── Two dashboards ── */
        div.two-dashboards {
            margin-bottom: 2.5em;
            h2 {
                font-size: 1.3rem;
                color: #FFFDFD;
                margin-bottom: 0.75em;
            }
            & > p {
                color: rgba(255,253,253,0.65);
                font-size: 1rem;
                line-height: 160%;
                margin-bottom: 1.5em;
                max-width: 52rem;
            }
        }
        div.dashboard-grid {
            display: grid;
            grid-gap: 1.5em;
            ${minQuery('lg')} {
                grid-template-columns: 1fr 1fr;
            }
        }
        div.dashboard-card {
            background: linear-gradient(155deg, #0D1B2A 0%, #1A2E4A 100%);
            border-radius: 16px;
            padding: 2.5em;
            border: 1px solid rgba(255,255,255,0.07);
            h3 {
                font-size: 1.1rem;
                color: #FFFDFD;
                margin-bottom: 0.75em;
            }
            p {
                color: rgba(255,253,253,0.6);
                font-size: 0.95rem;
                line-height: 160%;
                em { font-style: italic; color: rgba(255,253,253,0.8); }
            }
            &.dashboard-card--paid {
                border-color: rgba(79,195,247,0.2);
                background: linear-gradient(155deg, #091827 0%, #0F2840 100%);
            }
        }

        /* ── Pricing block ── */
        div.pricing-block {
            background: linear-gradient(155deg, #12091F 0%, #1C1033 100%);
            border-radius: 20px;
            padding: 3em;
            margin-top: 2em;
            h2 {
                font-size: 1.3rem;
                color: #FFFDFD;
                margin-bottom: 1em;
            }
            p {
                color: rgba(255,253,253,0.65);
                font-size: 1rem;
                line-height: 165%;
                margin-bottom: 1.5em;
                max-width: 52rem;
            }
        }
        div.pricing-result-row {
            display: grid;
            grid-gap: 1em;
            ${minQuery('lg')} {
                grid-template-columns: 1fr 1fr 1fr;
            }
        }
        div.pricing-result-item {
            background: rgba(255,255,255,0.03);
            border-radius: 12px;
            padding: 1.5em;
            border: 1px solid rgba(255,255,255,0.06);
            p {
                font-size: 0.9rem;
                margin-bottom: 0;
                line-height: 145%;
            }
        }
        span.tag {
            display: inline-block;
            font-size: 0.7rem;
            font-weight: 600;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            border-radius: 50px;
            padding: 0.2em 0.75em;
            margin-bottom: 0.75em;
            &.tag--bad {
                background: rgba(255,80,80,0.15);
                color: #FF6B6B;
            }
            &.tag--good {
                background: rgba(79,195,247,0.15);
                color: #4FC3F7;
            }
            &.tag--neutral {
                background: rgba(255,200,0,0.12);
                color: #FFD700;
            }
        }

        /* ── Landing page / copy comparison ── */
        div.landing-block {
            background: linear-gradient(155deg, #0D1B2A 0%, #1A2E4A 100%);
            border-radius: 20px;
            padding: 3em;
            margin-top: 2em;
            h2 {
                font-size: 1.3rem;
                color: #FFFDFD;
                margin-bottom: 1em;
            }
            p {
                color: rgba(255,253,253,0.65);
                font-size: 1rem;
                line-height: 165%;
                margin-bottom: 1.5em;
                max-width: 52rem;
            }
        }
        div.copy-comparison {
            display: grid;
            align-items: center;
            grid-gap: 1.5em;
            ${minQuery('lg')} {
                grid-template-columns: 1fr auto 1fr;
            }
        }
        div.copy-arrow {
            font-size: 2rem;
            color: rgba(255,255,255,0.2);
            text-align: center;
        }
        div.copy-item {
            border-radius: 14px;
            padding: 2em;
            span.copy-label {
                display: inline-block;
                font-size: 0.7rem;
                letter-spacing: 0.12em;
                text-transform: uppercase;
                font-weight: 700;
                margin-bottom: 0.75em;
            }
            h3 {
                font-size: 1.05rem;
                line-height: 140%;
                margin-bottom: 0.75em;
            }
            p.copy-sub {
                font-size: 0.85rem;
                line-height: 145%;
                margin-bottom: 0.75em;
            }
            &.copy-item--before {
                background: rgba(255,80,80,0.06);
                border: 1px solid rgba(255,80,80,0.15);
                span.copy-label { color: #FF6B6B; }
                h3 { color: rgba(255,253,253,0.5); }
                p { color: rgba(255,253,253,0.4); }
            }
            &.copy-item--after {
                background: rgba(79,195,247,0.06);
                border: 1px solid rgba(79,195,247,0.2);
                span.copy-label { color: #4FC3F7; }
                h3 { color: #FFFDFD; }
                p { color: rgba(255,253,253,0.65); }
            }
        }
        p.cta-before {
            display: inline-block;
            font-size: 0.85rem;
            background: rgba(255,255,255,0.08);
            border-radius: 8px;
            padding: 0.4em 1em;
            color: rgba(255,253,253,0.45) !important;
            margin-bottom: 0 !important;
        }
        p.cta-after {
            display: inline-block;
            font-size: 0.85rem;
            background: linear-gradient(104.62deg, #4FC3F7 8.83%, #7C4DFF 55.36%, #FF6B6B 109.3%);
            border-radius: 8px;
            padding: 0.4em 1em;
            color: #fff !important;
            font-weight: 600;
            margin-bottom: 0 !important;
        }

        /* ── Reactivation ── */
        div.reactivation-block {
            background: linear-gradient(155deg, #0D1B2A 0%, #1A2E4A 100%);
            border-radius: 20px;
            padding: 3em;
            h2 {
                font-size: 1.3rem;
                color: #FFFDFD;
                margin-bottom: 1em;
            }
            p {
                color: rgba(255,253,253,0.65);
                font-size: 1rem;
                line-height: 165%;
                margin-bottom: 1em;
            }
            blockquote {
                border-left: 3px solid #4FC3F7;
                padding-left: 1.5em;
                margin: 1.5em 0;
                font-style: italic;
                color: rgba(255,253,253,0.8);
                font-size: 1rem;
                line-height: 160%;
            }
        }

        &.section-case--alt {
            &:after {
                /* subtle different tone for case 2 */
            }
        }
    }

    /* ── RESULTS ── */
    section.section-results {
        margin-top: 4em;
        h1 {
            font-size: 1.5rem;
            margin-bottom: 0.75em;
        }
        p.results-intro {
            color: rgba(255,253,253,0.5);
            font-size: 1rem;
            margin-bottom: 2em;
        }
        div.results-grid {
            display: grid;
            grid-gap: 1.5em;
            ${minQuery('lg')} {
                grid-template-columns: 1fr 1fr 1fr;
            }
        }
        div.result-card {
            background: linear-gradient(155deg, #0D1B2A 0%, #1A2E4A 100%);
            border: 1px solid rgba(255,255,255,0.06);
            border-radius: 16px;
            padding: 2em;
            display: flex;
            flex-direction: column;
            span.result-metric {
                font-size: 2.4rem;
                font-weight: 700;
                background: linear-gradient(104.62deg, #4FC3F7 8.83%, #7C4DFF 55.36%, #FF6B6B 109.3%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                display: block;
                line-height: 1.1;
                margin-bottom: 0.15em;
            }
            span.result-label {
                font-size: 0.7rem;
                letter-spacing: 0.12em;
                text-transform: uppercase;
                color: rgba(255,253,253,0.35);
                margin-bottom: 1em;
                display: block;
            }
            p.result-causation {
                color: rgba(255,253,253,0.5);
                font-size: 0.85rem;
                line-height: 145%;
                font-style: italic;
                margin-bottom: 0.75em;
                flex: 1;
            }
            p.result-stat {
                color: rgba(255,253,253,0.75);
                font-size: 0.9rem;
                line-height: 145%;
                border-top: 1px solid rgba(255,255,255,0.06);
                padding-top: 0.75em;
                margin-bottom: 0;
            }
        }
    }

    /* ── LEARNINGS ── */
    section.section-learnings {
        padding: 4em 0px;
        padding-bottom: 6em;
        h1 {
            font-size: 1.5rem;
            margin-bottom: 2em;
        }
        div.list-container {
            display: flex;
            flex-direction: column;
            grid-gap: 1.5em;
            max-width: 58rem;
        }
        div.list-item {
            display: flex;
            align-items: flex-start;
            grid-gap: 1.5em;
            color: #FFFDFD;
            svg {
                font-size: 3rem;
                flex-shrink: 0;
                margin-top: 0.15em;
            }
            h3 {
                font-size: 1rem;
                font-weight: 600;
                color: #FFFDFD;
                margin-bottom: 0.4em;
            }
            p {
                font-size: 0.95rem;
                color: rgba(255,253,253,0.6);
                line-height: 155%;
                margin: 0;
            }
        }
    }

    /* ── IMAGE UTILITIES ── */
    .img-shadow img {
        border-radius: 14px;
        box-shadow: 0 8px 40px rgba(0,0,0,0.55);
        width: 100%;
        height: auto;
        display: block;
    }
    .img-caption {
        font-size: 0.78rem !important;
        color: rgba(255,253,253,0.35) !important;
        text-align: center;
        margin-top: 0.75em !important;
        margin-bottom: 0 !important;
        line-height: 140%;
        font-style: italic;
    }

    /* single full-width image */
    .img-single {
        margin: 2em 0;
    }
    .img-single.img-narrow {
        max-width: 360px;
        margin-left: auto;
        margin-right: auto;
    }

    /* side-by-side pair */
    .img-pair {
        display: grid;
        grid-gap: 1.5em;
        margin: 1.5em 0 1em;
        ${minQuery('lg')} {
            grid-template-columns: 1fr 1fr;
        }
    }
    .img-pair__item {}

    /* ── Competitive research block ── */
    div.comp-research-block {
        background: linear-gradient(155deg, #0D1B2A 0%, #1A2E4A 100%);
        border-radius: 20px;
        padding: 3em;
        margin-bottom: 2em;
        h2 {
            font-size: 1.3rem;
            font-weight: 600;
            color: #FFFDFD;
            margin-bottom: 1em;
        }
        & > p {
            color: rgba(255,253,253,0.65);
            font-size: 1rem;
            line-height: 165%;
            margin-bottom: 1.5em;
            max-width: 52rem;
        }
    }
    div.comp-grid {
        display: grid;
        grid-gap: 1.5em;
        ${minQuery('lg')} {
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
    }
    div.comp-item {
        display: flex;
        flex-direction: column;
        gap: 0.75em;
    }
    div.comp-img {
        flex: 1;
        img {
            border-radius: 12px;
            box-shadow: 0 6px 30px rgba(0,0,0,0.5);
            width: 100%;
            height: auto;
            display: block;
        }
    }
    div.comp-img--mobile img {
        max-width: 220px;
        margin: 0 auto;
    }
    p.comp-label {
        font-size: 0.78rem !important;
        color: rgba(255,253,253,0.35) !important;
        line-height: 140%;
        font-style: italic;
        margin: 0 !important;
    }

    /* ── Dashboard image inside card ── */
    div.dashboard-img {
        margin-top: 1.5em;
    }

    /* ── Dashboard evolution row ── */
    div.dashboard-evolution {
        margin-top: 2.5em;
        h3 {
            font-size: 1.05rem;
            color: #FFFDFD;
            margin-bottom: 0.5em;
        }
        & > p {
            color: rgba(255,253,253,0.55);
            font-size: 0.9rem;
            margin-bottom: 1.25em;
        }
    }
    div.evolution-row {
        display: grid;
        grid-gap: 1.5em;
        ${minQuery('lg')} {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
    div.evolution-item {
        display: flex;
        flex-direction: column;
        gap: 0.75em;
        img {
            border-radius: 12px;
            box-shadow: 0 6px 30px rgba(0,0,0,0.5);
            width: 100%;
            height: auto;
            display: block;
        }
    }
    span.evo-label {
        font-size: 0.78rem;
        color: rgba(255,253,253,0.35);
        font-style: italic;
        line-height: 140%;
    }

    /* ── Transparency block ── */
    div.transparency-block {
        margin-top: 2.5em;
        background: rgba(79,195,247,0.04);
        border: 1px solid rgba(79,195,247,0.12);
        border-radius: 16px;
        padding: 2.5em;
        h3 {
            font-size: 1.05rem;
            color: #4FC3F7;
            margin-bottom: 0.75em;
        }
        & > p {
            color: rgba(255,253,253,0.6);
            font-size: 0.95rem;
            line-height: 160%;
            margin-bottom: 1em;
        }
    }

    /* ── Landing page screens ── */
    div.landing-screens {
        display: grid;
        grid-gap: 1.5em;
        margin-top: 2em;
        ${minQuery('lg')} {
            grid-template-columns: 1fr 1fr;
        }
        img {
            border-radius: 12px;
            box-shadow: 0 6px 30px rgba(0,0,0,0.5);
            width: 100%;
            height: auto;
            display: block;
        }
        p { margin-top: 0.75em; }
    }

    /* ── Retention email grid ── */
    div.email-grid {
        display: grid;
        grid-gap: 1.5em;
        margin: 2em 0;
        ${minQuery('lg')} {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
    div.email-item {
        display: flex;
        flex-direction: column;
        img {
            border-radius: 16px;
            box-shadow: 0 6px 30px rgba(0,0,0,0.5);
            width: 100%;
            height: auto;
            display: block;
        }
    }
`
