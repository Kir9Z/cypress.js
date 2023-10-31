describe('Тест покемонов', function () {
    it('Проверка покупки аватара', function () {
         cy.visit('https://pokemonbattle.me/login');
         cy.get(':nth-child(1) > .auth__input').type('vorzuyestu@gufum.com');
         cy.get('#password').type('A11111');
         cy.get('.auth__button').click();
         cy.get('.header__btns > [href="/shop"]').click();
         cy.get(':nth-child(3) > .shop__button').click();
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('8531 4622 2264 1436');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1126');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('BASKETBOL VOLEYBOLOV');
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.contains('Покупка прошла успешно').should('be.visible');

     })
 })
 