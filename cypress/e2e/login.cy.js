describe('Login', () => {
  beforeEach(() => {
    // Arrange
    cy.visit('/')
    //cy.screenshot('apos-visitar-pagina-inicial')
  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {
    // Act
    cy.fazerLoginComCredenciaisValidas()
    //cy.screenshot('apos preencher-dados-login')
    
    // Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
    })

    it('Login com dados inválidos deve apresentar mensagem de error', () => {
    // Act
    cy.fazerLoginComCredenciaisInvalidas()

    // Assert
    //cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
      cy.verificarMensagemNoToast('Erro no login. Tente novamente.')
    })
})