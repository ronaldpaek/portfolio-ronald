'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-indigo-100/50 pt-[80px]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 content-start gap-8 px-6 py-8 lg:grid-cols-2 lg:content-center lg:px-8 lg:py-32">
        <div className="order-last col-span-1 flex flex-col gap-9 text-center lg:order-first lg:text-left">
          <h1 className="text-base font-bold tracking-widest sm:text-lg">
            {`Hey, I'm Ronald`}
          </h1>
          <h2 className="text-3xl font-bold leading-snug sm:text-5xl">
            Professional <br className="hidden lg:block" />
            <span className="relative leading-snug">
              <span
                className="absolute -inset-x-1 bottom-0 top-[65%] hidden bg-[#FFBE62] md:block"
                aria-hidden="true"
              />
              <span className="relative">Web Developer</span>
            </span>
            <br />
            based in USA
          </h2>
          <p className="text-sm sm:text-base">
            Transforming the web one line of code at a time. Crafting
            cutting-edge digital experiences with precision, passion, and a
            profound commitment to excellence.
          </p>
          <nav>
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
                    <Image
                      src="/github.svg"
                      alt="github"
                      width={28}
                      height={28}
                    />
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
                    <Image
                      src="/email.svg"
                      alt="email"
                      width={28}
                      height={28}
                    />
                  </motion.a>
                </li>
              </ul>
            </motion.div>
          </nav>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <Image
            src="/profile.png"
            alt="profile"
            width={300}
            height={300}
            priority
            className="relative aspect-[4/3] w-full max-w-xl rotate-2 overflow-hidden rounded-xl bg-zinc-100 object-cover object-top dark:bg-zinc-800 sm:rounded-2xl"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
