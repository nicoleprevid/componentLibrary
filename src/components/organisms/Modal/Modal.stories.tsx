import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Modal } from './Modal'
import { Button } from '../../atoms/Button/Button'
import { Input } from '../../atoms/Input/Input'
import { Card } from '../../molecules/Card/Card'
import { ReactNode } from 'react'

const canvasStyle = {
  minHeight: '34rem',
  width: 'min(100%, 72rem)',
  padding: '2rem',
  display: 'grid',
  alignItems: 'start',
  background:
    'linear-gradient(135deg, rgba(255,255,255,0.94), rgba(244,247,251,0.92))'
} as const

const heroCardStyle = {
  maxWidth: '28rem'
} as const

const actionsStyle = {
  display: 'flex',
  gap: '0.75rem'
} as const

const paragraphStyle = {
  margin: 0
} as const

const formStackStyle = {
  display: 'grid',
  gap: '1rem'
} as const

const compactStackStyle = {
  display: 'grid',
  gap: '0.75rem'
} as const

interface StoryCanvasProps {
  children: ReactNode
}

const StoryCanvas = ({ children }: StoryCanvasProps) => <div style={canvasStyle}>{children}</div>

interface ContextCardProps {
  title: string
  description: string
  footer: ReactNode
  children: ReactNode
  variant?: 'primary' | 'neutral' | 'success' | 'danger'
  size?: 'md' | 'lg'
  interactive?: boolean
}

const ContextCard = ({
  title,
  description,
  footer,
  children,
  variant,
  size,
  interactive
}: ContextCardProps) => (
  <div style={heroCardStyle}>
    <Card
      title={title}
      description={description}
      footer={footer}
      variant={variant}
      size={size}
      interactive={interactive}
    >
      <p style={paragraphStyle}>{children}</p>
    </Card>
  </div>
)

interface ModalActionsProps {
  primaryLabel: string
  secondaryLabel?: string
  primaryVariant?: 'primary' | 'neutral' | 'success' | 'danger'
  onPrimaryClick: () => void
  onSecondaryClick?: () => void
}

const ModalActions = ({
  primaryLabel,
  secondaryLabel,
  primaryVariant = 'primary',
  onPrimaryClick,
  onSecondaryClick
}: ModalActionsProps) => (
  <div style={actionsStyle}>
    {secondaryLabel && onSecondaryClick && (
      <Button variant="neutral" appearance="ghost" onClick={onSecondaryClick}>
        {secondaryLabel}
      </Button>
    )}
    <Button variant={primaryVariant} onClick={onPrimaryClick}>
      {primaryLabel}
    </Button>
  </div>
)

const meta: Meta<typeof Modal> = {
  title: 'Organisms/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Componente de dialogo para confirmacoes, edicao curta e comunicacao contextual. As historias demonstram abertura controlada, composicao do conteudo, navegacao por teclado e variacoes reais de uso para documentacao visual da biblioteca.'
      }
    }
  },
  argTypes: {
    open: {
      description: 'Controla externamente a abertura do modal.',
      control: 'boolean'
    },
    title: {
      description: 'Titulo anunciado para tecnologias assistivas.',
      control: 'text'
    },
    description: {
      description: 'Texto de apoio do dialogo.',
      control: 'text'
    },
    closeLabel: {
      description: 'Rotulo acessivel do botao de fechar.',
      control: 'text'
    },
    closeOnBackdrop: {
      description: 'Permite fechar o dialogo clicando fora da caixa principal.',
      control: 'boolean'
    },
    ariaLabel: {
      description: 'Nome acessivel alternativo para dialogos sem titulo visivel.',
      control: 'text'
    }
  }
}

export default meta

type Story = StoryObj<typeof Modal>

const useStoryOpen = (initialCanvasOpen: boolean, viewMode?: string) => {
  const [open, setOpen] = useState(viewMode === 'docs' ? false : initialCanvasOpen)

  return { open, setOpen }
}

interface StorySceneProps {
  viewMode?: string
}

const ConfirmationScene = ({ viewMode }: StorySceneProps) => {
  const { open, setOpen } = useStoryOpen(false, viewMode)

  return (
    <StoryCanvas>
      <ContextCard
        title="Publish release"
        description="Use this flow to validate a critical action before it affects the system."
        variant="primary"
        size="lg"
        interactive
        footer={
          <Button variant="primary" onClick={() => setOpen(true)}>
            Open confirmation modal
          </Button>
        }
      >
        This story is ideal for the Storybook print because it shows the trigger context together
        with the modal opened over the interface.
      </ContextCard>
      <Modal
        open={open}
        title="Confirm publication"
        description="Review the release details before making the new version available to all users."
        onClose={() => setOpen(false)}
        footer={
          <ModalActions
            secondaryLabel="Keep editing"
            primaryLabel="Publish now"
            onSecondaryClick={() => setOpen(false)}
            onPrimaryClick={() => setOpen(false)}
          />
        }
      >
        <p style={paragraphStyle}>
          The dialog keeps the focus inside the layer, supports keyboard navigation and returns the
          focus to the trigger after closing.
        </p>
      </Modal>
    </StoryCanvas>
  )
}

