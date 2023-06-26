import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';
import Photos from '../../../support/CustomerDetails/Photos';

describe('Refresh Photos', () => {
  it('Refresh Button In Photos', { tags: 'CustomerJob' }, () => {
    const login = new Login();
    const jobInformation = new JobInformation();
    const photos = new Photos();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    jobInformation.addNewJobFromFixture();
    jobInformation.saveNewJob();

    photos.navigateToPhoto();
    photos.refreshPhotos();
  });
  Cypress.on(
    'uncaught:exception',
    (_err, _runnable) =>
      // returning false here prevents Cypress from
      // failing the test
      false
  );
});
