import clsx from 'clsx'
import Link from 'next/link'

interface ButtonProps {
  href?: string
  className?: string
  children: React.ReactNode
}

const Button = ({ href, className, children, ...props }: ButtonProps) => {
  className = clsx(
    className,
    'inline-flex rounded-full px-4 py-1.5 text-sm font-semibold',
  )

  const inner = <span className="relative top-px">{children}</span>

  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {inner}
      </Link>
    )
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}

export default Button
