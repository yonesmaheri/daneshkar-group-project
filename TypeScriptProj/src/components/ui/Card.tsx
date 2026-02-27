import React from 'react'
import clsx from 'clsx'

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  hover?: boolean
}

const Card = ({ children, hover = true, className, ...props }: CardProps) => {
  return (
    <div
      className={clsx(
        'bg-white rounded-xl shadow-sm border p-5 transition',
        hover && 'hover:shadow-md',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card