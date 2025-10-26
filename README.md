# Projeto Exemplo (HTML, CSS e JavaScript) com GitFlow e CI

Este repositório foi criado para atender aos seguintes requisitos:

- Criar um projeto no GitHub.
- Subir os códigos nesse projeto.
- Criar uma pipeline para este projeto (CI com GitHub Actions).
- Executar as ações do GitFlow durante a apresentação.

Agora o projeto é implementado em HTML, CSS e JavaScript puro (sem frameworks), conforme solicitado.

## Tecnologias
- Front-end: HTML, CSS, JavaScript (Vanilla)
- Testes: Node.js (script simples com assert)
- CI: GitHub Actions (setup-node)

## Estrutura do projeto
- public/index.html: página simples com um formulário para digitar o nome e exibir uma saudação.
- public/styles.css: estilos básicos.
- public/script.js: função greet(name) usada pela página e pelos testes.
- tests/test_greet.js: testes de unidade em Node para a função greet.
- .github/workflows/ci.yml: pipeline de CI que roda os testes em Node.

Este projeto não utiliza mais Python. Todos os artefatos antigos em Python foram removidos para evitar confusão; o stack é 100% HTML/CSS/JS com testes em Node.js.

## Como criar o repositório no GitHub e enviar o código

1. Crie um repositório vazio no GitHub (sem README/licença/gitignore), por exemplo: `seu-usuario/projeto-exemplo`.
2. No seu computador, dentro desta pasta do projeto, execute (ajuste o nome do repositório):
   
   ```powershell
   git init
   git add .
   git commit -m "chore: projeto inicial com HTML/CSS/JS e CI"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
   git push -u origin main
   ```

3. Acesse o repositório no GitHub e confirme que os arquivos foram enviados.

## Pipeline (GitHub Actions)
- Arquivo: `.github/workflows/ci.yml`
- Dispara em: push e pull_request para os branches `main` e `develop`.
- Jobs:
  - Configura Node.js
  - Roda os testes (`node tests/test_greet.js`)

Você pode visualizar as execuções no GitHub na aba "Actions" do repositório.

## Como executar localmente
- Abrir a página:
  - Basta abrir o arquivo `public/index.html` no navegador.
- Rodar os testes (requer Node 18+ ou 20+ instalado):
  
  ```powershell
  node tests/test_greet.js
  ```

## GitFlow (resumo)
Este repositório segue o modelo GitFlow. Veja o detalhamento e os comandos recomendados em `CONTRIBUTING.md`. Há também um roteiro de apresentação em `DEMO.md`.

Principais branches:
- main: produção
- develop: integração de features
- feature/*: desenvolvimento de novas funcionalidades
- release/*: preparação de releases
- hotfix/*: correções emergenciais em produção

## Licença
Você pode adicionar aqui a licença de sua preferência (MIT recomendada).