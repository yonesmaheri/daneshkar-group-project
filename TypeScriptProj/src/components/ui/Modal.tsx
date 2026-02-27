import React from 'react'

type ModalProps = {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal = ({ open, onClose, children }: ModalProps) => {
  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md relative">
        <button
          className="absolute top-3 right-3 text-slate-500 hover:text-slate-700"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  )
}

export default Modal