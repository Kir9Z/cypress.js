describe('Тестирование главной гугла', function () {
    it('Восстановление пароля', function () {
         cy.visit('https://login.qa.studio');
         cy.get('#forgotEmailButton').click();
         cy.get('#mailForgot').type('CCdCasd@mail.ru');
         cy.get('#restoreEmailButton').click();
         cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
         
     })
 })