import Image from "next/image";
import Link from "next/link";
import Lottie from "react-lottie";
import { GradientTxt } from "../component";
import { Arrow } from "../asset/convertedSvgs";
import { BsArrowRight } from "react-icons/bs";
import { device, device2, Payso } from "../asset/png";
import gradientAnimation from "../asset/lottie/434-gradient-animated-background.json";
import Container from "../StyleComponents/home";

const FreeDashboard = "/jobgap/Screenshot-2026-03-16-08.00.23-1.webp";

export default function Home() {
  return (
    <Container>
      <section className="jumbotron--item">
        <div className="animation--container">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: gradientAnimation,
              rendererSettings: {
                preserveAspectRatio: "xMidYMid slice",
              },
            }}
          />
        </div>
        <h1>
          I build products that
          <br /> break rules, spark curiosity, 
          <br /> and move business forward.
        </h1>

      </section>
      <div className="content">
        <section className="section--about">
          <p>
            I design for complexity — payments infrastructure, fraud systems, AI automation platforms. The kind of products where a wrong decision is expensive and a confusing interface makes it worse.
          </p>
          <p>
            Most of my work lives at the intersection of technical systems and the people who have to act on them — fraud officers making split-second calls, merchants managing money across borders, professionals trying to navigate a job market that doesn&apos;t slow down for them. My job is to make that complexity disappear at the interface level without pretending it doesn&apos;t exist underneath.
          </p>
          <p>
            I&apos;ve been doing this across fintech and AI for 5 years — from founding designer at payment processors to leading product design at an AI automation platform used by 10,000+ people. I work end-to-end, I&apos;m close to engineering, and I care about whether the thing actually shipped and whether it worked.
          </p>
          <p className="about--availability">
            Based in London. Currently open to senior product design roles in fintech, AI and complex B2B products.
          </p>
          <Link href="/about#workHistory">
            <a>
              View Work History <BsArrowRight />
            </a>
          </Link>
        </section>
        <section className="userDetails--container">
          <div className="item--row">
            <div className="col--2">
              <h1>
                Turning a struggling job-seeker toolkit into an automated
                AI-powered application engine
              </h1>
              <ol className="details">
                <li>
                  <span>Client</span>
                  <span>JOBGAP AI</span>
                </li>
                <li>
                  <span>Role</span>
                  <span>
                    Growth Product Design, Conversion Optimisation,
                    Behavioural Analytics
                  </span>
                </li>
              </ol>
              <Link href="/jobgap">
                <a>
                  <GradientTxt>View Project</GradientTxt>
                  <Arrow direction="right" />
                </a>
              </Link>
            </div>
            <div className="col--1">
              <Image src={FreeDashboard} alt="JobGap AI Dashboard" width={1200} height={800} layout="responsive" unoptimized={true} />
            </div>
          </div>
        </section>
        <section className="userDetails--container section-payso">
          <div className="item--row">
            <div className="col--2">
              <h1>Building a global fiat infrastructure for Crypto payments</h1>
              <ol className="details">
                <li>
                  <span>Client</span>
                  <span>PAY.SO</span>
                </li>
                <li>
                  <span>Role</span>
                  <span>
                    UX strategy, Wireframing, UI Design, Prototyping, Customer
                    Interviews
                  </span>
                </li>
              </ol>
              <Link href="/cryptoInfra">
                <a>
                  <GradientTxt>View Project</GradientTxt>
                  <Arrow direction="right" />
                </a>
              </Link>{" "}
            </div>
            <div className="col--1">
              <Image src={Payso} alt="device" unoptimized={true} />
            </div>
          </div>
        </section>
        <section className="userDetails--container">
          <div className="item--row">
            <div className="col--1">
              <Image src={device} alt="device" unoptimized={true} />
            </div>
            <div className="col--2">
              <h1>
                Redesigning the identification and payment experience for
                Nigeria&apos;s foremost neobank
              </h1>
              <ol className="details">
                <li>
                  <span>Client</span>
                  <span>FLUX</span>
                </li>
                <li>
                  <span>Role</span>
                  <span>
                    UX strategy, Wireframing, UI Design, Prototyping, Customer
                    Interviews
                  </span>
                </li>
              </ol>
              <Link href="/flux">
                <a>
                  <GradientTxt>View Project</GradientTxt>
                  <Arrow direction="right" />
                </a>
              </Link>
            </div>
          </div>
        </section>
        <section className="userDetails--container">
          <div className="item--row">
            <div className="col--1">
              <Image src={device2} alt="device" unoptimized={true} />
            </div>
            <div className="col--2">
              <h1>
                Building Africa&apos;s first decentralized peer-to peer cypto trading
                platform
              </h1>
              <ol className="details">
                <li>
                  <span>Client</span>
                  <span>SWAPMONKEY</span>
                </li>
                <li>
                  <span>Role</span>
                  <span>
                    UX strategy, Wireframing, UI Design, Prototyping, Customer
                    Interviews
                  </span>
                </li>
              </ol>
              <Link href="/swapmonkey">
                <a>
                  <GradientTxt>View Project</GradientTxt>
                  <Arrow direction="right" />
                </a>
              </Link>{" "}
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}