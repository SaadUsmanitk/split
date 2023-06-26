import Login from '../../../support/Login';
import NavigationMenu from '../../../support/NavigationMenu';
import ViewCustomerMenuOptions from '../../../support/ViewCustomerMenuOptions';

describe('ViewCustomerInformation', () => {
  it('View Customer Information', { tags: 'Visit' }, () => {
    const login = new Login();
    const viewCustomerMenuOptions = new ViewCustomerMenuOptions();
    const navigationMenu = new NavigationMenu();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    navigationMenu.viewCustomerDetailScreen();
    viewCustomerMenuOptions.viewInformation();
  });
  Cypress.on(
    'uncaught:exception',
    (_err, _runnable) =>
      // returning false here prevents Cypress from
      // failing the test
      false
  );
});
