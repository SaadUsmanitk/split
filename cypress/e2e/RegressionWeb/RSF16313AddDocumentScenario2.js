import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';
import Document from '../../../support/CustomerDetails/Document';
import Photo from '../../../support/CustomerDetails/Photos';

describe('UploadingDocument', () => {
  it('Uploading pdf file in Document', { tags: 'Regression' }, () => {
    const login = new Login();
    const jobInformation = new JobInformation();
    const document = new Document();
    const photo = new Photo();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    jobInformation.addNewJobFromFixture();
    jobInformation.saveNewJob();

    document.navigateToDocument();

    document.uploadFile();
    document.uploadFileAssert();

    photo.navigateToPhoto();
    document.addNewFolder();
    document.writeFolderName();
    document.saveFolder();
    document.childInsideAnotherChildFolder();

    document.navigateToDocument();
  });
  Cypress.on('uncaught:exception', (_err, _runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
});
