import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const stackStyle = { display: 'flex', gap: '0.75rem', flexWrap: 'wrap' } as const

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Botao semantico para acoes principais e secundarias. A documentacao demonstra previsibilidade de API, independencia entre `variant` e `appearance`, estados visuais e comportamento nativo de teclado.'
      }
    }
  },
  argTypes: {
    children: {
      description: 'Conteudo textual ou composicional exibido dentro do botao.',
      control: 'text'
    },
    variant: {
      description: 'Define a intencao semantica da acao.',
      control: 'inline-radio'
    },
    appearance: {
      description: 'Define a superficie visual sem alterar a semantica da variante.',
      control: 'inline-radio'
    },
    size: {
      description: 'Controla a escala visual do componente.',
      control: 'inline-radio'
    },
    loading: {
      description: 'Exibe estado de carregamento e desabilita a interacao.',
      control: 'boolean'
    },
    onClick: { action: 'clicked' }
  }
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    variant: 'primary'
  }
}

export const Variants: Story = {
  args: {
    children: 'testa',
    loading: false
  },

  render: () => (
    <div style={stackStyle}>
      <Button variant="primary" appearance="solid">
        Solid
      </Button>
      <Button variant="primary" appearance="outline">
        Outline
      </Button>
      <Button variant="primary" appearance="ghost">
        Ghost
      </Button>
      <Button variant="success">Success</Button>
      <Button variant="danger">Danger</Button>
      <Button disabled>Disabled</Button>
    </div>
  )
}

export const Sizes: Story = {
  render: () => (
    <div style={{ ...stackStyle, alignItems: 'center' }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  )
}

export const Loading: Story = {
  args: {
    children: 'Salvar',
    variant: 'primary',
    loading: true
  }
}
