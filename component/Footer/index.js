import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import { Avatar } from '../../asset/convertedSvgs'
import Container from './styles'

const Footer = () => {
  return (
    <Container>
      <h1>Get in touch</h1>
      <p>
        <a href="mailto:hello@lekeayodele.com">
          hello@lekeayodele.com <FiArrowUpRight />
        </a>
      </p>
      <p>
        <a href="tell:+12 345 678 9012">
          +12 345 678 9012
          <FiArrowUpRight />
        </a>
      </p>
      <p>
        <a
          href="https://www.linkedin.com/in/ayodele-adeleke-gideon-968bb3161/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn <FiArrowUpRight />
        </a>
      </p>
    </Container>
  )
}

export default Footer
