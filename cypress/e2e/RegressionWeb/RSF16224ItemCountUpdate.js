import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';
import Document from '../../../support/CustomerDetails/Document';

describe('UpdateItemCount', () => {
  it('Folder Deletion in Photos and Documents does not delete/update the count', { tags: 'Regression' }, () => {
    const login = new Login();
    const jobInformation = new JobInformation();
    const document = new Document();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    jobInformation.addNewJobFromFixture();
    jobInformation.saveNewJob();

    document.navigateToDocument();

    document.addNewFolder();
    document.writeFolderName();
    document.saveFolder();

    document.childInsideParentFolder();
    document.writeFolderName();
    document.saveFolder();

    document.childInsideChildFolder();
    document.writeFolderName();
    document.saveFolder();

    document.childInsideAnotherChildFolder();

    document.uploadFile();
    document.uploadFileAssert();
    document.updateItemCount();
  });

  Cypress.on('uncaught:exception', (_err, _runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
});
