import {
  JavaScriptIcon,
  ReactIcon,
  ReduxIcon,
  NextIcon,
  TypeScriptIcon,
  HtmlIcon,
  CssIcon,
  SassIcon,
  MuiIcon,
  TailwindIcon,
  MotionIcon,
  GitIcon,
  GithubIcon,
  NodeIcon,
  ExpressIcon,
  MongoIcon,
} from '@/components/Icons'

const icons = [
  JavaScriptIcon,
  ReactIcon,
  ReduxIcon,
  NextIcon,
  TypeScriptIcon,
  HtmlIcon,
  CssIcon,
  SassIcon,
  MuiIcon,
  TailwindIcon,
  MotionIcon,
  GitIcon,
  GithubIcon,
  NodeIcon,
  ExpressIcon,
  MongoIcon,
]

const Skills = () => {
  return (
    <section>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-9 px-6 py-6 lg:px-8">
        <h2 className="text-3xl font-bold sm:text-5xl">
          My
          <span className="relative leading-snug">
            <span
              className="absolute -inset-x-1 bottom-0 top-[65%] bg-[#FFBE62]"
              aria-hidden="true"
            />
            <span className="relative">Skills</span>
          </span>
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {icons.map((Icon, index) => (
            <div
              key={index}
              className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-[#F6F6F6]"
            >
              <Icon />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
