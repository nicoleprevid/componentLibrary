import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Campo de entrada com rotulo, mensagens auxiliares e estados acessiveis. As historias mostram fluxo unidirecional, contrato tipado e variacoes visuais relevantes para formularios.'
      }
    }
  },
  argTypes: {
    label: {
      description: 'Rotulo associado semanticamente ao campo.',
      control: 'text'
    },
    helperText: {
      description: 'Mensagem auxiliar exibida quando nao ha erro.',
      control: 'text'
    },
    errorMessage: {
      description: 'Mensagem exibida em estado invalido.',
      control: 'text'
    },
    variant: {
      description: 'Intencao semantica do campo.',
      control: 'inline-radio'
    },
    appearance: {
      description: 'Estrutura visual do container do input.',
      control: 'inline-radio'
    },
    size: {
      description: 'Escala visual do campo.',
      control: 'inline-radio'
    }
  }
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
    helperText: 'We will never share your email.',
    variant: 'primary'
  }
}

export const Error: Story = {
  args: {
    label: 'Email address',
    placeholder: 'you@example.com',
    variant: 'danger',
    errorMessage: 'Please provide a valid email.'
  }
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem', maxWidth: '20rem' }}>
      <Input size="sm" label="Small" placeholder="Small input" />
      <Input size="md" label="Medium" placeholder="Medium input" />
      <Input size="lg" label="Large" placeholder="Large input" />
    </div>
  )
}

export const Filled: Story = {
  args: {
    label: 'Search',
    placeholder: 'Search components',
    helperText: 'Filled appearance highlights grouped surfaces.',
    appearance: 'filled',
    variant: 'neutral'
  }
}
