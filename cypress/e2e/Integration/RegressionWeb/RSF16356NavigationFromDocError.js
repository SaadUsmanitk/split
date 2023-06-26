import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';
import Document from '../../../support/CustomerDetails/Document';
import ViewCustomerMenuOptions from '../../../support/ViewCustomerMenuOptions';

describe('NavigationFromDocError', () => {
  it('Navigation from Document Tab Magic Wand throws an error', { tags: 'Regression' }, () => {
    const login = new Login();
    const jobInformation = new JobInformation();
    const document = new Document();
    const customermenu = new ViewCustomerMenuOptions();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    jobInformation.addNewJobFromFixture();
    jobInformation.saveNewJob();

    document.navigateToDocument();
    document.resource();
    document.navigateToFolder();
    document.clickMagicWandOnly();
    document.clickPdfOkButton();
    customermenu.viewTools();
  });
  Cypress.on('uncaught:exception', (_err, _runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
});
