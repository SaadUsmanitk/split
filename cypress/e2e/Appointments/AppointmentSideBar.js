import NavigationMenu from '../../../support/NavigationMenu';
import Login from '../../../support/Login';

describe('AppointmentSideBar', () => {
  it('View Appointment SideBar Page', { tags: 'CustomerDashboard' }, () => {
    const navigationMenu = new NavigationMenu();
    const login = new Login();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    login.loginAssertion();
    navigationMenu.viewApptSidebar();

    Cypress.on('uncaught:exception', (_err, _runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  });
});
