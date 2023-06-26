import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';
import Photos from '../../../support/CustomerDetails/Photos';

describe('EditFolder', () => {
  it('Edit Folder Name in Photos', { tags: 'CustomerJob' }, () => {
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
    photos.editFolder();
    cy.fixture('folderName').then((edit) => {
      photos.renameFolder(edit.newname);
    });

    photos.saveFolder();

    cy.contains('Saved folder successfully');
    Cypress.on(
      'uncaught:exception',
      (_err, _runnable) =>
        // returning false here prevents Cypress from
        // failing the test
        false
    );
  });
});
