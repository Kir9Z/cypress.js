describe('Тестирование главной гугла', function () {
    it('Ввожу неверный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio');
         cy.get('#mail').type('german2323@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.wait(1000);
         cy.contains('Такого логина или пароля нет').should('be.visible');
         
     })
 })
 