import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Lottie from 'react-lottie'
import { GradientTxt } from '../component'
import { Arrow } from '../asset/convertedSvgs'
import { BsArrowRight } from 'react-icons/bs'
import { FiArrowUpRight } from 'react-icons/fi'
import { device, device2 } from '../asset/png'
import gradientAnimation from '../asset/lottie/434-gradient-animated-background.json'
import Container from '../StyleComponents/home'

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
                preserveAspectRatio: 'xMidYMid slice',
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
            <span>ABOUT ME</span> Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Donec urna ante, pulvinar eget maximus in, ultrices
            at quam. Donec dictum sagittis enim, venenatis cursus lacus. Morbi
            efficitur eleifend elit nec mollis. Donec eu facilisis nunc, quis
            placerat nibh. Suspendisse sed tellus vitae lorem fringilla interdum
            ac pretium justo.{' '}
          </h3>
          <Link href="/">
            <a>
              View Work History <BsArrowRight />
            </a>
          </Link>
        </section>
        <section className="userDetails--container">
          <div className="item--row">
            <div className="col--1">
              <Image src={device} alt="device" />
            </div>
            <div className="col--2">
              <h1>
                Building Africa’s first decentralized peer-to peer cypto trading
                platform
              </h1>
              <ol className="details">
                <li>
                  <span>Client</span>
                  <span>FLUX</span>
                </li>
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
              <Link href="/swapmonkey">
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
                  <span>FLUX</span>
                </li>
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
              <Link href="/flux">
                <a>
                  <GradientTxt>View Project</GradientTxt>
                  <Arrow direction="right" />
                </a>
              </Link>{' '}
            </div>
          </div>
        </section>
      </div>
    </Container>
  )
}
