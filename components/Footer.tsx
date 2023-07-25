import Image from 'next/image'

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
        <ul className="flex gap-10">
          <li>
            <a href="#">
              <Image src="/github.svg" alt="github" width={24} height={24} />
            </a>
          </li>
          <li>
            <a href="#">
              <Image
                src="/linkedin.svg"
                alt="linkedin"
                width={20}
                height={20}
              />
            </a>
          </li>
          <li>
            <a href="#">
              <Image src="/twitter.svg" alt="twitter" width={24} height={24} />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
