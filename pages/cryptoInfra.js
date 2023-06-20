import Image from "next/image";
import { GradientTxt } from "../component";
import { Arrow, BigQuote, Card, Lists } from "../asset/convertedSvgs";
import {
  StarRow,
  featured,
  thirtyFive5,
  CryptoWebsites,
  Globe,
  Integrations,
  BankAcc,
} from "../asset/png";
import Container from "../StyleComponents/cryptoInfra";

export default function CyptoInfra() {
  return (
    <Container>
      <section className="jumbotron--item">
        <h1>Building a global Fiat infrastructure for Crypto payments</h1>
        <div className="item-row">
          <div>
            <h3 className="about">
              In most developing countries, paying & storing wealth with crypto
              has been found to be more efficient than local currencies mostly
              due to economic instability and inflation. This means that a lot
              of these people are disenfranchised from global commerce built on
              fiat rails. <br />
              <br /> On the flip side, developed countries have a stable economy
              built on a solid payment infrastructure. This translates to the
              fact that a lot of online businesses in developed countries hoping
              to tap into these markets will find it super difficult. It was
              obvious a bridge was needed to help businesses tap into this
              crypto market by providing a way for their customers to pay using
              crypto just the same way they pay using traditional currencies. 
            </h3>
            <button>
              <GradientTxt>
                <a href="https://pay.so/" target="_blank" rel="noreferrer">
                  Use Payso
                </a>
              </GradientTxt>
              <Arrow direction="right" />
            </button>
          </div>
          <ol className="details">
            <li>
              <span>Date</span>
              <span>2023</span>
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
        <h1 className="subtitle">
          <GradientTxt>Identified Problems</GradientTxt>
        </h1>
        <div className="row">
          <div className="col-1 problem-item">
            <p>
              <span className="count">1.</span>{" "}
              <span>
                For customers, Payso’s Crypto Checkout will be their first
                experience with crypto payments; how do we abstract complexities
                and make it as familiar as Fiat payments methods?
              </span>
            </p>
            <ol>
              {[
                "How can we abstract complexities and make crypto payments feel like traditional online payment systems people are already used to? ",
              ].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
          <div className="col-2">
            {[
              {
                title:
                  "On the business-facing side, businesses are willing to accept crypto but there exist intense concerns about the unstable nature of crypto prices.",
                detail:
                  "How can we protect businesses from the unstable prices of crypto.",
              },
              {
                title:
                  "Crypto provides a secure, faster and cheaper way for cross-border payments. ",
                detail:
                  "How can we help businesses & freelancers accept crypto payments?",
              },
            ].map(({ title, detail }, i) => (
              <div key={i} className="problem-item">
                <p>
                  <span className="count">{i + 2}.</span>
                  <span>{title}</span>
                </p>
                <ol>
                  <li>{detail}</li>
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="solution-cover">
        <h1 className="subtitle">
          <GradientTxt>Iteration 1 - The beginning</GradientTxt>
        </h1>
        <div className="row">
          <div className="col-1">
            <div>
              <video autoPlay loop muted>
                <source
                  src="https://res.cloudinary.com/djhh4kkml/video/upload/v1687103955/Leke/Iteration_o3x73t.webm"
                  type="video/webm"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="col-2">
            {[
              {
                title: "An intuitive customer checkout flow ",
                detail:
                  "We stripped the checkout interface of jargon that was common with other web3/crypto products to only display the things that were needed for a customer to complete a purchase. Customers with wallets can complete a purchase by simply connecting their wallets while others who had funds in centralised exchanges were provided with a secure address to manually make payments.",
              },
              {
                title: "Stablecoins to the rescue",
                detail:
                  "Stablecoins provide an alternative to the high volatility of the most popular cryptocurrencies. Stablecoins are cryptocurrencies whose value is pegged to a fiat currency. They can be settled instantly, at a low cost and have a stable value. They are perfect for the average user who wants payments to be better and cheaper than a bank transfer.",
              },
              {
                title: "An interface to setup and manage payments",
                detail:
                  " With a crypto wallet at hand, businesses and freelancers alike can receive crypto payments from anywhere in the world. Building on this, Payso instantly turns this wallet into a “bank account” by displaying the various assets contained in it, a graph to visualise the inflow and outflow of funds and a table to list transactions.",
              },
            ].map(({ title, detail }, i) => (
              <div key={i}>
                <h2>
                  <span className="count">{i + 1}.</span>
                  <span>{title}</span>
                </h2>
                <p>{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="double-cover">
        <h1 className="subtitle">
          <GradientTxt>Impact after 3 months of launch</GradientTxt>
        </h1>
        <div className="row">
          <div className="double-col">
            <div className="col">
              <Image src={thirtyFive5} alt="thirtyFive5" />
              <h3 style={{ marginTop: "2em" }}>
                Over $350k in transaction volume within 3 months of launch
              </h3>
            </div>
            <div className="col">
              <div>
                <Image src={StarRow} alt="StarRow" />
                <h3 style={{ marginTop: "1.25em" }}>
                  87+ customer rated: EXCELLENT{" "}
                </h3>
              </div>
              <div>
                <h1>“</h1>
                <p>Hard to fault</p>
              </div>
            </div>
          </div>
          <div className="col col-2">
            <h3>Featured in over 25+ tech publications and news articles</h3>
            <div className="img-cover">
              <Image src={featured} alt="featured" />
            </div>
            <div className="lists">
              {[
                { title: "Easy-to-use", detail: "TechEU" },
                { title: "Hassle-free user experience", detail: "TechCrunch" },
              ].map(({ title, detail }, i) => (
                <div key={i} className="lists-item">
                  <h1>“</h1>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section-sample">
        <h1 className="subtitle">
          <GradientTxt>Iteration 2 - Doubling down</GradientTxt>
        </h1>
        <p>
          From our first iteration, Crypto businesses adopted our solutions
          faster than traditional businesses. This was because traditional
          business were still highly dependent on use of fiat currencies in
          their day to day operations. To bridge this gap, we introduced these 3
          solutions
        </p>
        <div className="row">
          <div className="col col-1">
            <Card />
            <h3>
              Accept payment in crypto, Receive Fiat equivalent in your bank
              account
            </h3>
            <p>
              Although exchanges can be utilised for conversions, by bridging
              this gap within Payso, product adoption and transaction volume
              would increase. We successfully integrated with a crypto-fiat rail
              to help power this. So users receive crypto payment directly into
              their bank account.{" "}
            </p>

            <div className="lists">
              {[
                "No FX cost unlike trad-fi crossborder transfer charges",
                "Our users will become preferred vendors to web3 companies",
              ].map((d, i) => (
                <p key={i}>
                  <span />
                  <span>{d}</span>
                </p>
              ))}
            </div>
            <div className="img-container">
              <Image src={BankAcc} alt="Bank Acc" />
            </div>
          </div>
          <div className="col col-2">
            <video autoPlay loop muted>
              <source
                src="https://res.cloudinary.com/djhh4kkml/video/upload/v1687103961/Leke/Protection_vxou7q.webm"
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>
            <div style={{ marginTop: "2em" }}>
              <Lists />
              <h3>Protection, Compliance and Verification</h3>
              <p>
                Crypto transactions in themselves are anonymous and this
                crypto-fiat feature will potentially attract bad actors in the
                industry. We partnered with advanced KYC services to monitor the
                flow of funds. This also signalled to prospective customers and
                regulators that Cheq was serious with protecting its users’
                funds.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-code">
        <div className="col-1">
          <Lists />
          <h1>Code & no-code integrations</h1>
          <p>
            Payso can connect to over 4000 other tools like Google Sheets,
            Airtable or Notion with no code. You can also use the API to
            integrate Payso alongside other payment systems for your SaaS
            business.
          </p>
        </div>
        <div className="col-2">
          <Image src={Integrations} alt="SwapMonkey3" />
        </div>
      </section>
      <section className="section-bigquote">
        <BigQuote />
        <h1>
          In the first 2 weeks of launch, we saw a spike in transaction volume
          of about $70,000 and about 55 signups from businesses across Europe,
          UK and Latin America.
        </h1>
        <p>~ Chris Butcher (CEO, Cheq Payments)</p>
      </section>
      <section className="section-final">
        <h1>Final Design - Beauty from the ashes</h1>
        <p>
          In November 2022, FTX collapsed and this had a ripple effect on the
          crypto ecosystem. Lots of crypto companies went bust. Several
          companies that were plugged to crypto-fiat rail providers were also
          severely affected including Payso. This event created an
          infrastructure gap in the market and an opportunity for Payso to solve
          the problem.
        </p>
        <div className="row">
          <div className="col-1">
            <h1>This enabled us increase our product offerings</h1>
            <p>
              With this new feature, Payso is able to extend its product
              offering to provide its Fiat rail API as a service to other
              businesses. This also means alongside its primary service of
              facilitating crypto payments through its checkout, Payso can now
              power its cross-border payment business.
            </p>
            <div className="lists">
              {[
                "Crypto native companies",
                "Other Payment business",
                "Its own crypto-fiat payment service",
              ].map((d, i) => (
                <div key={i}>
                  <p>{d}</p>
                </div>
              ))}
            </div>
            <video autoPlay loop muted>
              <source
                src="https://res.cloudinary.com/djhh4kkml/video/upload/v1687103945/Leke/CaseStudy_ktdlmb.webm"
                type="video/webm"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-2">
            <h1>
              We built infrastructure for ourselves and other Fintech companies
            </h1>
            <p>
              Since we understood what is required to make this work, it only
              meant that we are solving a problem we personally experienced. By
              this problem efficiently would enable companies plug into our API
              to power their payments. Building a Fiat rail for crypto payments
              required licensing and partnerships to facilitate transfers to
              different parts of the world. As a result of this development, a
              separate product was created to cater for the infrastructure side
              the business. With strategic partnerships secured, Cheq is able to
              process crypto transfers into 40+ fiat currencies in 170+
              countries.
            </p>
            <Image src={Globe} alt="Globe" />
          </div>
        </div>
      </section>
      <section className="section-website">
        <h1>
          A new website was launched to differentiate Pay.so (Checkout and Send)
          from its Infrastructure service (Pay.so CORE)
        </h1>
        <div className="action-row">
          <a href="https://www.pay.so/">Visit Pay.so website</a>
          <a href="https://core.pay.so/">Visit Pay.so CORE website</a>
        </div>
        <div className="asset-row">
          <Image src={CryptoWebsites} alt="CryptoWebsites" />
        </div>
      </section>
    </Container>
  );
}
