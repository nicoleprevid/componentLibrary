import { RefObject, useEffect } from 'react'

const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])'
].join(', ')

interface UseModalOptions {
  dialogRef: RefObject<HTMLDivElement>
  open: boolean
  onClose: () => void
}

export const useModal = ({ dialogRef, open, onClose }: UseModalOptions) => {
  useEffect(() => {
    if (!open) return

    const dialog = dialogRef.current
    if (!dialog) return

    const previousActiveElement = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const focusableElements = Array.from(dialog.querySelectorAll<HTMLElement>(focusableSelector))
    const firstFocusable = focusableElements[0]
    const lastFocusable = focusableElements[focusableElements.length - 1]
    const originalOverflow = document.body.style.overflow

    // D12: Interatividade Teclado
    // O modal gerencia navegacao por teclado em um unico ponto de comportamento.
    document.body.style.overflow = 'hidden'
    ;(firstFocusable ?? dialog).focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (focusableElements.length === 0) {
        if (event.key === 'Tab') {
          event.preventDefault()
          dialog.focus()
        }
        return
      }

      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault()
        const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement)
        const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % focusableElements.length : 0
        focusableElements[nextIndex]?.focus()
        return
      }

      if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault()
        const currentIndex = focusableElements.indexOf(document.activeElement as HTMLElement)
        const previousIndex =
          currentIndex >= 0 ? (currentIndex - 1 + focusableElements.length) % focusableElements.length : 0
        focusableElements[previousIndex]?.focus()
        return
      }

      if (event.key !== 'Tab') return

      // D12: Interatividade Teclado
      // `Tab` e `Shift+Tab` permanecem dentro do dialogo para evitar fuga de contexto.
      if (event.shiftKey && document.activeElement === firstFocusable) {
        event.preventDefault()
        lastFocusable?.focus()
        return
      }

      if (!event.shiftKey && document.activeElement === lastFocusable) {
        event.preventDefault()
        firstFocusable?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', handleKeyDown)
      // D12: Interatividade Teclado
      // O foco retorna ao gatilho anterior para manter continuidade de navegacao.
      previousActiveElement?.focus()
    }
  }, [dialogRef, onClose, open])
}
