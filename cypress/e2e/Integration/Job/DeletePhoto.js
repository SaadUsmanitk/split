import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';
import Photos from '../../../support/CustomerDetails/Photos';

describe('DeletePhoto', () => {
  it('Deleting Image in Photos', { tags: 'CustomerJob' }, () => {
    const login = new Login();
    const jobInformation = new JobInformation();
    const photos = new Photos();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    jobInformation.addNewJobFromFixture();
    jobInformation.saveNewJob();

    photos.navigateToPhoto();

    photos.uploadFiles();

    photos.uploadFileAssert();

    photos.deletePhoto();
  });
  Cypress.on(
    'uncaught:exception',
    (_err, _runnable) =>
      // returning false here prevents Cypress from
      // failing the test
      false
  );
});
