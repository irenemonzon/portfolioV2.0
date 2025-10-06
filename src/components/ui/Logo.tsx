type Props = {
  size?: number
  className?: string
}

export default function Logo({ size = 40, className = '' }: Props) {
  const px = Math.max(24, size)
  return (
    <div
      className={`rounded-full flex items-center justify-center text-white font-bold ${className}`}
      style={{
        width: px,
        height: px,
        background: 'linear-gradient(90deg, #60A5FA 0%, #A78BFA 50%, #06B6D4 100%)'
      }}
      aria-hidden
    >
      <span style={{ fontSize: Math.round(px / 2.2), lineHeight: 1, color: '#ffffff' }}>{'IM'}</span>
    </div>
  )
}
