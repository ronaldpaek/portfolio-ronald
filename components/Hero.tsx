import Image from 'next/image'

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-[72px]">
      <div className="py-8 mx-auto grid min-h-screen max-w-7xl grid-cols-1 content-center gap-8 px-6 lg:grid-cols-2 lg:px-8 lg:py-32">
        <div className="order-last col-span-1 flex flex-col gap-9 lg:order-first">
          <h1 className="text-lg font-bold uppercase tracking-widest">
            Hi, I am Ronald
          </h1>
          <h2 className="text-5xl font-bold leading-snug">
            Professional
            <br />
            <span className="relative">
              <span
                className="absolute inset-x-0 bottom-0 top-[65%] block bg-yellow-600"
                aria-hidden="true"
              />
              <span className="relative">Web Developer</span>
            </span>
            <br />
            based in USA
          </h2>
          <p className="leading-loose">
            Transforming the web one line of code at a time: Crafting
            cutting-edge digital experiences with precision, passion, and a
            profound commitment to excellence
          </p>
          <div className="flex items-center justify-between">
            <button className="rounded-full bg-gradient-to-r from-[#4CE1EC] to-[#CC5EEF] px-5 py-3">
              Contact Me
            </button>
            <nav>
              <ul className="flex gap-9">
                <li>
                  <a href="#">
                    <Image
                      src="/instagram.svg"
                      alt="instagram"
                      width={28}
                      height={28}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      src="/dribble.svg"
                      alt="dribble"
                      width={28}
                      height={28}
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image
                      src="/behance.svg"
                      alt="behance"
                      width={28}
                      height={28}
                    />
                  </a>
                </li>
              </ul>
            </nav>
            <div>
              <Image src="/line.svg" alt="line" width={107} height={0} />
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="aspect-[9/10] rotate-2">
            <Image src="/profile.png" alt="profile" fill />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
