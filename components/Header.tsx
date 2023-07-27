import Link from 'next/link'
import Image from 'next/image'

import { Logo, Button } from '@/components'

const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Ronald&apos;s Portfolio</span>
          <Logo />
        </Link>
        <ul className="flex items-center gap-9">
          <li>
            <Link href="/case-studies" className="-m-1.5 p-1.5 uppercase">
              Case Studies
            </Link>
          </li>
          <li>
            <Link href="/contact" className="-m-1.5 p-1.5 uppercase">
              Contact
            </Link>
          </li>
          <li className="flex items-center">
            <Button className="-mx-4 gap-1 text-base font-normal uppercase">
              <Image src="download.svg" alt="download" width={20} height={20} />
              Resume
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
