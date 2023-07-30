import Image from 'next/image'

const Logo = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="relative h-8 w-8">
        <Image src="/logo.svg" alt="logo" fill />
      </div>
      <span className="hidden text-2xl font-bold lg:block">Ronald Paek.</span>
    </div>
  )
}

export default Logo
