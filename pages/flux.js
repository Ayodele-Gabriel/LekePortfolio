import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Lottie from 'react-lottie'
import { BsArrowRight } from 'react-icons/bs'
import { FiArrowUpRight, FiArrowDownRight } from 'react-icons/fi'
import { workHistory, licenseCertification } from '../constant'
import { GradientTxt } from '../component'
import {
  Arrow,
  CupPin,
  QuestionMark,
  Card,
  Lists,
  ContactGroup,
  Basket,
  Gift,
  CardGroup,
  PieChart,
  SyncGroup,
} from '../asset/convertedSvgs'
import {
  device,
  Chat,
  SwapMonkey,
  SwapMonkeyUSDT,
  SwapMonkey3,
  MonkeyGroup,
  graph,
  SwapWithFrame,
  fluxVirtualCard,
  fluxUtilities,
  fluxGroup,
  Samuel,
  PieGraph,
  fluxBrowser,
  fluxAuth,
  SwapMonkeyWithFrame,
} from '../asset/png'
import Container from '../StyleComponents/flux'

export default function Flux() {
  return (
    <Container>
      <section className="jumbotron--item">
        <h1>
          Building Africa’s first decentralized peer-to peer cypto trading
          platform
        </h1>
        <div className="item-row">
          <div>
            <h3 className="about">
              Flux is a cross border payments company powered with crypto in
              over 40 countries. We identified users&apos; inability to verify
              their identity during the onboarding process with only about 6-10%
              successful verification. This in turn led to 35% of users actively
              transacting. We replaced unused features with new ones which
              reduced churn rate from 70% to 30%. A move that led to a 5X boost
              in transaction volume and a 60% increase in customer acquisition.
            </h3>
            <button>
              <GradientTxt>Download Flux</GradientTxt>
              <Arrow direction="right" />
            </button>
          </div>
          <ol className="details">
            <li>
              <span>Date</span>
              <span>2021</span>
            </li>
            <li>
              <span>Role</span>
              <span>
                UX strategy, Wireframing, UI Design, Prototyping, Customer
                Interviews
              </span>
            </li>
          </ol>
        </div>
      </section>
      <section className="problem-statement">
        <h1>
          <GradientTxt>Identified Problems</GradientTxt>
        </h1>
        <div className="row">
          <div className="col-1">
            <header>
              <Image src={PieGraph} alt="pie chart" />
              <p>Problem One</p>
              <h2>
                Only 20%-25% of newly registered users get verified leading to a
                high churn rate.
              </h2>
            </header>
            <p>
              High churn rate as a result of identity verification problems
              during the onboarding process. Being a financial institution, we
              are required by monetary authorities to verify a user&apos;s
              identity. The method adopted to do this was to send a verification
              code to the phone number attached to a user’s BVN (The Bank
              Verification Number is an 11-digit unique identity for each
              individual across the Nigerian Banking industry). Because only
              verified customers are eligible to transact, many users end up in
              the loop of remaining unverified because of the following reasons:
            </p>
            <ol>
              <li>They don&apos;t get the verification code</li>
              <li>
                They don&apos;t have access to the phone numbers attached to
                their BVN
              </li>
              <li>There is no alternative way to verify a users identity</li>
            </ol>
          </div>
          <div className="col-2">
            <div className="semi-row">
              <div className="semi-1">
                <header>
                  <p>Problem Two</p>
                  <h2>
                    Increase in business expenses as a result of unused features
                  </h2>
                </header>
                <Image src={graph} alt="graph" />
                <div className="bottom-container">
                  <p>
                    We were able to identify some set of features with low
                    engagement rates. The ROI on the amount spent on marketing
                    brought lower than expected results. Some of the features
                    removed include:
                  </p>
                  <div className="item-row">
                    <div className="item">
                      <Basket />
                      <p>Flux Store</p>
                    </div>
                    <div className="item">
                      <Gift />
                      <p>Flux Gifts</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="semi-2">
                <header>
                  <p>Problem Three</p>
                  <h2>Problem with Information hierarchy</h2>
                </header>
                <p>
                  Some users identified that some of the important actions they
                  want to take were hidden in menus and sidebars which makes it
                  longer for them to achieve their task. While addressing this,
                  we noticed “wallet funding” is an important task for users, we
                  assigned virtual accounts numbers but on some occasions,
                  transfers made to these accounts do not reflect hence creating
                  panicking and irate users. For some customers they simply do
                  not want another account number added to their numerous
                  collections.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-insight">
        <h1>
          <GradientTxt>
            Taking an insight from customers and Data over a 6 months journey
          </GradientTxt>
        </h1>
        <div className="row">
          <div className="col-1">
            <h1>
              We reverse engineered the process to collect only the users BVN
              and a photo selfie during the onboarding process.{' '}
            </h1>
            <div className="item-row">
              <div className="pie-container">
                <PieChart />
              </div>
              <p>
                By doing this, our machine learning algorithms match the
                customer picture contained in the BVN to the selfie photo
                provided by the user. With an accuracy of 99%, This method
                helped improve our percentage of newly registered users who get
                verified from 25% to 80%.
              </p>
            </div>
          </div>
          <div className="col-2">
            <Image src={Samuel} alt="Samuel" />
          </div>
        </div>
      </section>
      <section className="section-create">
        <div className="col-1">
          <h2>Created new features to support new use cases</h2>
          <p>New features added include:</p>
          <div className="img-cover">
            <header>
              <Card />
              <h3>Virtual Cards</h3>
              <p>
                This informed our decision to introduce the virtual cards
                feature to help our users make safe and secure payments online.{' '}
              </p>
            </header>
            <div className="img-container">
              <Image src={fluxVirtualCard} alt="virtual card" />
            </div>
          </div>
        </div>
        <div className="col-2">
          <p>
            From feedback from customer support representatives, close customer
            interactions and constant data reviews, we figured out that users
            want to keep their spending in one place. To help them safely
            transition from their traditional bank, they need more than just the
            ability to move money. They want Flux to cater for their other
            payment needs.
          </p>
          <div className="img-cover">
            <header>
              <Lists />
              <h3>Bill & Utility Payment</h3>
              <p>
                Also, an utility payment feature was launched to help users make
                bill payment like electricity, cable TV and Internet
                subscriptions via the app.{' '}
              </p>
            </header>
            <div className="img-container">
              <Image src={fluxUtilities} alt="virtual card" />
            </div>
          </div>
        </div>
      </section>
      <section className="section-question">
        <QuestionMark />
        <h1>
          The first time I used the app, it was all confusing to me. The most
          important things I cared about were hidden in menus and sidebars.
        </h1>
        <p>~ Temi Otedola</p>
      </section>
      <section className="section-refresh">
        <h2>A refreshed interface layout that users can navigate with ease</h2>
        <p>
          The challenge resulted in a refreshed interface layout that users can
          navigate with ease. Of the features available on the app, wallet
          transfers and crypto transactions reported the most usage. This meant
          one thing for the design team, people need to be able to access this
          segment faster to achieve what they need to do. We added a &quot;Add
          money with debit card&ldquo; feature to give more options to users to
          add money other than their virtual account numbers. This led to a
          significant drop in daily funding related support ticket from 52 to 4
        </p>
        <Image src={fluxGroup} alt="flux group" />
      </section>
      <section className="section-exciting">
        <div className="row">
          <div className="col-1">
            <h1>An exciting and interactive new website </h1>
          </div>
          <div className="col-2">
            <p>
              I went ahead to create a brand new website to showcase the
              features added to the app. Special attention was given to the use
              of bold text, imagery and graphic elements.
            </p>
            <a href="http://iflux.app/" target="_blank" rel="noreferrer">
              Visit Website <BsArrowRight />
            </a>
          </div>
        </div>
        <div className="img-container">
          <Image src={fluxBrowser} alt="fluxAuth" />
        </div>
      </section>
      <section className="section-impact">
        <h1>
          <GradientTxt>Impact</GradientTxt>
        </h1>
        <div className="impact-lists">
          {[
            {
              icon: ContactGroup,
              title: '4000',
              details: 'New users with over 3500 successfully verified',
            },
            {
              icon: CardGroup,
              title: '30%',
              details:
                'of our users created virtual cards immediately after launch with 25% funding right after they created the cards',
            },
            {
              icon: SyncGroup,
              title: '0% to 40%',
              details:
                'By adding the "fund wallet with debit card", the share of customer funding via bank transfer to virtual accounts went from 100% to 60% and via debit card from 0% to 40%',
            },
          ].map((item) => (
            <div className="impact-item" key={item.title}>
              <item.icon />
              <div>
                <h1>{item.title}</h1>
                <p>{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  )
}
