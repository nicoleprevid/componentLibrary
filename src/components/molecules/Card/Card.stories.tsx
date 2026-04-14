import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'
import { Button } from '../../atoms/Button/Button'
import { Input } from '../../atoms/Input/Input'

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    title: 'Team workspace',
    description: 'Bring everyone together with shared components.'
  }
}

export const WithContent: Story = {
  render: () => (
    <Card
      title="Subscribe"
      description="Get component updates and design tips."
      footer={<Button size="sm">Subscribe</Button>}
    >
      <Input label="Email" placeholder="name@example.com" />
    </Card>
  )
}
