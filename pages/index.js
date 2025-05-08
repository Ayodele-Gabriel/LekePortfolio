import Image from "next/image";
import Link from "next/link";
import Lottie from "react-lottie";
import { GradientTxt } from "../component";
import { Arrow } from "../asset/convertedSvgs";
import { BsArrowRight } from "react-icons/bs";
import { device, device2, Payso } from "../asset/png";
import gradientAnimation from "../asset/lottie/434-gradient-animated-background.json";
import Container from "../StyleComponents/home";

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
          I build usable digital
          <br /> products that help
          <br /> achieve business goals.
        </h1>
        <ol className="details">
          <li>
            <span>Currently in</span>
            <span>London, UK</span>
          </li>
          <li>
            <span>Focused on</span>
            <span>
              Measurable metric and the positive impact of the solution
            </span>
          </li>
          <li>
            <span>Working with</span>
            <span>Brands, Startups, Individuals</span>
          </li>
        </ol>
        <Link href="/about">
          <a>
            More About Me <BsArrowRight />
          </a>
        </Link>
      </section>
      <div className="content">
        <section className="section--about">
          <h3>
            <span>ABOUT ME</span> I am a digital product designer focused on
            creating amazing and intuitive experiences for users. I do this
            while ensuring it solves business and product goals. I have a strong
            background in Fintech and I possess a smooth collaboration workflow
            with engineering teams. I am also curious about how emerging
            technologies affect our daily lives and the strong ability it
            possesses to deepen human experiences.
          </h3>
          <Link href="/about#workHistory">
            <a>
              View Work History <BsArrowRight />
            </a>
          </Link>
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
                {/* <li>
                  <span>Date</span>
                  <span>2023</span>
                </li> */}
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
              <Image src={Payso} alt="device" />
            </div>
          </div>
        </section>
        <section className="userDetails--container">
          <div className="item--row">
            <div className="col--1">
              <Image src={device} alt="device" />
            </div>
            <div className="col--2">
              <h1>
                Redesigning the identification and payment experience for
                Nigeria’s foremost neobank
              </h1>
              <ol className="details">
                <li>
                  <span>Client</span>
                  <span>FLUX</span>
                </li>
                {/* <li>
                  <span>Date</span>
                  <span>2022</span>
                </li> */}
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
              <Image src={device2} alt="device" />
            </div>
            <div className="col--2">
              <h1>
                Building Africa’s first decentralized peer-to peer cypto trading
                platform
              </h1>
              <ol className="details">
                <li>
                  <span>Client</span>
                  <span>SWAPMONKEY</span>
                </li>
                {/* <li>
                  <span>Date</span>
                  <span>2022</span>
                </li> */}
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
