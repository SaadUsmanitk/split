import Login from '../../../support/Login';
import JobInformation from '../../../support/CustomerDetails/JobInformation';

describe('AddJobMandatoryFields', () => {
  it('Job should be not saved if form is empty', { tags: 'CustomerJob' }, () => {
    const login = new Login();
    const jobInformation = new JobInformation();

    login.setLoginEmailAndPasswordUsingApi();
    login.visitPage();

    jobInformation.address2Mandatory();

    Cypress.on(
      'uncaught:exception',
      (_err, _runnable) =>
        // returning false here prevents Cypress from
        // failing the test
        false
    );
  });
});
