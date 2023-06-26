import NavigationMenu from '../../../support/NavigationMenu';
import Login from '../../../support/Login';
import AdministrationNavigation from '../../../support/AdministrationNavigation';

describe('ViewBilling', () => {
  it('View Billing Page In Administration', { tags: 'Visit' }, () => {
    const navigationMenu = new NavigationMenu();
    const login = new Login();
    const administrationNavigation = new AdministrationNavigation();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    login.loginAssertion();
    navigationMenu.viewAdministrationMenu();
    administrationNavigation.selectAdministration();
    administrationNavigation.viewbilling();
    Cypress.on('uncaught:exception', (_err, _runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  });
});
