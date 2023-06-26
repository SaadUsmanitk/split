import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';
import Document from '../../../support/CustomerDetails/Document';

describe('ResourceDocumentsFolder', () => {
  it('Resource Documents Folder Navigation should load relevant documents', { tags: 'Regression' }, () => {
    const login = new Login();
    const jobInformation = new JobInformation();
    const document = new Document();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    jobInformation.addNewJobFromFixture();
    jobInformation.saveNewJob();

    document.navigateToDocument();
    document.resource();
    document.navigateToFolder();
    document.clickMagicWandOnly();
    document.clickPdfCloseButton();
  });
  Cypress.on('uncaught:exception', (_err, _runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
});
