Feature: Cadastro de Conta PJ

  Scenario: Criar uma nova conta PJ com sucesso
    Given que possuo dados válidos de conta PJ
    When eu realizo a requisição de criação da conta PJ
    Then a resposta deve conter o status 201
