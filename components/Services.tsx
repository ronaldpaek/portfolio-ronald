import { services } from '@/constants'
import type { Service } from '@/constants'

const ServiceCard = ({ Icon, title, about }: Service) => (
  <div>
    <div className="flex h-10 w-10">
      <Icon />
    </div>
    <h3>{title}</h3>
    <p>{about}</p>
  </div>
)

const Services = () => {
  return (
    <section>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-9 px-6 py-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-wide sm:text-5xl">
          What{' '}
          <span className="relative leading-snug">
            <span
              className="absolute -inset-x-1 bottom-0 top-[65%] bg-[#FFBE62]"
              aria-hidden="true"
            />
            <span className="relative">service</span>
          </span>{' '}
          do I provide
        </h2>
        <div>
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
