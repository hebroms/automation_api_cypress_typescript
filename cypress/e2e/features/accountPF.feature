Feature: Cadastro de Conta PF

  Scenario: Criar uma nova conta PF com sucesso
    Given que possuo dados válidos de conta PF
    When eu realizo a requisição de criação da conta PF
    Then a conta deve ser criada com sucesso contendo o status 201
