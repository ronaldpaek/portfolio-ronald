'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Popover } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'

import { Logo, Button } from '@/components'

const Header = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        <Link href="/" className="-m-1.5 p-1.5" aria-label="Home">
          <Logo />
        </Link>
        <ul className="hidden items-center gap-9 lg:flex">
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
      {/* Mobile Menu */}
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
                    <Image src="/menu.svg" alt="menu" width={24} height={24} />
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
                      <div className="space-y-4"></div>
                      <div className="mt-8 flex flex-col gap-4"></div>
                    </Popover.Panel>
                  </>
                )}
              </AnimatePresence>
            </>
          )}
        </Popover>
      </div>
    </header>
  )
}

export default Header
