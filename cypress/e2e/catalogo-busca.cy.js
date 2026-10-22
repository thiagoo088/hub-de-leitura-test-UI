///<reference types="cypress"/>

import catalogo from "../fixtures/livros.json"

describe('Funcionalidade: busca no catalogo', () => {

    before(() => {
        cy.visit('catalog.html')
    });

    it('deve fazer a busca do livro 1984 com sucesso', () => {
        cy.get('#search-input').type('1984')
        cy.get('.card-title > .text-dark', { timeout: 10000 }).should('contain', '1984')
    });

    it('deve fazer a busca de um livro no arquivo massa de dados', () => {
        cy.get('#search-input').type(catalogo[0].livro)
        cy.get('.card-title > .text-dark', { timeout: 10000 }).should('contain', catalogo[0].livro)
    });

    it('deve fazer a busca de um livro no arquivo massa de dados', () => {
        cy.get('#search-input').type(catalogo[1].livro)
        cy.get('.card-title > .text-dark', { timeout: 10000 }).should('contain', catalogo[1].livro)
    });

    it('deve fazer a busca de um livro no arquivo massa de dados', () => {
        cy.get('#search-input').type(catalogo[2].livro)
        cy.get('.card-title > .text-dark', { timeout: 10000 }).should('contain', catalogo[2].livro)
    });

});