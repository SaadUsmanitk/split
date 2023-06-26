import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';

describe('AddJobMandatoryFields', () => {
  it('Job should be saved after all mandatory fields are complete', { tags: 'Regression' }, () => {
    const login = new Login();
    const jobInformation = new JobInformation();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    jobInformation.addNewJobMandatoryFieldFromFixture();
    jobInformation.saveNewJob();
    jobInformation.newJobAssertion();

    Cypress.on(
      'uncaught:exception',
      (_err, _runnable) =>
        // returning false here prevents Cypress from
        // failing the test
        false
    );
  });
});
