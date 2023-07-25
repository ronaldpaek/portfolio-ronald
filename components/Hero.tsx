import Image from "next/image";

const Hero = () => {
  return (
    <div className="my-40 grid min-h-screen grid-cols-2">
      <div className="col-span-1">
        <h1 className="uppercase">Hi, I am Ronald</h1>
        <h2>
          Professional
          <br />
          <span className="relative">
            <span
              className="absolute -inset-1 block -skew-y-3 bg-yellow-600"
              aria-hidden="true"
            />
            <span className="relative">Web Developer</span>
          </span>
          <br />
          based in USA
        </h2>
        <p>
          Transforming the web one line of code at a time: Crafting cutting-edge
          digital experiences with precision, passion, and a profound commitment
          to excellence
        </p>
        <div className="flex items-center justify-between">
          <button className="rounded-full bg-blue-500 px-5 py-3">
            Contact Us
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
        <Image src="/man.svg" alt="man" width={900} height={600} />
      </div>
    </div>
  );
};

export default Hero;
