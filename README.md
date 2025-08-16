# Banco Web Tests - Cypress & JavaScript

Projeto de automação de testes end-to-end para a aplicação web do banco, desenvolvido durante a Mentoria 2.0 do Júlio de Lima. Utiliza Cypress, organização por Custom Commands e geração de relatórios com cypress-mochawesome-reporter.

## Objetivo

Garantir a qualidade das principais funcionalidades do sistema bancário web, automatizando cenários críticos e validando regras de negócio via testes automatizados.

## Componentes do Projeto

- **Cypress**: Framework de testes end-to-end.
- **Custom Commands**: Comandos personalizados para facilitar e padronizar ações recorrentes nos testes.
- **cypress-mochawesome-reporter**: Gera relatórios detalhados em HTML, incluindo evidências (screenshots e vídeos).
- **Estrutura de Pastas**:
  - `cypress/e2e/`: Testes automatizados (ex: `login.cy.js`, `transferencia.cy.js`)
  - `cypress/fixtures/`: Dados de teste (ex: `credenciais.json`)
  - `cypress/support/commands.js` e `commands/`: Custom Commands organizados por contexto
  - `cypress/reports/`: Relatórios gerados após execução dos testes
  - `cypress/screenshots/` e `cypress/videos/`: Evidências dos testes
  - `cypress.config.js`: Configuração do Cypress e do reporter

## Pré-requisitos

- Node.js instalado
- API do banco (`banco-api`) em execução
- Aplicação web do banco em execução

## Instalação

1. Clone o repositório:
   ```bash
   git clone <URL-do-repositório>
   cd banco-web-tests
   ```
2. Instale as dependências:
```bash
   npm install
```
## Execução dos Testes
1. Certifique-se de que a API (banco-api) e a aplicação web estão rodando.
2. Execute os testes via Cypress:
```bash
npx cypress open
```
ou em modo headless:
```bash
npx cypress run
```
3. Os relatórios serão gerados em index.html (\cypress\reports\html\index.html)

## Documentação dos Testes
- login.cy.js: Testa o fluxo de login, valida credenciais e acesso.
- transferencia.cy.js: Testa transferências bancárias, incluindo validações de limites e token.
- Dados de teste estão em credenciais.json (cypress\fixtures\credenciais.json).

## Custom Commands
Os comandos customizados estão em commands.js e organizados em commands (cypress\support\commands\):

- login.js: Comando para login automatizado.
- transferencia.js: Comando para realizar transferências.
- commons.js: Comandos utilitários comuns.

Exemplo de uso:
```bash
cy.login('usuario', 'senha')
cy.realizarTransferencia({ valor: 6000, token: null })
```

## Relatórios
Após a execução, acesse o relatório em:
cypress/reports/html/index.html

Inclui detalhes dos testes, screenshots e vídeos das execuções.

---
Mentoria 2.0 | Júlio de Lima

