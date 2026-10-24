class CadastroPages {

    //seletores
    campoNome() { return cy.get('#name') }
    campoEmail() { return cy.get('#email') }
    campoTelefone() { return cy.get('#phone') }
    campoSenha() { return cy.get('#password') }
    campoConfirmarSenha() { return cy.get('#confirm-password') }
    checkTermos() { return cy.get('#terms-agreement') }
    botaoRegister() { return cy.get('#register-btn') }

    //métodos
    visitarPaginaCadastro() {
        cy.visit('register.html')
    }

    preencherCadastro(nome, email, telefone, senha, confirmarsenha) {
        if (nome) this.campoNome().clear().type(nome)
        if (email) this.campoEmail().clear().type(email)
        this.campoTelefone().clear().type(telefone)
        if(senha) this.campoSenha().clear().type(senha)
        if(confirmarsenha)this.campoConfirmarSenha().clear().type(confirmarsenha)
        this.checkTermos().check()
        this.botaoRegister().click()

    }




}

export default new CadastroPages(


)