import React from 'react'
import Image from 'next/image'

const CaseStudies = () => {
  return (
    <div className="grid min-h-screen place-content-center">
      <Image
        src="/logo.svg"
        alt="logo"
        width={48}
        height={48}
        className="hover:animate-spin-slow"
      />
    </div>
  )
}

export default CaseStudies
