import Image from 'next/image'

const Logo = () => {
  return (
    <div className="flex items-center gap-2 lg:gap-4">
      <div className="relative h-8 w-8">
        <Image src="/logo.svg" alt="logo" fill />
      </div>
      {/* <span className="block text-xl lg:text-2xl font-bold">Ronald Paek.</span> */}
    </div>
  )
}

export default Logo
