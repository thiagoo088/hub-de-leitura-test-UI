///<reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: cadastro no hub de leitura', () => {

    beforeEach(() => {
        cy.visit("register.html")
    });

    it('deve fazer cadastro com sucesso usando faker', () => {
        let nome = faker.person.fullName()
        let email = faker.internet.email()
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('89995609821')
        cy.get('#password').type('teste.123')
        cy.get('#confirm-password').type('teste.123')
        cy.get('#terms-agreement').click()
        cy.get('#register-btn').click()
        cy.url({ timeout: 10000 }).should('include', 'dashboard.html')
        cy.get('#user-name').should('contain', nome)

    });

    it('deve fazer cadastro com sucesso', () => {
        let email = `teste${Date.now()}@teste.com`
        cy.get('#name').type('minguado nascimento')
        cy.get('#email').type(email)
        cy.get('#phone').type('123456789')
        cy.get('#password').type('teste.123')
        cy.get('#confirm-password').type('teste.123')
        cy.get('#terms-agreement').click()
        cy.get('#register-btn').click()
        cy.url({ timeout: 10000 }).should('include', 'dashboard.html')
    });

    it('deve preencher cadastro com sucesso - usando comando customizado', () => {
        let email = `teste${Date.now()}@teste.com`
        let nome = faker.person.fullName({ sex: 'male'})
         cy.preencherCadastro(
            nome, 
            email,
            '1198765432165',
            'Teste@123',
            'Teste@123',
        )
        cy.url({ timeout: 10000 }).should('include', 'dashboard.html')
    });

});