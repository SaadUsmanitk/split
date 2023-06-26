import NavigationMenu from '../../../support/NavigationMenu';
import Login from '../../../support/Login';
import Scheduler from '../../../support/Scheduler';

describe('SchedulerAssign', () => {
  it('Scheduler Assign To Field', { tags: 'CustomerDashboard' }, () => {
    const navigationMenu = new NavigationMenu();
    const login = new Login();
    const scheduler = new Scheduler();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    login.loginAssertion();
    navigationMenu.viewScheduler();
    scheduler.assignToField();
    Cypress.on('uncaught:exception', (_err, _runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  });
});
