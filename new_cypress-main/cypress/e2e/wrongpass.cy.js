describe('Тестирование главной гугла', function () {
    it('Ввожу верный логин и неверный пароль', function () {
         cy.visit('https://login.qa.studio');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1111');
         cy.get('#loginButton').click();
         cy.wait(1000);
         cy.contains('Такого логина или пароля нет').should('be.visible');
         
     })
 })
 