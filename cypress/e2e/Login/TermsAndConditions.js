import Login from '../../../support/Login';

describe('Terms & Conditions', () => {
  it('Terms & Conditions Page Of One Click Contractor', { tags: 'Smoke' }, () => {
    const login = new Login();
    login.visitPage();
    login.showTermsAndConditions();

    Cypress.on(
      'uncaught:exception',
      (_err, _runnable) =>
        // returning false here prevents Cypress from
        // failing the test
        false
    );
  });
});
