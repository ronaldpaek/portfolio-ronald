'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className="container mb-16 mt-24">
      <div className="mb-12 flex w-full flex-col rounded-2xl bg-blue-300">
        <h2>
          Have a project idea to
          <br />
          <span className="relative">
            <span
              className="absolute -inset-1 block -skew-y-3 bg-yellow-600"
              aria-hidden="true"
            />
            <span className="relative">collaborate on?</span>
          </span>
        </h2>
        <button className="w-fit rounded-full bg-white px-5 py-3 text-slate-950">
          Contact Us
        </button>
      </div>
      <nav className="flex justify-center">
        <motion.div className="">
          <ul className="flex items-center justify-center gap-9 lg:justify-start">
            <li className="flex">
              <motion.a
                target="_blank"
                href="https://github.com/ronaldpaek"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Github"
                className="-m-1.5 inline-flex p-1.5"
              >
                <Image src="/github.svg" alt="github" width={28} height={28} />
              </motion.a>
            </li>
            <li className="flex">
              <motion.a
                target="_blank"
                href="https://www.linkedin.com/in/ronaldpaek/"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="LinkedIn"
                className="-m-1.5 inline-flex p-1.5"
              >
                <Image
                  src="/linkedin.svg"
                  alt="linkedin"
                  width={28}
                  height={28}
                />
              </motion.a>
            </li>
            <li className="flex">
              <motion.a
                href="mailto:ronaldpaek@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Email"
                className="-m-1.5 inline-flex p-1.5"
              >
                <Image src="/email.svg" alt="email" width={28} height={28} />
              </motion.a>
            </li>
          </ul>
        </motion.div>
      </nav>
    </footer>
  )
}

export default Footer
