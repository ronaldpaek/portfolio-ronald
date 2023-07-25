import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Ronald&apos;s Portfolio</span>
          <Image src="/logo.svg" alt="logo" width={45} height={45} priority />
        </Link>
        <ul className="flex items-center gap-9">
          <li>
            <Link href="/" className="uppercase">
              Home
            </Link>
          </li>
          <li>
            <Link href="/case-studies" className="uppercase">
              Case Studies
            </Link>
          </li>
          <li>
            <Link href="/contact" className="uppercase">
              Contact
            </Link>
          </li>
          <li className="flex items-center gap-1">
            <Image src="download.svg" alt="download" width={20} height={20} />
            <Link href="/resume" className="uppercase">
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
