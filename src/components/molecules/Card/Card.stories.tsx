import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { Button } from '../../atoms/Button/Button'
import { Input } from '../../atoms/Input/Input'

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Container composicional para agrupar conteudo relacionado. As historias mostram tanto a API simplificada quanto a composicao por `dot notation` para cenarios mais ricos.'
      }
    }
  },
  argTypes: {
    title: {
      description: 'Titulo resumido para configuracoes simples do card.',
      control: 'text'
    },
    description: {
      description: 'Texto de apoio exibido abaixo do titulo.',
      control: 'text'
    },
    variant: {
      description: 'Destaca semanticamente o card por meio da faixa lateral.',
      control: 'inline-radio'
    },
    size: {
      description: 'Escala do container.',
      control: 'inline-radio'
    },
    interactive: {
      description: 'Ativa feedback visual de interacao.',
      control: 'boolean'
    }
  }
}

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    title: 'Team workspace',
    description: 'Bring everyone together with shared components.',
    variant: 'primary'
  }
}

export const WithContent: Story = {
  render: () => (
    <Card
      title="Subscribe"
      description="Get component updates and design tips."
      footer={<Button size="sm">Subscribe</Button>}
      interactive
    >
      <Input label="Email" placeholder="name@example.com" />
    </Card>
  )
}

export const Composed: Story = {
  render: () => (
    <Card variant="success" size="lg">
      <Card.Header>
        <Card.Title>Release checklist</Card.Title>
        <Card.Description>Composition keeps the API extensible without adding more one-off props.</Card.Description>
      </Card.Header>
      <Card.Body>
        <Input label="Owner" placeholder="Nicole" variant="success" />
      </Card.Body>
      <Card.Footer>
        <Button appearance="ghost" variant="neutral">Later</Button>
        <Button variant="success">Ship</Button>
      </Card.Footer>
    </Card>
  )
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(14rem, 1fr))', width: 'min(100%, 48rem)' }}>
      <Card title="Primary" description="Highlights the main workflow." variant="primary" />
      <Card title="Neutral" description="Keeps emphasis balanced." variant="neutral" />
      <Card title="Success" description="Communicates positive progress." variant="success" />
    </div>
  )
}
