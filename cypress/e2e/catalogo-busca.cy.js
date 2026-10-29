///<reference types="cypress"/>

import catalogo from "../fixtures/livros.json"

describe('Funcionalidade: busca no catalogo', () => {

    beforeEach(() => {
     cy.intercept('GET', '**/api/books*').as('listarLivros')
        cy.visit('catalog.html')

    });

    it('Deve fazer a busca do livro 1984 com sucesso', () => {
        cy.get('#search-input').type('1984')
        cy.get('.card-title > .text-dark', { timeout:40000 }).should('contain', '1984')
    });

    it('Deve fazer a busca de um livro no arquivo massa de dados', () => {
        cy.get('#search-input').type(catalogo[0].livros)
        cy.get('.card-title > .text-dark', { timeout:40000 }).should('contain', catalogo[0].livros)
    });

    it('Deve fazer a busca de um livro no arquivo massa de dados', () => {
        cy.get('#search-input').type(catalogo[1].livros)
        cy.get('.card-title > .text-dark', { timeout:40000 } ).should('contain', catalogo[1].livros)
    });

    it('Deve fazer a busca de um livro no arquivo massa de dados', () => {
        cy.get('#search-input').type(catalogo[2].livros)
        cy.get('.card-title > .text-dark', { timeout: 40000 } ).should('contain', catalogo[2].livros)
    });

    it('Deve fazer a busca de um livro usando Fixture', () => {
        cy.fixture('Livros').then((cat) =>{
          cy.get('#search-input').type(cat[2].livros)
          cy.get('.card-title > .text-dark', { timeout: 40000 } ).should('contain', cat[2].livros)
        })
    });

    it('Deve validar todos os livros da lista', () => {
         cy.fixture('Livros').then((cat) =>{
            cat.forEach(iten =>{
              cy.get('#search-input').clear().type(iten.livros) 
                cy.get('.card-title > .text-dark',  { timeout: 40000 } ).should('contain', iten.livros)           
            })
         })
    });
});