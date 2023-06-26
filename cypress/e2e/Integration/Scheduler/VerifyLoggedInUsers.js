import NavigationMenu from '../../../support/NavigationMenu';
import Login from '../../../support/Login';
import Scheduler from '../../../support/Scheduler';

describe('SchedulerUser', () => {
  it('Verify Scheduler User Field', { tags: 'CustomerDashboard' }, () => {
    const navigationMenu = new NavigationMenu();
    const login = new Login();
    const scheduler = new Scheduler();

    login.visitPage();
    login.setLoginEmailAndPassword(Cypress.env('assignToUserName'), Cypress.env('assigntoPassowrd'));
    login.loginAssertion();

    navigationMenu.viewScheduler();
    scheduler.userField();
    scheduler.verifyLoggedInUsers();

    Cypress.on('uncaught:exception', (_err, _runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  });
});
