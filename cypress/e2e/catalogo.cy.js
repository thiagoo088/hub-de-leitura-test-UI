///<reference types="cypress"/>

describe('Funcionalidade: Catàlogo de livros', () => {

    beforeEach(() => {
        cy.visit("catalog.html")
    });

    it('Deve clicar no botão Adicionar à cesta', () => {
        cy.get(':nth-child(1) > .card > .card-body > .mt-auto > .d-grid > .btn-primary').click()
        cy.get('#cart-count', { timeout: 10000 }).should('contain', 1)
        cy.contains('1984').should('exist')
    });

    it('deve clicar em todos os botões adicionar à cesta', () => {
        cy.get('.btn-primary', { timeout: 10000 }).click({ multiple: true })
        cy.contains('1984').should('exist')
        cy.contains('A Arte da Guerra').should('exist')
        cy.contains('A Divina Comédia').should('exist')
        cy.contains('A Menina que Roubava Livros').should('exist')
        cy.contains('A Metamorfose').should('exist')
        cy.contains('A Revolução dos Bichos').should('exist')
        cy.contains('Cem Anos de Solidão').should('exist')
        cy.contains('Dom Casmurro').should('exist')
        cy.contains('Dom Quixote').should('exist')
        cy.contains('Harry Potter e a Pedra Filosofal').should('exist')
        cy.contains('Hub de Leitura').should('exist')
        cy.contains('O Alquimista').should('exist')
    });


    it('deve clicar no primeiro botão adicionar à cesta', () => {
        cy.get('.btn-primary', { timeout: 10000 }).first().click()
        cy.contains('1984').should('exist')
    });

    it('deve clicar no ultimo botão adicionar à cesta', () => {
        cy.get('.btn-primary', { timeout: 10000 }).last().click()
        cy.contains('O Alquimista').should('exist')
    });

    it('deve clicar no terceiro botão adicionar à cesta', () => {
        cy.get('.btn-primary', { timeout: 10000 }).eq(2).click()
        cy.contains('A Divina Comédia').should('exist')
    });

    it('deve clicar no nome do livro e direcionar para a tela do livro', () => {
        cy.contains('A Metamorfose', { timeout: 10000 }).click()
        cy.url({timeout: 10000}).should('include', 'book-details')
        cy.get('#add-to-cart-btn', {timeout: 10000}).click()
        cy.get('#alert-container').should('contain', 'Livro adicionado à cesta com sucesso!')
    });

});