import Login from '../../../support/Login';

describe('LearnMore', () => {
  it('Learn More About One Click Contractor', { tags: 'Smoke' }, () => {
    const login = new Login();
    login.visitPage();
    login.showLearnMore();

    Cypress.on(
      'uncaught:exception',
      (_err, _runnable) =>
        // returning false here prevents Cypress from
        // failing the test
        false
    );
  });
});
