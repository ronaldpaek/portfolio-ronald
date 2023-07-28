'use client'


import Link from 'next/link'
import Image from 'next/image'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

import { Logo, Container } from '@/components'

interface MobileNavLinkProps {
  children: React.ReactNode
  href: string
}

const MobileNavLink = ({ children, ...props }: MobileNavLinkProps) => {
  return (
    <Popover.Button
      as={Link}
      className="block text-base leading-7 tracking-tight text-gray-700"
      {...props}
    >
      {children}
    </Popover.Button>
  )
}

const Header = () => {

  return (
    <header className="">
      <nav className="absolute inset-x-0 top-0 z-50">
        <Container className="flex items-center justify-between py-6">
          <div className="relative z-10 flex w-full justify-between">
            <Link href="/" aria-label="Home">
              <Logo fill="#000" />
            </Link>
            <ul className="hidden lg:flex lg:items-center lg:gap-9">
              <li>
                <Link href="/case-studies" className="-m-1.5 p-1.5 uppercase">
                  Case Studies
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  href="/resume"
                  className="-m-1.5 flex items-center p-1.5 uppercase"
                >
                  <Image
                    src="/resume.svg"
                    alt="resume"
                    width={28}
                    height={28}
                  />
                  <span className="text-base font-normal">Resume</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <Popover className="lg:hidden">
              {({ open }) => (
                <>
                  <Popover.Button
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 [&:not(:focus-visible)]:focus:outline-none"
                    aria-label="Toggle site navigation"
                  >
                    {({ open }) =>
                      open ? (
                        <Image
                          src="/chevron-up.svg"
                          alt="chevron-up"
                          width={24}
                          height={24}
                        />
                      ) : (
                        <Image
                          src="/menu.svg"
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
                            <MobileNavLink href="/case-studies">
                              Case Studies
                            </MobileNavLink>
                            <MobileNavLink href="/resume">Resume</MobileNavLink>
                          </div>
                          <div className="mt-8 flex flex-col gap-4"></div>
                        </Popover.Panel>
                      </>
                    )}
                  </AnimatePresence>
                </>
              )}
            </Popover>
          </div>
        </Container>
      </nav>
    </header>
  )
}

export default Header
