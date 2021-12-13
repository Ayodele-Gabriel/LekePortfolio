import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import { Avatar } from '../../asset/convertedSvgs'
import Container from './styles'

const Footer = () => {
  return (
    <Container>
      <h1>Get in touch</h1>
      <p>
        <a href="mailto:aygideon14@gmail.com ">
          aygideon14@gmail.com <FiArrowUpRight />
        </a>
      </p>
      <p>
        <a href="tell:+234 703 180 6369">
          +234 703 180 6369
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
