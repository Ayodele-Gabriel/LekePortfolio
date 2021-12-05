import Link from 'next/link'
import { Avatar } from '../../asset/convertedSvgs'
import Container from './styles'

const TopNav = () => {
  return (
    <Container>
      <div className="content--container">
        <div className="col--1">
          <Link href="/">
            <a>
              <Avatar />
              <p>Leke Ayodele</p>
            </a>
          </Link>
        </div>
        <div className="col--2">
          <nav>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/" className="withCircle">
              <a>Let's Chat</a>
            </Link>
          </nav>
        </div>
      </div>
    </Container>
  )
}

export default TopNav
