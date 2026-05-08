import { HTMLAttributes, ReactNode, useId } from 'react'
import { classNames } from '../../../utils/classNames'
import { ComponentSize, SemanticVariant } from '../../../types/shared'
import './Card.css'

export type CardVariant = SemanticVariant
export type CardSize = Extract<ComponentSize, 'md' | 'lg'>

/**
 * D14: Auto-documentacao
 * O contrato do card descreve quando usar props simples e quando optar por composicao.
 *
 * D01: API Previsivel
 * O card reutiliza a mesma linguagem de variantes da biblioteca inteira.
 *
 * D10: Composicao Modular
 * O componente oferece tanto props simples quanto subcomponentes para cenarios mais complexos.
 */
export interface CardProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Titulo curto do card para casos simples. */
  title?: ReactNode
  /** Descricao complementar do card. */
  description?: ReactNode
  /** Conteudo principal do card. */
  children?: ReactNode
  /** Area opcional de acoes ou resumo final. */
  footer?: ReactNode
  /** Variante semantica usada no destaque visual. */
  variant?: CardVariant
  /** Escala do container. */
  size?: CardSize
  /** Ativa affordance visual de interacao. */
  interactive?: boolean
}

export interface CardSectionProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
}

export interface CardTitleProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode
}

const CardHeader = ({ children = null, className = '', ...props }: CardSectionProps) => (
  <header className={classNames('ui-card__header', className)} {...props}>
    {children}
  </header>
)

const CardBody = ({ children = null, className = '', ...props }: CardSectionProps) => (
  <div className={classNames('ui-card__body', className)} {...props}>
    {children}
  </div>
)

const CardFooter = ({ children = null, className = '', ...props }: CardSectionProps) => (
  <footer className={classNames('ui-card__footer', className)} {...props}>
    {children}
  </footer>
)

const CardTitle = ({ children = null, className = '', ...props }: CardTitleProps) => (
  <h3 className={classNames('ui-card__title', className)} {...props}>
    {children}
  </h3>
)

const CardDescription = ({ children = null, className = '', ...props }: CardSectionProps) => (
  <p className={classNames('ui-card__description', className)} {...props}>
    {children}
  </p>
)

const CardRoot = ({
  title = null,
  description = null,
  children = null,
  footer = null,
  className = '',
  variant = 'neutral',
  size = 'md',
  interactive = false,
  ...props
}: CardProps) => {
  const titleId = useId()

  return (
    // D13: Semantica Estrutural
    // `section` com `aria-labelledby` preserva significado estrutural sem depender de wrappers genericos.
    <section
      className={classNames(
        'ui-card',
        `ui-card--variant-${variant}`,
        `ui-card--${size}`,
        interactive && 'ui-card--interactive',
        className
      )}
      aria-labelledby={title ? titleId : undefined}
      {...props}
    >
      {/* D09: Inversao de Controle
          `children` e `footer` delegam ao consumidor a composicao do conteudo interno. */}
      {(title || description) && (
        <CardHeader>
          {title && (
            <CardTitle id={titleId}>
              {title}
            </CardTitle>
          )}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      {children && <CardBody>{children}</CardBody>}
      {footer && <CardFooter>{footer}</CardFooter>}
    </section>
  )
}

// D10: Composicao Modular
// Subcomponentes em dot notation mantem a API extensivel sem inflar o Card com props especificas demais.
type CardComponent = typeof CardRoot & {
  Header: typeof CardHeader
  Body: typeof CardBody
  Footer: typeof CardFooter
  Title: typeof CardTitle
  Description: typeof CardDescription
}

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
  Title: CardTitle,
  Description: CardDescription
}) as CardComponent
