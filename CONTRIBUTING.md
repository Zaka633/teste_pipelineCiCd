# Contribuindo com GitFlow

Este guia descreve como usar o fluxo GitFlow neste projeto. Você pode utilizar as extensões `git-flow` ou executar os comandos Git puros demonstrados abaixo.

Branches principais:
- main (produção)
- develop (integração)

Branches de suporte:
- feature/*
- release/*
- hotfix/*

## Preparação inicial
1. Garantir que o repositório tenha os branches `main` e `develop`.
2. Caso ainda não exista o `develop`:
   ```powershell
   git checkout -b develop
   git push -u origin develop
   ```

## Desenvolvendo uma feature
1. Crie um branch a partir de `develop`:
   ```powershell
   git checkout develop
   git pull
   git checkout -b feature/nome-da-feature
   ```
2. Desenvolva, faça commits pequenos e claros.
3. Atualize seu branch com `develop` (se necessário):
   ```powershell
   git fetch origin
   git checkout feature/nome-da-feature
   git merge origin/develop
   ```
4. Abra um Pull Request de `feature/nome-da-feature` para `develop`.
5. Após aprovação e CI verde, faça o merge via PR e delete o branch da feature.

## Abrindo uma release
1. Crie o branch de release a partir de `develop`:
   ```powershell
   git checkout develop
   git pull
   git checkout -b release/1.0.0
   ```
2. Ajuste versão/CHANGELOG se aplicável, rode testes.
3. Abra PR de `release/1.0.0` para `main` e outro PR de `release/1.0.0` para `develop` (ou faça merge em `main` e depois `--no-ff` em `develop`).
4. Crie uma tag após o merge em `main`:
   ```powershell
   git checkout main
   git pull
   git tag -a v1.0.0 -m "Release 1.0.0"
   git push --tags
   ```

## Hotfix em produção
1. Crie o branch de hotfix a partir de `main`:
   ```powershell
   git checkout main
   git pull
   git checkout -b hotfix/1.0.1
   ```
2. Corrija o problema, rode testes.
3. Abra PR de `hotfix/1.0.1` para `main` e, após merge, faça também PR para `develop` (ou merge de `main` -> `develop`) para manter a linha de desenvolvimento atualizada.
4. Marque a versão com tag (opcional):
   ```powershell
   git tag -a v1.0.1 -m "Hotfix 1.0.1"
   git push --tags
   ```

## Dicas
- Use mensagens de commit semânticas (feat, fix, chore, docs, test, refactor).
- Mantenha PRs pequenos e descritivos.
- Deixe a pipeline (Actions) como guardião: PRs só devem ser mergeados quando o CI estiver verde.
