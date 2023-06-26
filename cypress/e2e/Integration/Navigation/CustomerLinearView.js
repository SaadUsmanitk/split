import NavigationMenu from '../../../support/NavigationMenu';
import Login from '../../../support/Login';

describe('AppointmentPage', () => {
  it('Appointment Page One Click Contractor', { tags: 'CustomerDashboard' }, () => {
    const navigationMenu = new NavigationMenu();
    const login = new Login();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    login.loginAssertion();
    navigationMenu.viewCustomersInLinearView();

    Cypress.on('uncaught:exception', (_err, _runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  });
});
