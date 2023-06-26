import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';
import Photos from '../../../support/CustomerDetails/Photos';

describe('DeleteFolder', () => {
  it('Delet Folder in photos', { tags: 'CustomerJob' }, () => {
    const login = new Login();
    const jobInformation = new JobInformation();
    const photos = new Photos();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    jobInformation.addNewJobFromFixture();
    jobInformation.saveNewJob();

    photos.navigateToPhoto();

    photos.addNewFolder();
    cy.fixture('folderName').then((newfolder) => {
      photos.writeNames(newfolder.name);
    });

    photos.saveFolder();

    cy.contains('Automating New Folder in Photos');

    photos.dotRightButton();

    photos.deleteFolder();
  });
  Cypress.on(
    'uncaught:exception',
    (_err, _runnable) =>
      // returning false here prevents Cypress from
      // failing the test
      false
  );
});
