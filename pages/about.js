import { workHistory, licenseCertification } from "../constant";
import Container from "../StyleComponents/about";

export default function About() {
  return (
    <Container>
      <section className="jumbotron--item">
        <h1>
          I build products that
          <br /> break rules, spark curiosity, 
          <br /> and move business forward.
        </h1>
        <hr />
        <div className="about">
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
        </div>
      </section>
      <section
        id="workHistory"
        className="list--cover"
        style={{ paddingTop: "4em" }}
      >
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
                {/* <p>{item.date}</p> */}
              </div>
              <p className="detail">{item.details}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
