import Login from '../../../support/Login';

describe('RedirectJob', () => {
  it('Redirect Url To Info', { tags: 'CustomerJob' }, () => {
    const login = new Login();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    login.redirectInfo();

    Cypress.on(
      'uncaught:exception',
      (_err, _runnable) =>
        // returning false here prevents Cypress from
        // failing the test
        false
    );
  });
});
