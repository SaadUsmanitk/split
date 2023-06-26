import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';
import Signature from '../../../support/CustomerDetails/Signature';
import Document from '../../../support/CustomerDetails/Document';

describe('RenameDocument', () => {
  it('Renaming The Signable Document', { tags: 'CustomerJob' }, () => {
    const login = new Login();
    const jobInformation = new JobInformation();
    const signature = new Signature();
    const document = new Document();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    jobInformation.addNewJobFromFixture();
    jobInformation.saveNewJob();
    document.navigateToDocument();
    document.uploadFile();
    document.uploadFileAssert();
    signature.visitSignaturePage();
    signature.signableDocButton();
    signature.renameDocument();
    signature.selectDocument();
    signature.createDocument();
    signature.cancelOnScreenModal();
  });
  Cypress.on('uncaught:exception', (_err, _runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
});
