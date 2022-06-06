/// <reference types = "cypress" />

describe('Funcionalidade Página de produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block > .block-inner > .image > .product-image > .image-hover').first().click()

    });

    it('Deve adicionar um produto ao carrinho', () => {
        cy.get('[class="product-block grid"]')
        .contains('Aero Daily Fitness Tee').click()
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Black').click()
        cy.get('.input-text').clear().type(2)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain',2)
        cy.get('.woocommerce-message').should('contain','2 × “Aero Daily Fitness Tee” foram adicionados no seu carrinho.')

    })

})