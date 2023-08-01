import React from 'react'

const Experience = () => {
  return (
    <section>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-9 px-6 py-6 lg:flex-row lg:px-8">
        <div className="flex flex-col bg-[#151E2C] text-white">
          <span className="h-4 w-4 rounded-full bg-[#99E0FF]" />
          <h2 className="text-3xl font-bold sm:text-5xl">
            Work
            <br />
            <span className="relative leading-snug">
              <span
                className="absolute -left-1 bottom-0 right-[30%] top-[65%] bg-[#FFBE62]"
                aria-hidden="true"
              />
              <span className="relative">Experience</span>
            </span>
          </h2>
          <p>
            Progress and milestones: A simplewalkthrough of roles, projects, and
            achievements in my career.
          </p>
          <div className="flex">
            <span className="flex-1" />
            <span className="flex h-[70px] w-[70px] items-center justify-center rounded-full border border-blue-200">
              <span className="h-[44px] w-[44px] rounded-full bg-slate-100" />
            </span>
          </div>
        </div>

        <div></div>
      </div>
    </section>
  )
}

export default Experience
