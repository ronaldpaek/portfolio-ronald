import Image from 'next/image'

const Logo = () => {
  return (
    <div>
      <Image
        src="/logo.svg"
        alt="logo"
        width={44}
        height={44}
        className="h-10 w-auto"
        priority
      />
    </div>
  )
}

export default Logo
