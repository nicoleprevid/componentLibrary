# Biblioteca de Componentes

Uma biblioteca de componentes em React + TypeScript, organizada com base nos principios de Atomic Design e preparada com Vite e Storybook.

## Recursos

- React 18 + TypeScript
- Estrutura baseada em Atomic Design (`atoms`, `molecules`, `organisms`, `templates`)
- Storybook para documentacao interativa
- ESLint + Prettier para padronizacao de codigo
- Build pronta para distribuicao com ESM, CJS e declaracoes de tipos

## Instalacao

```bash
npm install component-library
```

## Uso

```tsx
import { Button, Input, Card, Modal } from 'component-library'
import 'component-library/styles.css'
```

```tsx
<Button color="primary" size="md">Clique aqui</Button>
```

## Scripts

```bash
npm run dev
npm run build
npm run typecheck
npm run lint
npm run format
npm run storybook
npm run build-storybook
```

## Storybook

```bash
npm run storybook
```

## Pagina de demonstracao

Execute o servidor de desenvolvimento com Vite:

```bash
npm run dev
```

A pagina de demonstracao fica em `src/demo/DemoPage.tsx` e apresenta exemplos basicos dos componentes da biblioteca.

## Estrutura do projeto

```text
src/
  components/
    atoms/
    molecules/
    organisms/
    templates/
  demo/
  hooks/
  styles/
  utils/
  index.ts
```

## Publicacao

Antes de publicar a biblioteca, gere a build:

```bash
npm run build
```

Os arquivos finais sao gerados em `dist/` e incluem versoes ESM, CJS e declaracoes de tipos.
