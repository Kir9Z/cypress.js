describe('Тест формы логина', function () {
    it('Проверка регистра', function () {
         cy.visit('https://login.qa.studio');
         cy.get('#mail').type('GerMan@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.wait(1000);
         cy.contains('Нужно исправить проблему валидации').should('be.visible');
         
     })
 })
 