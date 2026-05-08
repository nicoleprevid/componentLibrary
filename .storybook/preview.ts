import type { Preview } from '@storybook/react'
import '../src/styles/theme.css'

const preview: Preview = {
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      default: 'app',
      values: [
        { name: 'app', value: 'radial-gradient(circle at top left, #f7f9ff, #eef2f8 55%, #e8edf5 100%)' },
        { name: 'surface', value: '#ffffff' },
        { name: 'ink', value: '#0c1620' }
      ]
    }
  }
}

export default preview
