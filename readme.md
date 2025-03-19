# 🚀 Cypress + Cucumber + TypeScript + CI/CD

## 📦 Estrutura do Projeto
```
automation_api_e2e_cypress/
│── cypress/
│   ├── e2e/
│   │   ├── features/           # Cenários em Gherkin
│   │   ├── step_definitions/   # Implementação dos Steps
│   ├── generators/             # Geradores de dados aleatórios
│   ├── models/                 # Modelos de dados e validações
│   ├── pages/                  # Páginas API encapsuladas
│   ├── settings/               # Configurações gerais
│   ├── support/                # Suporte e comandos customizados
│── cypress.config.ts           # Configuração do Cypress
│── package.json                # Dependências do projeto
│── tsconfig.json               # Configuração do TypeScript
```

## ✅ Tecnologias Usadas
- Cypress com TypeScript
- Cucumber (BDD)
- SOLID
- Design Patterns
- Faker.js
- Allure Reports
- Multiple Cucumber HTML Reporter
- Pipelines em GitHub Actions, GitLab CI, Jenkins e Azure DevOps

## 🚀 Comandos Importantes

|              Comando              |                Descrição              |
|               ---                 |                   ---                 |
| `npm run cy:open`                 | Abre o Cypress                        |
| `npm run cy:run`                  | Roda Cypress em modo headless         |
| `npm run allure:generate`         | Gera o relatório Allure               |
| `npm run allure:open`             | Abre o Allure Report                  |
| `npm run generate:html:report`    | Gera o Multiple Cucumber HTML Report  |


## ⚙️ CI/CD Pipelines
- Exemplos para GitHub Actions, GitLab CI, Jenkins e Azure DevOps na pasta `.ci/`

## ✨ Estrutura de Padrões de Request e Response
- Contratos em `cypress/support/contracts/`
- Validação com Ajv nos testes

