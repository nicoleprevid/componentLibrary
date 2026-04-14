import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Modal } from './Modal'
import { Button } from '../../atoms/Button/Button'

const meta: Meta<typeof Modal> = {
  title: 'Organisms/Modal',
  component: Modal,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Modal>

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal
          open={open}
          title="Confirm action"
          description="Double-check the details before proceeding."
          onClose={() => setOpen(false)}
          footer={
            <div style={{ display: 'flex', gap: 12 }}>
              <Button variant="ghost" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button color="primary" onClick={() => setOpen(false)}>
                Confirm
              </Button>
            </div>
          }
        >
          <p style={{ margin: 0 }}>
            This modal uses a portal and keyboard handling to provide a comfortable experience.
          </p>
        </Modal>
      </div>
    )
  }
}
