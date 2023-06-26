import Login from '../../../support/Login';
import NavigationMenu from '../../../support/NavigationMenu';
import ViewCustomerMenuOptions from '../../../support/ViewCustomerMenuOptions';
import JobInformation from '../../../support/CustomerDetails/JobInformation';
import Document from '../../../support/CustomerDetails/Document';

describe('AddJobMultipleFlashes', () => {
  it('Multiple Flashes show when adding a new Job', { tags: 'Regression' }, () => {
    const login = new Login();
    const viewCustomerMenuOptions = new ViewCustomerMenuOptions();
    const navigationMenu = new NavigationMenu();
    const jobInformation = new JobInformation();
    const document = new Document();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    navigationMenu.viewCustomerDetailScreen();
    viewCustomerMenuOptions.viewInformation();

    document.navigateToDocument();

    document.addNewFolder();
    document.writeFolderName();
    document.saveFolder();

    navigationMenu.backToCustomersScreen();

    jobInformation.addNewJobFromFixture();
    jobInformation.saveNewJob();
    jobInformation.newJobAssertion();

    Cypress.on(
      'uncaught:exception',
      (_err, _runnable) =>
        // returning false here prevents Cypress from
        // failing the test
        false
    );
  });
});
