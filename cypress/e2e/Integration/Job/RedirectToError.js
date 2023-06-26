import Login from '../../../support/Login';

describe('RedirectJob', () => {
  it('Redirect Url To Error', { tags: 'CustomerJob' }, () => {
    const login = new Login();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    login.redirectError();

    Cypress.on(
      'uncaught:exception',
      (_err, _runnable) =>
        // returning false here prevents Cypress from
        // failing the test
        false
    );
  });
});
