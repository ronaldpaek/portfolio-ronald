import clsx from 'clsx'

interface ContainerProps {
  className?: string
  children: React.ReactNode
}

const Container = ({ className, children }: ContainerProps) => {
  return (
    <div className={clsx('mx-auto max-w-7xl px-6 lg:px-8', className)}>
      {children}
    </div>
  )
}

export default Container
