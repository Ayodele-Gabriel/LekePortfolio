import Image from "next/image";
import { FiArrowDownRight } from "react-icons/fi";
import { GradientTxt } from "../component";
import { Arrow, CupPin } from "../asset/convertedSvgs";
import {
  Chat,
  SwapMonkey,
  SwapMonkeyUSDT,
  SwapMonkey3,
  MonkeyGroup,
  SwapMonkeyWithFrame,
} from "../asset/png";
import Container from "../StyleComponents/swapmonkey";

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
              Swapmonkey, a decentralized Peer to Peer crypto swapping platform
              where users instantly trade crypto assets through swapping from a
              safe, fast, and secure decentralized liquidity pool.
            </h3>
            <button>
              <GradientTxt>
                <a
                  href="https://swapmonkey.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download SwapMonkey
                </a>
              </GradientTxt>
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
          <GradientTxt>Problem Statement</GradientTxt>
        </h1>
        <div className="row">
          <div className="col-1">
            <p>
              The central monetary authority in Nigeria around February banned
              commercial banks from directly facilitating payment for
              cryptocurrency exchanges. After the announcement, we noticed a
              noise dive in the transaction volume, the company had to quickly
              innovate around this to reinvigorate the transaction volume and
              continue serving the users without violating any policy
              regulation.
            </p>
            <ol>
              {[
                "How might we we facilitate crypto trading for users without breaking policy rules?",
                "How might reinvigorates the rapidly declining transaction volume as a result of the ban?",
                "How might we make trading crypto more secure and faster?",
              ].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
          <div className="col-2">
            <div>
              <Image src={Chat} alt="Chat" />
              <Arrow />
            </div>
            <div className="content-item">
              <span>80%</span>
              <p>
                of the complaint we received were of delayed and slow
                transactions
              </p>
            </div>
            <div className="content-item">
              <div style={{ display: "inline-flex", gridGap: "0.5em" }}>
                <span
                  style={{
                    fontSize: "1rem",
                    display: "inline-flex",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  67%
                  <FiArrowDownRight
                    style={{ fontSize: "1rem", marginTop: "-0.05em" }}
                  />
                </span>
                <span>35%</span>
              </div>
              <p>User retention dropped 32%</p>
            </div>
          </div>
        </div>
      </section>
      <section className="solution-cover">
        <h1>
          <GradientTxt>Solutions</GradientTxt>
        </h1>
        <div className="row">
          <div className="col-1">
            <Image src={SwapMonkey} alt="Swap Monkey" />
          </div>
          <div className="col-2">
            <div>
              <h2>Swap on Request </h2>
              <p>
                The first iteration was primary to address the effect of the
                policy ban. This is the MVP of Swapmonkey. After the ban, We
                decided not to go through the traditional route of peer-to-peer
                trading like other brands did. In this case, we created the
                “instant swap” option where assets from a decentralized
                liquidity pool will be made available instantly into a users’
                wallet immediately a swap is initiated and authorized. In order
                to prevent interfacing with the bank which would break the
                outlined policy made by the central monetary authority.
              </p>
            </div>
            <div>
              <h2>Manual Swap </h2>
              <p>
                After the initial release, we conducted fresh new interviews
                with users and most indicated interest to have more control over
                the way they intend to trade their assets. For buyers, they made
                us understand that it was increasingly getting expensive to use
                the “instant swap” option. We had to redesign the flow to
                support this new feature in order to solve this user pain point.
                This method works like the peer to peer method. Here buyers
                search through listings while sellers can also list their asset
                for sale. We examined existing platforms and how they worked.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="double-cover">
        <div className="col">
          <h3>
            We also spoke to a few users who also use these platforms. We
            discovered 2 underlying problems that marred this method:
          </h3>
          <ol>
            <li>
              Trade listers suffered from blockchain transfer charges by having
              to fulfill many orders regardless of the quantity purchased. In
              most cases, these charges are fixed. At the end of day, they lose
              profits to charges.
            </li>
            <li>
              There were severe cases of false payments made to the seller.{" "}
            </li>
          </ol>
        </div>
        <div className="col col-2">
          <h3>We solved this problem by using the Hicks law.</h3>
          <div className="semi-row">
            <p>
              By ensuring the quantity of assets a buyer can buy is not open
              ended, a buyer is compelled to swap either 20%, 40%, 60%, 80% or
              100% of the listed asset. For sellers, manual swap served as a
              cheaper alternative to swap.
            </p>
            <p>
              To ensure security and transaction transparency, swapmonkey
              provided the escrow feature in which all assets included in the
              listing will be locked and will only be made available to both
              parties upon successful swap.
            </p>
          </div>
        </div>
      </section>
      <section className="section-sample">
        <div className="col">
          <Image src={SwapMonkeyUSDT} alt="SwapMonkeyUSDT" />
        </div>
        <div className="col">
          <h2>
            A simple and intuitive way to create swap listing (.gif) Step in
            listing
          </h2>
          <ol>
            <li>Select tokens you want to swap</li>
            <li>Set minimum and available amount</li>
            <li>Set your swap rate</li>
            <li>Publish</li>
          </ol>
        </div>
      </section>
      <section className="section-rework">
        <div className="col-1">
          <h1>Reworked Manual Swap</h1>
          <p>
            We reiterated on the second design after a brainstorming and a few
            loopholes were discovered.
          </p>
          <ol>
            <li>
              Swapping in percentages distorts the volume of the asset left to
              swap in a listing. In the case where 100% of a swap is not made by
              a buyer, refactoring the remaining percentage of assets left
              between 20% -100% messes up the volume of the asset in the trade.
              It therefore becomes an endless cycle
            </li>
            <li>
              From research, buyers come to the platform to buy a particular
              fiat value of crypto. By using the percentage method, there is a
              very high chance that the percentages stated is either higher or
              lower than the buyers budget, hence a mismatch
            </li>
          </ol>
          <p>
            To remedy this, we reverted back to the open mechanism of allowing a
            user input the amount of asset type he wishes to buy from the asset
            listed. An intuitive filtering method is also implemented to allow
            users filter through the listings based on what they intend to swap
          </p>
        </div>
        <div className="col-2">
          <Image src={SwapMonkey3} alt="SwapMonkey3" />
        </div>
      </section>
      <section className="section-monkey">
        <Image src={SwapMonkeyWithFrame} alt="Monkey Group" />
        <a href="http://swapmonkey.io/" rel="noreferrer" target="_blank">
          <GradientTxt>
            Visit Website
            <Arrow direction="right" />
          </GradientTxt>
        </a>
      </section>
      <section>
        <Image src={MonkeyGroup} alt="Monkey Group" />
      </section>
      <section className="section-lession">
        <h1>
          <GradientTxt>Lesson from SwapMonkey</GradientTxt>
        </h1>
        <div className="list-container">
          {[
            "I built my first ever comprehensive design system in Figma using insights from Legacy systems like Carbon Design system. This helped to scale down design production time by 5X. The system served as a go-to arsenal for new designers joining the team.",
            "Building crypto projects involved currency conversions and quotes generation hence the need for clarity. By working on this project, I learnt how to integrate all these components in a clear and concise manner for users.",
          ].map((item, index) => (
            <div key={index} className="list-item">
              <CupPin />
              {item}
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
