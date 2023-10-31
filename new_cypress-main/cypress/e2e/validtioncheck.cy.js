describe('Тест формы логина', function () {
    it('Ввожу неверный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio');
         cy.get('#mail').type('germandolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.wait(1000);
         cy.contains('Нужно исправить проблему валидации').should('be.visible');
         
     })
 })
 