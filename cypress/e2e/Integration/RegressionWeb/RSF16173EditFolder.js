import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';
import Document from '../../../support/CustomerDetails/Document';

describe('MandatoryFolderName', () => {
  it('Name should be mandatory in Edit Folder', { tags: 'Regression' }, () => {
    const login = new Login();
    const jobInformation = new JobInformation();
    const document = new Document();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    jobInformation.addNewJobFromFixture();
    jobInformation.saveNewJob();

    document.navigateToDocument();

    document.addNewFolder();
    cy.fixture('folderName').then((newfolder) => {
      document.writeNames(newfolder.dname);
    });
    document.saveFolder();
    cy.contains('Automating New Folder in Documents');

    document.dotRightButton();
    document.editFolder();
    cy.fixture('folderName').then(() => {
      document.clearFolderName();
    });
    document.saveFolderWithoutName();

    Cypress.on('uncaught:exception', (_err, _runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false;
    });
  });
});
