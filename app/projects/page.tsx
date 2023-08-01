import Image from 'next/image'

const Projects = () => {
  return (
    <div className="grid min-h-screen place-content-center">
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

export default Projects
