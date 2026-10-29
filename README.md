# 📚 Hub de Leitura – Testes de UI com Cypress

![Cypress](https://img.shields.io/badge/Cypress-E2E-17202C?logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

Testes automatizados E2E da interface do Hub de Leitura, feitos durante meus estudos de QA.

## O que é testado

- Cadastro
- Login
- Catálogo
- Busca no catálogo
- Contato

## Tecnologias

- JavaScript
- Cypress
- Faker
- Page Objects
- Cypress Cloud

## Como executar

```bash
git clone https://github.com/thiagoo088/hub-de-leitura-test-UI.git
cd hub-de-leitura-test-UI
npm install
```

Com a aplicação rodando em outro terminal:

```bash
npx cypress open   # modo interativo
npx cypress run    # modo headless
```

## Observação

A aplicação roda em localhost e a API pode responder devagar, por isso alguns testes usam timeouts maiores.

## Autor

**Thiago do Nascimento** – [LinkedIn](https://linkedin.com/in/thiago-nascimento-5b99b4388)
