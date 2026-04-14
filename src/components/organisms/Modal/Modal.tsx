import { ReactNode, useEffect, useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Button } from '../../atoms/Button/Button'
import { classNames } from '../../../utils/classNames'
import './Modal.css'

export interface ModalProps {
  open: boolean
  title?: ReactNode
  description?: ReactNode
  children?: ReactNode
  footer?: ReactNode
  onClose: () => void
  closeLabel?: string
  className?: string
}

export const Modal = ({
  open,
  title,
  description,
  children,
  footer,
  onClose,
  closeLabel = 'Fechar modal',
  className
}: ModalProps) => {
  const dialogRef = useRef<HTMLDivElement>(null)
  const titleId = useId()
  const descriptionId = useId()

  useEffect(() => {
    if (!open) return
    dialogRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div className="ui-modal" role="presentation">
      <div className="ui-modal__backdrop" onClick={onClose} aria-hidden="true" />
      <div
        className={classNames('ui-modal__dialog', className)}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={description ? descriptionId : undefined}
        tabIndex={-1}
        ref={dialogRef}
      >
        <div className="ui-modal__header">
          <div>
            {title && (
              <h2 className="ui-modal__title" id={titleId}>
                {title}
              </h2>
            )}
            {description && (
              <p className="ui-modal__description" id={descriptionId}>
                {description}
              </p>
            )}
          </div>
          <Button
            variant="ghost"
            color="neutral"
            className="ui-modal__close"
            aria-label={closeLabel}
            onClick={onClose}
          >
            x
          </Button>
        </div>
        <div className="ui-modal__body">{children}</div>
        {footer && <div className="ui-modal__footer">{footer}</div>}
      </div>
    </div>,
    document.body
  )
}
