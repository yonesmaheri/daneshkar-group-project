import React from 'react'
import clsx from 'clsx'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
}

const Button = ({ variant = 'primary', className, ...props }: ButtonProps) => {
  const base = 'px-4 py-2 rounded-lg font-medium shadow transition-colors text-white' // 👈 text-white اضافه شد

  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600',
    secondary: 'bg-slate-100 text-slate-800 hover:bg-slate-200' // متن برای secondary هم مشخص شد
  }

  const colorClasses = variant === 'primary' ? variants.primary : variants.secondary

  return <button className={clsx(base, colorClasses, className)} {...props} />
}

export default Button