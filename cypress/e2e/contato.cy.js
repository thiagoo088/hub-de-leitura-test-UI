///<reference types="cypress"/>

describe('funcionalidade: contato', () => {

  beforeEach(() => {
    cy.visit('index.html')
  });

  it('deve preencher formulario de contato com sucesso', () => {
    cy.get('[name="name"]').type('Thiago nascimento')
    cy.get('[name="email"]').type('thiago@teste.com')
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('meu primeiro teste automatizado :)')
    cy.get('#btn-submit').click()
    cy.contains('Contato enviado com sucesso!', { timeout: 40000 }).should('exist')

  });

  it('deve validar mensagem de erro ao enviar sem preencher nome', () => {
    cy.get('[name="email"]').type('thiago@teste.com')
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('meu primeiro teste automatizado :)')
    cy.get('#btn-submit').click()
    cy.get('#alert-container',  { timeout: 40000 } ).should('contain', 'Por favor, preencha o campo Nome')
    
  });

  it('deve validar mensagem de erro ao enviar sem preencher email', () => {
    cy.get('[name="name"]').type('Thiago nascimento')
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('[name="message"]').type('meu primeiro teste automatizado :)')
    cy.get('#btn-submit').click()
    cy.get('#alert-container',  { timeout: 40000 } ).should('contain', 'Por favor, preencha o campo E-mail')

  });

  it('deve validar mensagem de erro ao enviar sem selecionar o assunto', () => {
    cy.get('[name="name"]').type('Thiago nascimento')
    cy.get('[name="email"]').type('thiago@teste.com')
    cy.get('[name="message"]').type('meu primeiro teste automatizado :)')
    cy.get('#btn-submit').click()
    cy.get('#alert-container',  { timeout: 40000 } ).should('contain', 'Por favor, selecione o Assunto')

  });

  it('deve validar mensagem de erro sem preencher a mensagem', () => {
    cy.get('[name="name"]').type('Thiago nascimento')
    cy.get('[name="email"]').type('thiago@teste.com')
    cy.get('[name="subject"]').select('Sugestões')
    cy.get('#btn-submit').click()
    cy.get('#alert-container',  { timeout: 40000 } ).should('contain', 'Por favor, escreva sua Mensagem')

  });

});