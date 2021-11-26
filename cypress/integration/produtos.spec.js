/// <reference types="cypress" />

describe('Funcionalidade página de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve adicionar 2 produtos ao carrinho', () => {
        cy.addProdutos('Ajax Full-Zip Sweatshirt', 'S', 'Red', 2)

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 2)
        cy.get('.woocommerce-message').should('contain', 2 + ' × “Ajax Full-Zip Sweatshirt” foram adicionados no seu carrinho.')
    });
});