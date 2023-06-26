import Login from '../../../support/Login';

describe('Terms & Conditions', () => {
  it('Terms & Conditions page not visible', { tags: 'Regression' }, () => {
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
