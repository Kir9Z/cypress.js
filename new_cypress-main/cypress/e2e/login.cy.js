describe('Тестирование главной гугла', function () {
    it('Ввожу верный логин и пароль', function () {
         cy.visit('https://login.qa.studio');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.wait(1000);
         cy.contains('Авторизация прошла успешно').should('be.visible');
         
     })
 })
 