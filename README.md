# Biblioteca de Componentes

Uma biblioteca de componentes em React + TypeScript, organizada com base nos principios de Atomic Design e preparada com Vite e Storybook.

## Diretrizes adotadas

Esta biblioteca foi estruturada para refletir diretrizes operacionais de desenvolvimento de componentes React:

- API previsivel e consistente com props semanticas e valores padrao.
- Tipagem como contrato com TypeScript em toda a interface publica.
- Separacao de inputs e outputs via props de entrada e callbacks de evento.
- Estilizacao desacoplada com tokens centralizados em `src/styles/theme.css`.
- Responsividade por padrao com `grid`, `flex`, `rem` e `clamp`.
- Composicao de componentes em `Card` e `Modal`.
- Separacao de logica e UI com o hook `src/components/organisms/Modal/useModal.ts`.
- Independencia de estado global, permitindo uso isolado de cada componente.
- HTML semantico, gerenciamento de foco, navegacao por teclado e estados acessiveis.
- Exemplos visuais de uso e documentacao de props via Storybook autodocs.
- Estabilidade de API com extensoes retrocompativeis, como o alias `color` em `Button`.

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
<Button variant="primary" size="md">Clique aqui</Button>
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

## Onde as diretrizes aparecem no codigo

- `src/components/atoms/Button/Button.tsx`: API previsivel, tipagem, HTML semantico e estabilidade de API.
- `src/components/atoms/Input/Input.tsx`: contrato tipado, estados acessiveis e fluxo de dados por props/callbacks.
- `src/components/molecules/Card/Card.tsx`: composicao e semantica estrutural.
- `src/components/organisms/Modal/Modal.tsx`: composicao, acessibilidade e separacao entre UI e regras de comportamento.
- `src/components/organisms/Modal/useModal.ts`: gerenciamento de foco e navegacao por teclado.
- `src/styles/theme.css` e `src/styles/demo.css`: design tokens, responsividade e flexibilidade visual.

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
