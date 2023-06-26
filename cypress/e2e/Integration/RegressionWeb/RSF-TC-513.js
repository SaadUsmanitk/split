import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';
import Photos from '../../../support/CustomerDetails/Photos';

describe('Rsf537', () => {
  it('Rsf-Tc-537', { tags: 'Regression' }, () => {
    const login = new Login();
    const jobInformation = new JobInformation();
    const photos = new Photos();
    login.visitPage();
    login.setLoginEmailAndPassword(Cypress.env('adminUsername'), Cypress.env('adminPassword'));

    jobInformation.addNewJobFromFixture();
    jobInformation.saveNewJob();

    photos.navigateToPhoto();
    cy.fixture('folderName').then((invite) => {
      photos.sendInviteemail(invite.email);
    });
    photos.sendInviteAssert();
  });
  Cypress.on(
    'uncaught:exception',
    (_err, _runnable) =>
      // returning false here prevents Cypress from
      // failing the test
      false
  );
});
