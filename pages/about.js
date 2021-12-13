import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Lottie from 'react-lottie'
import { BsArrowRight } from 'react-icons/bs'
import { FiArrowUpRight } from 'react-icons/fi'
import { workHistory, licenseCertification } from '../constant'
import { device } from '../asset/png'
import Container from '../StyleComponents/about'

export default function About() {
  return (
    <Container>
      <section className="jumbotron--item">
        <h1>
          I build usable digital
          <br /> products that help
          <br /> achieve business goals.
        </h1>
        <hr />
        <h3 className="about">
          <span>ABOUT ME</span> I am a digital product designer focused on
          creating amazing and intuitive experiences for users. I do this while
          ensuring it solves business and product goals. I have a strong
          background in Fintech and I possess a smooth collaboration workflow
          with engineering teams. I am also curious about how emerging
          technologies affect our daily lives and the strong ability it
          possesses to deepen human experiences.
        </h3>
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
      </section>
      <section className="list--cover">
        <h1>Work History</h1>
        <div className="list--container">
          {workHistory.map((item, index) => (
            <div className="list--item" key={`work-${index}`}>
              <div className="top--row">
                <p>{item.title}</p>
                <p>{item.date}</p>
              </div>
              <p className="detail">{item.details}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="list--cover">
        <h1>Licenses & Certifications</h1>
        <div className="list--container">
          {licenseCertification.map((item, index) => (
            <div className="list--item" key={`license-${index}`}>
              <div className="top--row">
                <p>{item.title}</p>
                <p>{item.date}</p>
              </div>
              <p className="detail">{item.details}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  )
}
