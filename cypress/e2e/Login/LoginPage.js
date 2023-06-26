import Login from '../../../support/Login';

describe('Login', () => {
  it('Login To One Click Contractor', { tags: 'Smoke' }, () => {
    const login = new Login();
    login.visitPage();
    login.setLoginEmailAndPassword(Cypress.env('adminUsername'), Cypress.env('adminPassword'));
    login.loginAssertion();

    Cypress.on(
      'uncaught:exception',
      (_err, _runnable) =>
        // returning false here prevents Cypress from
        // failing the test
        false
    );
  });
});
