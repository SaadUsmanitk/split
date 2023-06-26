import NavigationMenu from '../../../support/NavigationMenu';
import Login from '../../../support/Login';

describe('ProfileDropDown', () => {
  it('Profile Link Needs to include the whole box, not just the word', { tags: 'Regression' }, () => {
    const navigationMenu = new NavigationMenu();
    const login = new Login();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();
    login.loginAssertion();

    navigationMenu.profileMenu();

    Cypress.on('uncaught:exception', (_err, _runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  });
});
