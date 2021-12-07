import Link from 'next/link'
import { Avatar } from '../../asset/convertedSvgs'
import Container from './styles'

const TopNav = () => {
  const handleScrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    })
  }

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
            <button className="withCircle" onClick={handleScrollToBottom}>
              Let's Chat
            </button>
          </nav>
        </div>
      </div>
    </Container>
  )
}

export default TopNav