const DestructiveActionScene = ({ viewMode }: StorySceneProps) => {
  const { open, setOpen } = useStoryOpen(true, viewMode)

  return (
    <StoryCanvas>
      <ContextCard
        title="Workspace settings"
        description="Some operations are sensitive and require explicit confirmation."
        variant="danger"
        footer={
          <Button variant="danger" onClick={() => setOpen(true)}>
            Cancel subscription
          </Button>
        }
      >
        This variation demonstrates a modal with two actions before a destructive workflow.
      </ContextCard>
      <Modal
        open={open}
        title="Cancel subscription"
        description="This operation will end premium access for all members at the next billing cycle."
        onClose={() => setOpen(false)}
        closeOnBackdrop={false}
        footer={
          <ModalActions
            secondaryLabel="Go back"
            primaryLabel="Confirm cancellation"
            primaryVariant="danger"
            onSecondaryClick={() => setOpen(false)}
            onPrimaryClick={() => setOpen(false)}
          />
        }
      >
        <p style={paragraphStyle}>
          Use this pattern when the user needs a final checkpoint before an operation that is hard
          to revert.
        </p>
      </Modal>
    </StoryCanvas>
  )
}

const FormDialogScene = ({ viewMode }: StorySceneProps) => {
  const { open, setOpen } = useStoryOpen(true, viewMode)

  return (
    <StoryCanvas>
      <ContextCard
        title="Quick edit"
        description="Short forms can stay in context without navigating away from the current page."
        footer={
          <Button variant="primary" onClick={() => setOpen(true)}>
            Edit assignee
          </Button>
        }
      >
        This scenario shows the modal as a compact editing surface with form fields and a single
        primary action.
      </ContextCard>
      <Modal
        open={open}
        title="Assign reviewer"
        description="Choose the teammate responsible for validating this release before publication."
        onClose={() => setOpen(false)}
        footer={
          <ModalActions
            secondaryLabel="Cancel"
            primaryLabel="Save reviewer"
            onSecondaryClick={() => setOpen(false)}
            onPrimaryClick={() => setOpen(false)}
          />
        }
      >
        <div style={formStackStyle}>
          <Input
            label="Reviewer name"
            placeholder="Nicole Previd"
            helperText="The selected reviewer will be notified automatically."
          />
          <Input
            label="Email"
            type="email"
            placeholder="nicole@example.com"
            appearance="filled"
          />
        </div>
      </Modal>
    </StoryCanvas>
  )
}

const InformationalScene = ({ viewMode }: StorySceneProps) => {
  const { open, setOpen } = useStoryOpen(true, viewMode)

  return (
    <StoryCanvas>
      <ContextCard
        title="Release completed"
        description="Informational dialogs can acknowledge success without forcing a destructive decision."
        variant="success"
        footer={
          <Button variant="success" onClick={() => setOpen(true)}>
            View success modal
          </Button>
        }
      >
        This example shows a modal with a single visible action, useful for acknowledgements.
      </ContextCard>
      <Modal
        open={open}
        title="Release published successfully"
        description="Version 4.2.0 is now available and the deployment pipeline has completed without incidents."
        onClose={() => setOpen(false)}
        footer={
          <Button variant="success" onClick={() => setOpen(false)}>
            Continue
          </Button>
        }
      >
        <p style={paragraphStyle}>
          A single action keeps the interaction lightweight when the dialog only needs user
          acknowledgement.
        </p>
      </Modal>
    </StoryCanvas>
  )
}

const ComposedSectionsScene = ({ viewMode }: StorySceneProps) => {
  const { open, setOpen } = useStoryOpen(true, viewMode)

  return (
    <StoryCanvas>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Open composed modal
      </Button>
      <Modal
        open={open}
        ariaLabel="Custom composition"
        onClose={() => setOpen(false)}
        closeOnBackdrop={false}
      >
        <Modal.Header>
          <div>
            <h2 className="ui-modal__title">Custom composition</h2>
            <p className="ui-modal__description">
              Consumers can build the dialog content by combining the exported sections directly.
            </p>
          </div>
          <Button
            variant="neutral"
            appearance="ghost"
            size="sm"
            className="ui-modal__close"
            aria-label="Close composed modal"
            onClick={() => setOpen(false)}
          >
            <span aria-hidden="true">&times;</span>
          </Button>
        </Modal.Header>
        <Modal.Body>
          <div style={compactStackStyle}>
            <p style={paragraphStyle}>
              This story highlights the modular architecture of the component with explicit section
              composition.
            </p>
            <Input label="Optional note" placeholder="Add a note for the team" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="neutral" appearance="ghost" onClick={() => setOpen(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => setOpen(false)}>
            Save note
          </Button>
        </Modal.Footer>
      </Modal>
    </StoryCanvas>
  )
}

export const Confirmation: Story = {
  render: (_args, context) => <ConfirmationScene viewMode={context.viewMode} />
}

export const DestructiveAction: Story = {
  render: (_args, context) => <DestructiveActionScene viewMode={context.viewMode} />
}

export const FormDialog: Story = {
  render: (_args, context) => <FormDialogScene viewMode={context.viewMode} />
}

export const Informational: Story = {
  render: (_args, context) => <InformationalScene viewMode={context.viewMode} />
}

export const ComposedSections: Story = {
  render: (_args, context) => <ComposedSectionsScene viewMode={context.viewMode} />
}
