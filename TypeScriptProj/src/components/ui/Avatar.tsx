
import clsx from 'clsx'

type AvatarProps = {
  name: string
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: 'w-6 h-6 text-xs',
  md: 'w-8 h-8 text-xs',
  lg: 'w-10 h-10 text-sm'
}

const Avatar = ({ name, size = 'md' }: AvatarProps) => {
  return (
    <div
      className={clsx(
        'rounded-full bg-slate-200 flex items-center justify-center font-medium border',
        sizes[size]
      )}
    >
      {name.charAt(0)}
    </div>
  )
}

export default Avatar