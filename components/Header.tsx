'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { Logo } from '@/components'

interface MobileNavLinkProps {
  children: React.ReactNode
  href: string
}

const MobileNavLink = ({ children, ...props }: MobileNavLinkProps) => (
  <Popover.Button
    as={Link}
    className="block text-base leading-7 text-gray-700 hover:text-[#06A88A]"
    {...props}
  >
    {children}
  </Popover.Button>
)

interface CustomLinkProps {
  href: string
  className: string
  title: string
}

const CustomLink = ({ href, className = '', title }: CustomLinkProps) => {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      className={clsx(
        className,
        'lg:text-light lg:dark:text-dark group relative rounded',
      )}
    >
      {title}
      <span
        className={clsx(
          'absolute bottom-0 left-0 inline-block h-px bg-[#06A88A] transition-[width] duration-300 ease-in-out group-hover:w-full',
          pathname === href ? 'w-full' : ' w-0',
        )}
      />
    </Link>
  )
}

const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <div className="relative z-10 flex w-full items-center justify-between">
          <Link href="/" aria-label="Home">
            <Logo />
          </Link>
          <ul className="hidden lg:flex lg:items-center lg:gap-9">
            <li>
              {/* <Link
                href="/projects"
                className="-m-1.5 p-1.5 uppercase text-black hover:text-[#06A88A]"
              >
                Projects
              </Link> */}
              <CustomLink
                href="/projects"
                title="Projects"
                className="-my-1 py-1 uppercase text-black"
              />
            </li>
            <li>
              {/* <Link
                href="/resume"
                className="group -m-1.5 inline-flex gap-1 p-1.5"
              >
                <span className="uppercase text-black group-hover:text-[#06A88A]">
                  Resume
                </span>
                <ExternalLinkIcon fill="#06A88A" />
              </Link> */}
              <CustomLink
                href="/resume"
                title="Resume"
                className="-my-1 py-1 uppercase text-black"
              />
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <Popover className="flex lg:hidden">
            {({ open }) => (
              <>
                <Popover.Button
                  className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
                  aria-label="Toggle site navigation"
                >
                  {({ open }) =>
                    open ? (
                      <Image
                        src="/icons/chevron-up.svg"
                        alt="chevron-up"
                        width={24}
                        height={24}
                      />
                    ) : (
                      <Image
                        src="/icons/menu.svg"
                        alt="menu"
                        width={24}
                        height={24}
                      />
                    )
                  }
                </Popover.Button>
                <AnimatePresence initial={false}>
                  {open && (
                    <>
                      <Popover.Overlay
                        static
                        as={motion.div}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur"
                      />
                      <Popover.Panel
                        static
                        as={motion.div}
                        initial={{ opacity: 0, y: -32 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{
                          opacity: 0,
                          y: -32,
                          transition: { duration: 0.2 },
                        }}
                        className="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20"
                      >
                        <div className="space-y-4">
                          <MobileNavLink href="/projects">
                            Projects
                          </MobileNavLink>
                          <MobileNavLink href="/resume">Resume</MobileNavLink>
                        </div>
                      </Popover.Panel>
                    </>
                  )}
                </AnimatePresence>
              </>
            )}
          </Popover>
        </div>
      </nav>
    </header>
  )
}

export default Header
