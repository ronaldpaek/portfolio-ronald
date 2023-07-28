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
    'inline-flex rounded-full -mx-4.5 py-1.5 -my-1.5 text-sm font-semibold',
  )

  if (href) {
    return (
      <Link href={href} className={className} {...props}>
        {children}
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
