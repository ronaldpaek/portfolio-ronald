import Image from 'next/image'

const Logo = () => {
  return (
    <>
      {/* <Image src="/rocket.svg" alt="logo" width={48} height={48} /> */}
      <Image src="/logo.svg" alt="logo" width={48} height={48} />
    </>
  )
}

export default Logo
