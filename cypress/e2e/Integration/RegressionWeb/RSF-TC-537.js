import Login from '../../../support/Login';
import Photos from '../../../support/CustomerDetails/Photos';
import JobInformation from '../../../support/CustomerDetails/JobInformation';

describe('Rsf537', () => {
  it('Rsf-Tc-537', { tags: 'Regression' }, () => {
    const login = new Login();
    const photos = new Photos();
    const jobInformation = new JobInformation();

    login.visitPage();
    login.setLoginEmailAndPassword(Cypress.env('adminUsername'), Cypress.env('adminPassword'));
    login.loginAssertion();

    jobInformation.addNewJobFromFixture();
    jobInformation.saveNewJob();

    photos.navigateToPhoto();

    photos.addNewFolder();
    photos.clicksavebutton();
    cy.contains('Required');

    Cypress.on(
      'uncaught:exception',
      (_err, _runnable) =>
        // returning false here prevents Cypress from
        // failing the test
        false
    );
  });
});
