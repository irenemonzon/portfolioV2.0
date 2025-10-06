import { useEffect } from 'react'

type ToastProps = {
  message: string
  onClose: () => void
  duration?: number
}

export default function Toast({ message, onClose, duration = 3000 }: ToastProps) {
  useEffect(() => {
    const t = setTimeout(() => onClose(), duration)
    return () => clearTimeout(t)
  }, [duration, onClose])

  return (
    <div className="fixed right-4 bottom-4 z-50">
      <div className="max-w-sm w-full bg-emerald-600 text-white px-4 py-3 rounded shadow-lg">
        <div className="text-sm font-medium">{message}</div>
      </div>
    </div>
  )
}
