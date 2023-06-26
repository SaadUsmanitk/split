import NavigationMenu from '../../../support/NavigationMenu';
import Login from '../../../support/Login';
import Appointments from '../../../support/GlobalAppointments';

describe('NavigateToJobFromSideBar', () => {
  it('Navigate To Job From Appointment SideBar', { tags: 'CustomerDashboard' }, () => {
    const navigationMenu = new NavigationMenu();
    const login = new Login();
    const appointments = new Appointments();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    login.loginAssertion();
    navigationMenu.viewApptSidebar();
    appointments.verifyAppointmentSidebarLength();
    appointments.navigateToJobFromSidebar();

    Cypress.on('uncaught:exception', (_err, _runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  });
});
