import Login from '../../../support/Login';

describe('Reset Password', () => {
  it('Reset Password Of One Click Contractor', { tags: 'Smoke' }, () => {
    const login = new Login();
    login.visitPage();
    login.resetPass('test@tkxel.io');

    Cypress.on(
      'uncaught:exception',
      (_err, _runnable) =>
        // returning false here prevents Cypress from
        // failing the test
        false
    );
  });
});
