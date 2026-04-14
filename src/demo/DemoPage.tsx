import { useState } from 'react'
import { Button } from '../components/atoms/Button/Button'
import { Input } from '../components/atoms/Input/Input'
import { Card } from '../components/molecules/Card/Card'
import { Modal } from '../components/organisms/Modal/Modal'

const DemoPage = () => {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')

  return (
    <div className="demo-page">
      <header className="demo-hero">
        <p className="demo-eyebrow">Biblioteca de componentes</p>
        <h1>Componentes disponíveis</h1>
        <p className="demo-subtitle">
          A tela inicial apresenta os componentes base da biblioteca com um exemplo prático de uso
          para cada um.
        </p>
      </header>

      <section className="demo-grid">
        <Card
          title="Button"
          description="Botões para ações principais, secundárias e estados visuais distintos."
        >
          <div className="demo-example-group">
            <Button size="sm" color="primary">
              Primário
            </Button>
            <Button size="sm" color="neutral" variant="outline">
              Secundário
            </Button>
            <Button size="sm" color="danger" variant="ghost">
              Remover
            </Button>
          </div>
        </Card>

        <Card
          title="Input"
          description="Campo de entrada com rótulo, texto de apoio e mensagens de validação."
        >
          <div className="demo-example-stack">
            <Input
              label="Nome"
              placeholder="Digite seu nome"
              helperText="Esse valor aparece no resumo abaixo."
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
            <Input
              label="E-mail"
              type="email"
              placeholder="nome@exemplo.com"
              errorMessage="Informe um e-mail valido."
            />
          </div>
        </Card>

        <Card
          title="Card"
          description="Container para agrupar conteudo com cabecalho, corpo e area de acoes."
          footer={<Button size="sm">Salvar</Button>}
        >
          <div className="demo-example-stack">
            <p className="demo-card-text">
              Os cards ajudam a organizar informacoes relacionadas em blocos visuais bem definidos.
            </p>
            <p className="demo-card-note">Exemplo: resumo de cadastro ou destaque de informacao.</p>
          </div>
        </Card>

        <Card
          title="Modal"
          description="Janela sobreposta para confirmacoes, avisos e acoes que exigem foco."
          footer={
            <Button size="sm" color="primary" onClick={() => setOpen(true)}>
              Abrir exemplo
            </Button>
          }
        >
          <div className="demo-example-stack">
            <p className="demo-card-text">
              Clique no botao para abrir um modal com titulo, descricao e acoes no rodape.
            </p>
            <Button color="neutral" variant="outline" onClick={() => setOpen(true)}>
              Visualizar modal
            </Button>
          </div>
        </Card>
      </section>

      <section className="demo-summary">
        <h2>Exemplo ativo</h2>
        <p>
          Nome preenchido no campo de exemplo:{' '}
          <strong>{name.trim() ? name : 'nenhum valor informado ainda'}</strong>
        </p>
      </section>

      <Modal
        open={open}
        title="Exemplo de modal"
        description="Este exemplo mostra como apresentar informacoes importantes sem tirar o contexto da pagina."
        onClose={() => setOpen(false)}
        closeLabel="Fechar modal"
        footer={
          <div className="demo-modal-footer">
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancelar
            </Button>
            <Button color="primary" onClick={() => setOpen(false)}>
              Confirmar
            </Button>
          </div>
        }
      >
        <p className="demo-modal-body">
          Use o modal para solicitar confirmacao, destacar um aviso ou apresentar uma acao que
          precisa de atencao imediata.
        </p>
      </Modal>
    </div>
  )
}

export default DemoPage
