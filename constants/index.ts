import {
  DesignIcon,
  FrontendIcon,
  BackendIcon,
  OptimizationIcon,
} from '@/components/Icons'

export type Service = {
  id: number
  Icon: React.FC
  title: string
  about: string
}

export const services: Service[] = [
  {
    id: 1,
    Icon: DesignIcon,
    title: 'Web Design',
    about:
      'Creating visually appealing and user-friendly websites that adapt to different screen sizes and devices.',
  },
  {
    id: 2,
    Icon: FrontendIcon,
    title: 'Front-End Dev',
    about:
      'Implementing the client-side functionality of a website using HTML, CSS, and JavaScript.',
  },
  {
    id: 3,
    Icon: BackendIcon,
    title: 'Back-End Dev',
    about:
      'Building the server-side components and functionality of a website using  Node.js.',
  },
  {
    id: 4,
    Icon: OptimizationIcon,
    title: 'Web Optimization',
    about:
      'Improving website performance by optimizing page load times, and minimizing resource usage',
  },
]

export type navLink = {
  pathname: string
  title: string
}

export const navLinks: navLink[] = [
  {
    pathname: '/',
    title: 'Home',
  },
  {
    pathname: '/about',
    title: 'About',
  },
  {
    pathname: '/projects',
    title: 'Projects',
  },
  {
    pathname: '/contact',
    title: 'Contact',
  },
]
