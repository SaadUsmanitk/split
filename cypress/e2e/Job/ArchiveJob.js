import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';

describe('Archivejob', () => {
  it('Archive Job', { tags: 'CustomerJob' }, () => {
    const login = new Login();
    const jobInformation = new JobInformation();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    jobInformation.addNewJobFromFixture();
    jobInformation.saveNewJob();
    jobInformation.newJobAssertion();
    jobInformation.archiveTheJob();

    Cypress.on(
      'uncaught:exception',
      (_err, _runnable) =>
        // returning false here prevents Cypress from
        // failing the test
        false
    );
  });
});
