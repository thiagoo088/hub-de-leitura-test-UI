///<reference types="cypress"/>
import { faker } from '@faker-js/faker';
import cadastroPages from '../support/pages/cadastro-pages';

describe('Funcionalidade: cadastro no hub de leitura', () => {

    beforeEach(() => {
        cadastroPages.visitarPaginaCadastro()
    });

    afterEach(() => {
        cy.screenshot()
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
        cy.url().should('include', 'dashboard.html')
        cy.get('#user-name').should('contain', nome)
    });

    it('deve fazer cadastro com sucesso usando JS', () => {
    let email = `teste${Date.now()}@teste.com`
        cy.get('#name').type('minguado nascimento')
        cy.get('#email').type(email)
        cy.get('#phone').type('123456789')
        cy.get('#password').type('teste.123')
        cy.get('#confirm-password').type('teste.123')
        cy.get('#terms-agreement').click()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard.html')
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
        cy.url().should('include', 'dashboard.html')
    });

    it('Deve fazer cadastro com sucesso - usando pages objects', () => {
    let email = `teste${Date.now()}@teste.com`
        cadastroPages.preencherCadastro('Thiago do nascimento', email, '89994660099', 'teste123', 'teste123')
        cy.url().should('include', 'dashboard.html')
    });

    it('deve validar cadastro sem preencher nome', () => {
    let email = `teste${Date.now()}@teste.com`
        cadastroPages.preencherCadastro('',email, '89994660099', 'teste123', 'teste123')
        cy.get(':nth-child(1) > .invalid-feedback').should('contain', 'Nome deve ter pelo menos 2 caracteres')
    });

    it('deve validar cadastro sem preencher o campo email', () => {
        cadastroPages.preencherCadastro('thiago nascimento','', '89994660099', 'teste123', 'teste123')
        cy.get('#register-form > :nth-child(2) > .invalid-feedback').should('contain', 'Email válido é obrigatório')
    });

    it('deve validar cadastro sem preencher o campo confirmar senha', () => {
    let email = `teste${Date.now()}@teste.com`
        cadastroPages.preencherCadastro('thiago nascimento',email, '89994660099', 'teste123', '')
        cy.get(':nth-child(5) > .invalid-feedback').should('contain', 'Senhas não coincidem')
    });
});