import { HTMLAttributes, ReactNode, useId, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Button } from '../../atoms/Button/Button'
import { classNames } from '../../../utils/classNames'
import { useModal } from './useModal'
import './Modal.css'

/**
 * D14: Auto-documentacao
 * O contrato descreve entradas, areas de composicao e a saida principal do componente.
 *
 * D03: Fluxo Unidirecional
 * O modal recebe seu estado por props e sinaliza fechamento pelo callback `onClose`.
 *
 * D11: Independencia de Store
 * Nenhuma dependencia implicita de store ou contexto global e exigida para renderizar o componente.
 */
export interface ModalProps {
  /** Controla a abertura do dialogo. */
  open: boolean
  /** Titulo associado semanticamente ao dialogo. */
  title?: ReactNode
  /** Nome acessivel alternativo para dialogos sem titulo visivel. */
  ariaLabel?: string
  /** Texto descritivo do contexto do dialogo. */
  description?: ReactNode
  /** Conteudo principal do modal. */
  children?: ReactNode
  /** Area opcional de acoes. */
  footer?: ReactNode
  /** Callback externo invocado ao solicitar fechamento. */
  onClose: () => void
  /** Rotulo acessivel do botao de fechar. */
  closeLabel?: string
  /** Classe adicional para customizacao externa. */
  className?: string
  /** Define se o clique no backdrop dispara fechamento. */
  closeOnBackdrop?: boolean
}

interface ModalSectionProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

const ModalHeader = ({ children = null, className = '', ...props }: ModalSectionProps) => (
  <div className={classNames('ui-modal__header', className)} {...props}>
    {children}
  </div>
)

const ModalBody = ({ children = null, className = '', ...props }: ModalSectionProps) => (
  <div className={classNames('ui-modal__body', className)} {...props}>
    {children}
  </div>
)

const ModalFooter = ({ children = null, className = '', ...props }: ModalSectionProps) => (
  <div className={classNames('ui-modal__footer', className)} {...props}>
    {children}
  </div>
)

const ModalRoot = ({
  open,
  title = null,
  ariaLabel = undefined,
  description = null,
  children = null,
  footer = null,
  onClose,
  closeLabel = 'Fechar modal',
  className = '',
  closeOnBackdrop = true
}: ModalProps) => {
  const dialogRef = useRef<HTMLDivElement>(null)
  const titleId = useId()
  const descriptionId = useId()
  // D11: Independencia de Store
  // O comportamento depende apenas das props locais e do DOM do proprio componente.
  useModal({ dialogRef, open, onClose })

  if (!open) return null

  return createPortal(
    <div className="ui-modal" role="presentation">
      <div className="ui-modal__backdrop" onClick={closeOnBackdrop ? onClose : undefined} aria-hidden="true" />
      <div
        className={classNames('ui-modal__dialog', className)}
        role="dialog"
        aria-modal="true"
        aria-label={ariaLabel}
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={description ? descriptionId : undefined}
        tabIndex={-1}
        ref={dialogRef}
      >
        {/* D08: Desacoplamento Visual
            A renderizacao so escolhe classes e areas; o estilo permanece isolado no CSS. */}
        {/* D15: Estados Visuais
            O estado aberto e demonstrado nas stories com variacoes de acao e interacao. */}
        <ModalHeader>
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
            variant="neutral"
            appearance="ghost"
            size="sm"
            className="ui-modal__close"
            aria-label={closeLabel}
            onClick={onClose}
          >
            <span aria-hidden="true">&times;</span>
          </Button>
        </ModalHeader>
        {/* D09: Inversao de Controle
            `children` e `footer` permitem que o consumidor controle o conteudo e as acoes. */}
        <ModalBody>{children}</ModalBody>
        {footer && <ModalFooter>{footer}</ModalFooter>}
      </div>
    </div>,
    document.body
  )
}

// D10: Composicao Modular
// Header, Body e Footer permitem adaptar o layout sem criar variacoes rigidas do modal.
type ModalComponent = typeof ModalRoot & {
  Header: typeof ModalHeader
  Body: typeof ModalBody
  Footer: typeof ModalFooter
}

export const Modal = Object.assign(ModalRoot, {
  Header: ModalHeader,
  Body: ModalBody,
  Footer: ModalFooter
}) as ModalComponent
