import NavigationMenu from '../../../support/NavigationMenu';
import Login from '../../../support/Login';

describe('BacktoCustomer', () => {
  it('Back to Customer Page One Click Contractor', { tags: 'CustomerDashboard' }, () => {
    const navigationMenu = new NavigationMenu();
    const login = new Login();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    login.loginAssertion();
    navigationMenu.viewCustomerDetailScreen();

    Cypress.on('uncaught:exception', (_err, _runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  });
});
