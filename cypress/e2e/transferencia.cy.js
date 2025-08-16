describe('Transferencia', () => {
    beforeEach(() => { 
        cy.visit('/')
        cy.fazerLoginComCredenciaisValidas()
    })

    it('Deve transferir quando informo dados e valor validos', () => {
        // Act
        cy.realizarTransferencia('Carlos Souza', 'Fernanda Costa', '11')
        // cy.get('label[for="conta-origem"]').parent().as('campo-conta-origem') // parent() pega o elemento pai do label e as é o alias
        // cy.get('@campo-conta-origem').click()
        // cy.get('@campo-conta-origem').contains('Carlos Souza').click()
        // cy.selecionarOpcaoNaComboBox('conta-origem', 'Carlos Souza')

        // cy.get('label[for="conta-destino"]').parent().as('campo-conta-destino') // parent() pega o elemento pai do label e as é o alias
        // cy.get('@campo-conta-destino').click()
        // cy.get('@campo-conta-destino').contains('Fernanda Costa').click()
        // cy.selecionarOpcaoNaComboBox('conta-destino', 'Fernanda Costa')

        // cy.get('#valor').click().type('11')

        // cy.contains('button', 'Transferir').click()

        // Assert
        //cy.get('.toast').should('have.text', 'Transferência realizada!')
        cy.verificarMensagemNoToast('Erro na transferência.')
    })

    it('Deve apresentar erro quando tentar transferir mais que 5 mil sem token', () => {
        // Act
        cy.realizarTransferencia('Carlos Souza', 'Fernanda Costa', '5000.01')
        
        // Assert
        //cy.verificarMensagemNoToast('Autencicação necessaria para transferência acima de R$5.000,00.')
        cy.verificarMensagemNoToast('Erro na transferência.')
    })
})