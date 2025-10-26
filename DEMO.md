# Roteiro de Apresentação: GitFlow + CI

Este roteiro ajuda você a demonstrar o fluxo GitFlow e a pipeline (CI) do projeto durante a apresentação.

Pré-requisitos:
- Repositório criado no GitHub e código enviado (veja README.md).
- Branches `main` e `develop` existentes no remoto.
- Permissões para abrir Pull Requests.

## Passo a passo sugerido (tempo ~10–15 min)

1) Mostrar a pipeline funcionando na branch principal
- Abra o GitHub > aba Actions e mostre a execução do workflow ao push no `main` (ou `develop`).

2) Criar e trabalhar em uma feature
- No terminal:
  ```powershell
  git checkout develop
  git pull
  git checkout -b feature/mensagem-personalizada
  ```
- Edite o arquivo `public/script.js` (função `greet`) para alterar a mensagem, por exemplo, ajustar o comportamento para nomes vazios.
- Rode testes localmente (Node.js):
  ```powershell
  node tests/test_greet.js
  ```
- Faça commit e envie:
  ```powershell
  git add .
  git commit -m "feat: melhora mensagem de saudação sem nome"
  git push -u origin feature/mensagem-personalizada
  ```
- Abra um Pull Request de `feature/mensagem-personalizada` para `develop` e mostre o CI rodando no PR.

3) Preparar uma release
- Depois que a feature foi mergeada em `develop` e o CI passou, crie o branch de release:
  ```powershell
  git checkout develop
  git pull
  git checkout -b release/1.0.0
  ```
- Opcional: atualize CHANGELOG/versão.
- Abra PR de `release/1.0.0` para `main`.
- Após o merge em `main`, crie uma tag:
  ```powershell
  git checkout main
  git pull
  git tag -a v1.0.0 -m "Release 1.0.0"
  git push --tags
  ```
- Mostre a execução do CI no `main` e a criação da tag.

4) Simular um hotfix
- Crie um branch de hotfix a partir de `main`:
  ```powershell
  git checkout main
  git pull
  git checkout -b hotfix/1.0.1
  ```
- Faça uma pequena correção (ex.: ajustar string em `hello.py`).
- Teste localmente e envie PR de `hotfix/1.0.1` para `main`.
- Após o merge, faça PR de `main` para `develop` ou crie um PR de `hotfix/1.0.1` para `develop` para sincronizar as linhas.

Dicas finais:
- Mantenha o terminal visível e a aba Actions aberta para acompanhar os jobs.
- Use mensagens de commit claras e curtas.
- Se algo falhar, rode os testes localmente para demonstrar o valor do CI.