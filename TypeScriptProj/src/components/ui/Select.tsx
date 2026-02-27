import { useState, useRef, useEffect } from 'react'
import clsx from 'clsx'

type Option = {
  label: string
  value: string
}

type SelectProps = {
  value: string
  onChange: (value: string) => void
  options: Option[]
  placeholder?: string
}

const Select = ({ value, onChange, options, placeholder }: SelectProps) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const selected = options.find(o => o.value === value)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative w-full" ref={ref}>
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full border border-slate-300 rounded-md px-3 py-2 text-left bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 flex justify-between items-center"
      >
        <span className="text-slate-700">
          {selected ? selected.label : placeholder}
        </span>
        <span className="text-slate-400">▾</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 mt-1 w-full bg-white border border-slate-200 rounded-md shadow-lg z-50 animate-fadeIn">
          {options.map(option => (
            <div
              key={option.value}
              onClick={() => {
                onChange(option.value)
                setOpen(false)
              }}
              className={clsx(
                'px-3 py-2 cursor-pointer hover:bg-blue-50 transition',
                value === option.value && 'bg-blue-100'
              )}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Select