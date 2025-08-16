Cypress.Commands.add('realizarTransferencia', (contaOrigem, ContaDestino, valor) => {
    cy.selecionarOpcaoNaComboBox('conta-origem', contaOrigem)
    cy.selecionarOpcaoNaComboBox('conta-destino', ContaDestino)
    cy.get('#valor').click().type(valor)
    cy.contains('button', 'Transferir').click()
})