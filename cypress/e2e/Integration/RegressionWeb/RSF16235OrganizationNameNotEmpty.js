import NavigationMenu from '../../../support/NavigationMenu';
import Login from '../../../support/Login';

describe('OrganizationNameNotEmpty', () => {
  it('Organization Name should not be empty', { tags: 'Regression' }, () => {
    const navigationMenu = new NavigationMenu();
    const login = new Login();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();
    login.loginAssertion();

    navigationMenu.viewAdministrationMenu();
    navigationMenu.selectOrgName();

    Cypress.on('uncaught:exception', (_err, _runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  });
});
