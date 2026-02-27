import React from 'react'
import clsx from 'clsx'

type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={clsx(
        'w-full border border-slate-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition',
        className
      )}
      {...props}
    />
  )
}

export default Input