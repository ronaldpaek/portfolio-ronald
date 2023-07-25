import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="container absolute top-9 flex justify-center px-4">
      <nav className="flex w-full max-w-7xl justify-between">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={45} height={45} priority />
        </Link>
        <ul className="flex items-center gap-9">
          <li>
            <Link href="/home" className="uppercase">
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
    </div>
  );
};

export default Navbar;
